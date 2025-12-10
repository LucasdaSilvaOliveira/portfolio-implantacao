import PageContainer from "../components/PageContainer";
import CardProject from "../components/Card/CardProject";
import { useState } from "react";

export default function Projects() {

  // const [filter, setFilter] = useState("todos");




  const projects = [
    {
      title: "Projeto Alpha",
      description: "Plataforma de análise de dados para otimização de e-commerce.",
      tags: ["React", "Node.js", "D3.js"],
      imageSrc: "/images/exemplo-projeto.webp",
      projectType: "web"
    },
    {
      title: "Projeto Beta",
      description: "Landing page para um novo aplicativo de produtividade.",
      tags: ["Figma", "Webflow", "GSAP"],
      imageSrc: "/images/exemplo-projeto.webp",
      projectType: "lp"
    },
    {
      title: "Projeto Gamma",
      description: "Aplicativo móvel para gerenciamento de finanças pessoais.",
      tags: ["React Native", "Firebase"],
      imageSrc: "/images/exemplo-projeto.webp",
      projectType: "mobile"
    },
    {
      title: "Projeto Delta",
      description: "Sistema de gestão de conteúdo (CMS) customizável.",
      tags: ["Vue", "Express", "MongoDB"],
      imageSrc: "/images/exemplo-projeto.webp",
      projectType: "mobile"
    },
    {
      title: "Projeto Epsilon",
      description: "Plataforma SaaS para automação de marketing digital.",
      tags: ["Next.js", "Vercel", "Stripe"],
      imageSrc: "/images/exemplo-projeto.webp",
      projectType: "web"
    },
    {
      title: "Projeto Zeta",
      description: "API robusta para um aplicativo de rede social.",
      tags: ["Angular", "NestJS", "GraphQL"],
      imageSrc: "/images/exemplo-projeto.webp",
      projectType: "web"
    },
  ];

    const [filter, setFilter] = useState("todos");
const [filteredProjects, setFilteredProjects] = useState(projects);
const [animating, setAnimating] = useState<"idle" | "out" | "in">("idle");

function HandleClick(type: string) {
  if (type === filter) return; // evita animação desnecessária

  setAnimating("out");

  setTimeout(() => {
    const newList =
      type === "todos"
        ? projects
        : projects.filter((p) => p.projectType === type);

    setFilteredProjects(newList);
    setFilter(type);
    setAnimating("in");

    setTimeout(() => {
      setAnimating("idle");
    }, 300);
  }, 300); 
}

  return (
    <PageContainer>
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <main className="flex flex-col gap-8 py-10">
                <div className="flex flex-wrap justify-between gap-4 p-4 items-center">
                  <div className="flex flex-col gap-3">
                    <p className="text-white dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Meus Projetos</p>
                    <p className="text-gray-500 dark:text-[#92a0c9] text-base font-normal leading-normal">Uma seleção dos meus melhores trabalhos em desenvolvimento web e design.</p>
                  </div>
                </div>
  
                <div className="flex gap-3 p-3 flex-wrap pr-4">

                  {/* TODOS */}
                  <button
                    onClick={() => HandleClick("todos")}
                    className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-colors
      ${filter === "todos"
                        ? "bg-blue-900 text-white"
                        : "bg-gray-200 dark:bg-[#232c48] text-black dark:text-white hover:bg-gray-300 dark:hover:bg-[#343f60]"
                      }`}
                  >
                    Todos
                  </button>

                  {/* WEB */}
                  <button
                    onClick={() => HandleClick("web")}
                    className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-colors
      ${filter === "web"
                        ? "bg-blue-900 text-white"
                        : "bg-gray-200 dark:bg-[#232c48] text-black dark:text-white hover:bg-gray-300 dark:hover:bg-[#343f60]"
                      }`}
                  >
                    Web Apps
                  </button>

                  {/* LANDING PAGES */}
                  <button
                    onClick={() => HandleClick("lp")}
                    className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-colors
      ${filter === "lp"
                        ? "bg-blue-900 text-white"
                        : "bg-gray-200 dark:bg-[#232c48] text-black dark:text-white hover:bg-gray-300 dark:hover:bg-[#343f60]"
                      }`}
                  >
                    Landing Pages
                  </button>

                  {/* MOBILE */}
                  <button
                    onClick={() => HandleClick("mobile")}
                    className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-colors
      ${filter === "mobile"
                        ? "bg-blue-900 text-white"
                        : "bg-gray-200 dark:bg-[#232c48] text-black dark:text-white hover:bg-gray-300 dark:hover:bg-[#343f60]"
                      }`}
                  >
                    Mobile
                  </button>

                </div>

                <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 p-4">
  {filteredProjects.map((project) => (
    <CardProject
      key={project.title}
      title={project.title}
      description={project.description}
      tags={project.tags}
      imageSrc={project.imageSrc}
      projectType={project.projectType}
      className={
        animating === "out"
          ? "flip-out"
          : animating === "in"
          ? "flip-in"
          : ""
      }
    />
  ))}
</div>



              </main>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
