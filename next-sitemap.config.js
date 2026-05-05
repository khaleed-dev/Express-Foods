/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://expressfoodsco.com",
  generateRobotsTxt: true,
  exclude: ["/admin/*", "/apple-icon", "/icon.svg", "/manifest.webmanifest"],
};
