import Image from 'next/image';
import Link from 'next/link';

async function getProjects() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, {
      cache: 'no-store'
    });
    if (!res.ok) {
      throw new Error('فشل في جلب المشاريع');
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return []; // إرجاع مصفوفة فارغة في حالة حدوث خطأ
  }
}

export const metadata = {
  title: "أعمالنا | Bravocode",
  description: "تصفح مجموعة من المشاريع التي قمنا بتطويرها لعملائنا.",
};

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          إبداعاتنا <span className="text-cyan-400">الرقمية</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-300">
          مجموعة من المشاريع التي تظهر شغفنا ببناء تجارب ويب حديثة وسريعة وبديهية.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project.id} href={`/portfolio/${project.id}`} className="block bg-slate-800 rounded-lg overflow-hidden group shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative w-full h-64">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-400 mt-2 h-20 overflow-hidden">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies?.map((tech, index) => (
                  <span key={index} className="bg-cyan-900/50 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}