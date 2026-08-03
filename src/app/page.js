import HomePageClient from '@/components/HomePageClient';

// --- جلب البيانات من جهة الخادم ---
async function getFeaturedProjects() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, {
      cache: 'no-store',
    });
    if (!response.ok) return [];
    const allProjects = await response.json();
    return allProjects.slice(0, 3);
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}

// --- المكون الرئيسي للصفحة (مكون خادم) ---
export default async function HomePage() {
  const projects = await getFeaturedProjects();

  // نمرر البيانات إلى مكون العميل الذي يحتوي على التصميم
  return <HomePageClient projects={projects} />;
}