import PageContainer from "../components/PageContainer";
import PhotoUser from "../assets/imgs/profile-default.webp";
import { Link } from "react-router-dom";
import CardHome from "../components/Card/CardHome";
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

export default function Home() {

  const [loading, setLoading] = useState(true);
  var [projects, setProjects] = useState([] as IProject[]);

  useEffect(() => {
    axios.get('https://localhost:7264/api/Projetos')
      .then(function (response) {

        let projectsData = response.data.slice(0, 3);
        setProjects(projectsData);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setLoading(false);
      });
  }, []);

  return (
    <PageContainer>
      <div className="flex justify-center items-center gap-20 mb-40">
        <div className="w-2/5">
          <h1 className="text-4xl font-bold mb-10">Olá, sou Lucas da Silva Oliveira</h1>
          <p className="text-lg mb-10">Desenvolvedor Full Stack. Desenvolvimento de Aplicações Web, Landing Pages e Sistemas Interativos.</p>
          <Link className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded w-auto" to={'/projects'}>Conheça meus trabalhos</Link>
        </div>
        <div>
          <img className="rounded" src={PhotoUser} alt="My Profile" width="400" />
        </div>
      </div>

      <div>
        <h1 className="font-bold text-xl">Projetos em Destaque</h1>

        <div>
          {loading ? (
            // *** SPINNER ENQUANTO CARREGA ***
            <div className="flex justify-center items-center py-32">
              <img
                src={imgLoading}
                alt="Carregando"
                className="spinner-animation w-20 h-20"
              />
            </div>
          ) : (
            // *** CONTEÚDO QUANDO OS DADOS CARREGAM ***
            <div className="flex justify-center gap-20 mt-32 pb-32">
              {projects.map((project) => (
                <CardHome
                  key={project.id}
                  title={project.titulo}
                  description={project.descricao}
                  imageSrc={project.imageSrc}
                  tags={[project.tag1, project.tag2, project.tag3]}
                />
              ))}
            </div>
          )}
        </div>


      </div>
    </PageContainer>
  );
}
