import { getStore } from "@netlify/blobs";

const store = getStore("images");

export async function handler(event) {
  const file = JSON.parse(event.body);
  const name = `${Date.now()}-${file.name}`;

  await store.set(name, file.base64, {
    metadata: { type: file.type },
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      url: `https://api.netlify.com/api/v1/blobs/${process.env.NETLIFY_SITE_ID}/images/${name}`,
    }),
  };
}