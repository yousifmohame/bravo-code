// app/robots.js
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/dashboard/', '/projects', '/projects/'],
      },
    ],
    sitemap: 'https://bravocode.vercel.app/sitemap.xml',
  };
}