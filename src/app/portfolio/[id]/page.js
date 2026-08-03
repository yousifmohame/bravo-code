import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt, FaCode, FaMoneyBillWave, FaLayerGroup } from "react-icons/fa";

async function getProjectDetails(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${id}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const project = await getProjectDetails(params.id);
  if (!project) return { title: "المشروع غير موجود" };
  return {
    title: `${project.title} | Bravocode`,
    description: project.description.substring(0, 160),
    openGraph: {
      images: project.galleryImages ? [project.galleryImages[0]] : [],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const project = await getProjectDetails(params.id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white" dir="rtl">
        <div className="text-center p-8 max-w-md">
          <h2 className="text-3xl font-bold mb-4 text-rose-500">عذراً!</h2>
          <p className="text-xl mb-6">المشروع غير موجود أو حدث خطأ ما</p>
          <Link 
            href="/portfolio" 
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
          >
            العودة إلى الأعمال <FaArrowLeft />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {project.galleryImages?.[0] && (
            <Image
              src={project.galleryImages[0]}
              alt={project.title}
              fill
              className="object-cover"
              quality={10}
            />
          )}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center bg-gradient-to-l from-cyan-500/20 to-cyan-900/30 text-cyan-300 font-medium px-4 py-2 rounded-full mb-6 border border-cyan-800/50">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 text-white leading-tight">
              {project.title}
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              {project.shortDescription || project.description.substring(0, 120) + '...'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto">
          {/* Featured Image */}
          {project.galleryImages?.[0] && (
            <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 transform hover:scale-[1.005] transition-transform duration-300">
              <div className="relative w-full h-64 md:h-96 lg:h-[500px]">
                <Image
                  src={project.galleryImages[0]}
                  alt={`الصورة الرئيسية لـ ${project.title}`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
              </div>
            </div>
          )}

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <article className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
                <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-cyan-500/30 flex items-center gap-3">
                  <FaLayerGroup className="text-cyan-400" />
                  <span>تفاصيل المشروع</span>
                </h2>
                <div
                  className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </article>

              {/* Gallery */}
              {project.galleryImages && project.galleryImages.length > 1 && (
                <div className="mt-16">
                  <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <FaCode className="text-cyan-400" />
                    <span>معرض الصور</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {project.galleryImages.slice(1).map((url, index) => (
                      <div
                        key={index}
                        className="group relative w-full h-64 sm:h-80 rounded-xl overflow-hidden shadow-lg border border-slate-700/50 hover:border-cyan-400/30 transition-all"
                      >
                        <Image
                          src={url}
                          alt={`${project.title} - صورة ${index + 2}`}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6 sticky top-6 h-fit">
              {/* Pricing Card */}
              <div className="bg-gradient-to-bl from-purple-900/50 via-slate-800/80 to-cyan-900/50 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                  <FaMoneyBillWave className="text-purple-300" />
                  <span>سعر المشروع</span>
                </h3>
                <p className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-2">
                  {new Intl.NumberFormat("ar-EG", {
                    style: "currency",
                    currency: "EGP",
                    minimumFractionDigits: 0,
                  }).format(project.price)}
                </p>
                <p className="text-gray-400 text-sm">السعر يختلف حسب متطلبات المشروع</p>
              </div>

              {/* Technologies Card */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                  <FaCode className="text-cyan-400" />
                  <span>التقنيات المستخدمة</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-br from-slate-700/50 to-slate-800/70 text-cyan-300 text-sm px-4 py-2 rounded-lg border border-slate-600/50 hover:bg-slate-700/70 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    <span>زيارة الموقع</span> <FaExternalLinkAlt />
                  </Link>
                )}
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-slate-700/50 to-slate-800/70 hover:from-slate-700/70 hover:to-slate-800/90 text-white font-bold py-4 px-6 rounded-xl border border-slate-600/50 transition-all"
                >
                  بدء مشروع مماثل
                </Link>
              </div>

              {/* Project Meta */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 text-white">معلومات المشروع</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-400">التصنيف</p>
                    <p className="font-medium">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">تاريخ الانتهاء</p>
                    <p className="font-medium">
                      {project.completionDate || "غير محدد"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">العميل</p>
                    <p className="font-medium">
                      {project.client || "سري"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-16 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium px-6 py-3 rounded-lg border border-slate-700/50 hover:bg-slate-800/50"
            >
              العودة إلى الأعمال <FaArrowLeft />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}