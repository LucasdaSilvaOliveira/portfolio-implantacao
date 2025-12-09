import PageContainer from "../components/PageContainer";
import PhotoUser from "../assets/imgs/profile-default.webp";
import { Link } from "react-router-dom";
import CardHome from "../components/Card/CardHome";

export default function Home() {
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

        <div className="flex justify-center items-center gap-20 mt-32 pb-32">
          <CardHome title="Marketplace de Produtos" description="Marketplace de cométicos voltado para o público feminino."></CardHome>
          <CardHome title="ERP Consultoria" description="Sistema de gestão de empresa que trabalha com consultoria."></CardHome>
          <CardHome title="Lading Page" description="Lading Page para divulgar o trabalho de uma dentista."></CardHome>
        </div>
      </div>
    </PageContainer>
  );
}
