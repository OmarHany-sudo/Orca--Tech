import { getStore } from "@netlify/blobs";
import crypto from "crypto";

const store = getStore("articles", {
  siteID: process.env.NETLIFY_SITE_ID,
  token: process.env.NETLIFY_AUTH_TOKEN,
});

export async function handler(event) {
  const headers = event.headers || {};
const receivedPassword =
  headers["x-dashboard-pass"] ||
  headers["X-Dashboard-Pass"] ||
  headers["x-dashboard-pass".toLowerCase()];

if (!receivedPassword || receivedPassword !== process.env.DASHBOARD_PASSWORD) {
  return {
    statusCode: 401,
    body: JSON.stringify({
      error: "Unauthorized",
      received: receivedPassword || null,
    }),
  };
}

  const params = event.queryStringParameters || {};
  const lang = params.lang || "en";
  const key = `blog-${lang}`;

  let articles = (await store.get(key, { type: "json" })) || [];

  /* ===== TRACKING ===== */
  if (params.track && params.slug) {
    articles = articles.map(a =>
      a.slug === params.slug
        ? {
            ...a,
            views: params.track === "view" ? (a.views || 0) + 1 : a.views,
            leads: params.track === "lead" ? (a.leads || 0) + 1 : a.leads,
          }
        : a
    );

    await store.set(key, articles);
    return { statusCode: 200, body: "tracked" };
  }

  const body = event.body ? JSON.parse(event.body) : null;

  /* ===== CREATE ===== */
  if (event.httpMethod === "POST") {
    articles.push({
      ...body,
      id: crypto.randomUUID(),
      views: 0,
      leads: 0,
      publishedAt: new Date().toISOString(),
    });
  }

  /* ===== UPDATE ===== */
  if (event.httpMethod === "PUT") {
    articles = articles.map(a =>
      a.id === body.id ? { ...a, ...body } : a
    );
  }

  /* ===== DELETE ===== */
  if (event.httpMethod === "DELETE") {
    articles = articles.filter(a => a.id !== body.id);
  }

  await store.set(key, articles);

  return {
    statusCode: 200,
    body: JSON.stringify(articles),
  };
}