import PageContainer from "../components/PageContainer";
import UserPhoto from "../assets/imgs/profile-default.webp"

export default function About() {
  return (
    <PageContainer>
      <main className="flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* <!-- Profile Header --> */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            {/* <!-- Left Column: Image and Social Links --> */}
            <div className="flex w-full flex-col items-center gap-6 lg:w-1/3 lg:sticky lg:top-12">
              <div className="relative">
                <img className="rounded-full" src={UserPhoto} alt="Foto de perfil de usuário" width={200} />
                <div className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 border-2 border-background-light dark:border-background-dark">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a className="text-text-light-secondary dark:text-text-dark-secondary hover:text-primary dark:hover:text-primary transition-colors" href="#">
                  <svg aria-hidden="true" className="h-6 w-6" fill="currentColor"><path clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12.014c0 4.43 2.864 8.18 6.838 9.503.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.704-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .267.18.577.688.48C19.136 20.19 22 16.44 22 12.014 22 6.477 17.523 2 12 2z" fill-rule="evenodd"></path></svg>
                </a>
                <a className="text-text-light-secondary dark:text-text-dark-secondary hover:text-primary dark:hover:text-primary transition-colors" href="#">
                  <svg aria-hidden="true" className="h-6 w-6" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path></svg>
                </a>
              </div>
            </div>
            {/* <!-- Right Column: Text Content --> */}
            <div className="flex w-full flex-col gap-8 lg:w-2/3">
              {/* <!-- Profile Header Component Modified --> */}
              <div>
                <h2 className="text-text-light-primary dark:text-text-dark-primary text-3xl font-bold leading-tight tracking-tight">Sobre Mim</h2>
                <div className="mt-4 flex flex-col gap-4">
                  <div className="flex flex-col justify-center">
                    <p className="text-text-light-primary dark:text-text-dark-primary text-xl font-bold leading-tight">Olá, sou o Lucas da Silva Oliveira</p>
                    <p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-normal leading-relaxed mt-2">
                      Um desenvolvedor apaixonado por criar soluções tecnológicas inovadoras e eficientes. Com experiência em desenvolvimento full-stack, meu foco é construir produtos que não apenas funcionam bem, mas também proporcionam uma experiência de usuário excepcional. Adoro resolver problemas complexos e transformar ideias em realidade digital.
                    </p>
                  </div>
                  <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-800 dark:bg-card-dark text-text-light-primary dark:text-text-dark-primary text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:text-black hover:bg-gray-200 dark:hover:bg-gray-700/50 flex-1 sm:flex-auto">
                      <span className="truncate">Baixar meu CV</span>
                    </button>
                    <a target="_blank" href="https://wa.me/21988781916" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-blue-900 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-opacity hover:opacity-90 flex-1 sm:flex-auto">
                      <span className="truncate">Entre em Contato</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Skills Section --> */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-text-light-primary dark:text-text-dark-primary text-xl font-bold leading-tight tracking-tight">Hard Skills</h3>
                  <div className="flex gap-2 p-3 flex-wrap -ml-3">
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-blue-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">C#</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-blue-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">.NET</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-blue-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">ASP.NET/ASP.NET Core</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-blue-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">POO</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-blue-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Entity Framework</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-blue-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Identity Framework</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-blue-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">APIs REST</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-blue-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Node.js</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-green-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">JavaScript</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-green-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">React</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-green-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Angular</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-green-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Bootstrap</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-green-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Tailwind</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-red-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">SQL</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-red-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">SQL Server</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-red-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">MySQL</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-red-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Oracle</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-red-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">MongoDB</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-red-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Modelagem de Dados</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-indigo-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">DDD</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-indigo-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">MVC</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-indigo-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Microsserviços</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-indigo-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Mensageria (RabbitMQ)</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-indigo-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">SOLID</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-indigo-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Testes Unitários (xUnit)</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-indigo-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Clean Code</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-indigo-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Design Patterns</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-yellow-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Git/GitHub</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-yellow-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Metodologias Ágeis</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-yellow-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">AWS</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-yellow-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Azure Boards</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-yellow-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Postman</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-text-light-primary dark:text-text-dark-primary text-sm leading-tight tracking-tight">Legenda</h3>
                    <div className="flex gap-2 p-3 flex-wrap -ml-3 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-blue-900"></span>
                        <p>Backend (.NET)</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-green-900"></span>
                        <p>Frontend</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-red-900"></span>
                        <p>Banco de Dados</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-indigo-900"></span>
                        <p>Arquitetura & Testes</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-yellow-900"></span>
                        <p>Ferramentas & Processos</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-text-light-primary dark:text-text-dark-primary text-xl font-bold leading-tight tracking-tight">Soft Skills</h3>
                  <div className="flex gap-2 p-3 flex-wrap -ml-3">
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-blue-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Lógica de Programação</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-blue-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Resolução de Problemas</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-blue-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Trabalho em Equipe</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-blue-900 dark:bg-card-dark px-3">
                      <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal">Orgazniação e Comprimento dos Prazos</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Experience Timeline --> */}
              <div>
                <h3 className="text-text-light-primary dark:text-text-dark-primary text-xl font-bold leading-tight tracking-tight mb-6">Experiência</h3>
                <div className="relative flex flex-col gap-8 border-l-2 border-gray-200 dark:border-gray-700 pl-6">
                  <div className="absolute -left-[6px] -top-[10px] h-3 w-3 rounded-full bg-blue-600"></div>
                  {/* <!-- Timeline Item 1 --> */}
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-text-light-secondary dark:text-text-dark-secondary">2023 - Atualmente</p>
                    <h4 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary mt-1">Desenvolvedoro Full-Stack</h4>
                    <p className="text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary">Morning Star Consulting LTDA</p>
                    <p className="text-text-light-secondary dark:text-text-dark-secondary text-base leading-relaxed mt-2">
                      Responsável pelo desenvolvimento e manutenção de funcionalidades na Intranet da empresa,
                      utilizando C# com arquitetura MVC. Atuação em projeto desktop desenvolvido em Windows Forms,
                      aplicando boas práticas de Clean Code e POO. Colaboração em projeto mobile com Angular + Ionic,
                      conectando o front-end com back-end em PHP.
                    </p>
                  </div>
                  <div className="absolute -left-[6px] top-[calc(55%-10px)] h-3 w-3 rounded-full bg-blue-600"></div>
                  {/* <!-- Timeline Item 2 --> */}
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-text-light-secondary dark:text-text-dark-secondary">2022 - Atualmente</p>
                    <h4 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary mt-1">Freelancer - Projetos Pessoais</h4>
                    <p className="text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary">Criação de Landing Pages e Páginas Pessoais</p>
                    <p className="text-text-light-secondary dark:text-text-dark-secondary text-base leading-relaxed mt-2">
                      Desenvolvimento de Landing Pages para clientes com telas responsivas e interativas, principal tecnologia utilizada: JavaScript.
                      Desenvolvimento de projetos pessoais, clones de sites e portfólios para fins de demonstração e captação de clientes,
                      principais tecnologias utilizadas: C#, .NET, JavaScript.
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-text-light-primary dark:text-text-dark-primary text-xl font-bold leading-tight tracking-tight mb-6">Formação</h3>
                  <div className="relative flex flex-col border-l-2 border-gray-200 dark:border-gray-700 pl-6">
                    <div className="absolute -left-[6px] -top-[10px] h-3 w-3 rounded-full bg-blue-600"></div>
                    <p className="text-sm font-semibold text-text-light-secondary dark:text-text-dark-secondary">2023 - 2025</p>
                    <h4 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary mt-1">Análise e Desenvolvimento de Sistemas - Estácio</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageContainer >

  );
}
