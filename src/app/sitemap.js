// app/sitemap.js
export default async function sitemap() {
  const baseUrl = "https://bravocode.vercel.app";

  let projects = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, {
      cache: "no-store",
      next: { revalidate: 3600 }, // إعادة التحقق كل ساعة
    });

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) {
        projects = data;
      }
    }
  } catch (err) {
    console.error("Error fetching projects for sitemap:", err);
    // لا نوقف الخريطة بسبب خطأ في المشاريع
  }

  const staticUrls = [
    { url: `${baseUrl}`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/portfolio`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/privacy`, lastModified: new Date() },
    { url: `${baseUrl}/terms`, lastModified: new Date() },
  ];

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.id}`,
    lastModified: project.createdAt ? new Date(project.createdAt) : new Date(),
  }));

  const allUrls = [...staticUrls, ...projectUrls];

  return allUrls.map((item) => ({
    url: item.url,
    lastModified: item.lastModified.toISOString().split("T")[0], // تنسيق YYYY-MM-DD (موصى به)
    changeFrequency: "weekly", // اختياري: يساعد Google
    priority: item.url === baseUrl ? 1.0 : 0.8, // الصفحة الرئيسية أهم
  }));
}
