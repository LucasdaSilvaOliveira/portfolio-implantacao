import PageContainer from "../components/PageContainer";
import CardProject from "../components/Card/CardProject";
import { useState, useEffect } from "react";
import axios from "axios";
import imgLoading from '/images/loading-spinner.webp';

interface IProject {
  id: number,
  titulo: string,
  descricao: string,
  imageSrc: string,
  tipoProjeto: string,
  tag1: string,
  tag2: string,
  tag3: string,
}


export default function Projects() {

  var [projects, setProjects] = useState([] as IProject[]);

  useEffect(() => {
    axios.get('https://localhost:7264/api/Projetos')
      .then(function (response) {
        let projectsData = response.data;
        setProjects(projectsData);
        setFilteredProjects(projectsData);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setLoading(false);
      });
  }, []);

  const [loading, setLoading] = useState(true);
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
          : projects.filter((p) => p.tipoProjeto === type);

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

                  {/* DESKTOP */}
                  <button
                    onClick={() => HandleClick("desktop")}
                    className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-colors
      ${filter === "desktop"
                        ? "bg-blue-900 text-white"
                        : "bg-gray-200 dark:bg-[#232c48] text-black dark:text-white hover:bg-gray-300 dark:hover:bg-[#343f60]"
                      }`}
                  >
                    Desktop
                  </button>
                </div>

                <div>
                  {loading ? (
                    // SPINNER ENQUANTO CARREGA
                    <div className="flex justify-center items-center p-10">
                      <img
                        src={imgLoading}
                        alt="Carregando"
                        className="spinner-animation w-20 h-20"
                      />
                    </div>
                  ) : (
                    // CONTEÚDO QUE APARECE QUANDO OS DADOS CHEGAM
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 p-4">
                      {filteredProjects.map((project) => (
                        <CardProject
                          key={project.id}
                          title={project.titulo}
                          description={project.descricao}
                          tags={[project.tag1, project.tag2, project.tag3]}
                          imageSrc={project.imageSrc}
                          projectType={project.tipoProjeto}
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
                  )}
                </div>

              </main>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
