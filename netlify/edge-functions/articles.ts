import { getStore } from "@netlify/blobs";

export default async (req: Request) => {
  const store = getStore("articles");

  const url = new URL(req.url);
  const lang = url.searchParams.get("lang") || "en";
  const track = url.searchParams.get("track");
  const slug = url.searchParams.get("slug");

  const password = req.headers.get("x-dashboard-pass");
  if (password !== Deno.env.get("DASHBOARD_PASSWORD")) {
    return new Response("Unauthorized", { status: 401 });
  }

  const key = `blog-${lang}`;
  let articles = (await store.get(key, { type: "json" })) || [];

  /* ===== TRACKING ===== */
  if (track && slug) {
    articles = articles.map((a: any) =>
      a.slug === slug
        ? {
            ...a,
            views: track === "view" ? (a.views || 0) + 1 : a.views,
            leads: track === "lead" ? (a.leads || 0) + 1 : a.leads,
          }
        : a
    );

    await store.set(key, articles);
    return new Response("tracked");
  }

  /* ===== MUTATIONS ===== */
  if (req.method !== "GET") {
    const body = await req.json();

    if (req.method === "POST") {
      articles.push({
        ...body,
        id: crypto.randomUUID(),
        views: 0,
        leads: 0,
        publishedAt: new Date().toISOString(),
      });
    }

    if (req.method === "PUT") {
      articles = articles.map((a: any) =>
        a.id === body.id ? { ...a, ...body } : a
      );
    }

    if (req.method === "DELETE") {
      articles = articles.filter((a: any) => a.id !== body.id);
    }

    await store.set(key, articles);
  }

  return new Response(JSON.stringify(articles), {
    headers: { "Content-Type": "application/json" },
  });
};