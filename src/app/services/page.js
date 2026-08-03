import ServicesPageClient from "@/components/ServicesPageClient";

async function getProjects() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const metadata = {
  title: "خدماتنا | Bravocode",
  description: "اكتشف خدماتنا في بناء وتصميم تطبيقات الويب المخصصة والمواقع المبنية على مشاريعنا السابقة.",
};

export default async function ServicesPage() {
  const projects = await getProjects();
  return <ServicesPageClient projects={projects} />;
}
