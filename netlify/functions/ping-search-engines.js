exports.handler = async function () {
  const sitemapUrl = "https://orcatech.netlify.app/sitemap.xml";

  const google = `http://www.google.com/ping?sitemap=${sitemapUrl}`;
  const bing = `http://www.bing.com/ping?sitemap=${sitemapUrl}`;

  await fetch(google);
  await fetch(bing);

  return {
    statusCode: 200,
    body: "Ping sent to Google & Bing!"
  };
};