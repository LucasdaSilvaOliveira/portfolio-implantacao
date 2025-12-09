import PageContainer from "../components/PageContainer";

export default function Contact() {
  return (
    <PageContainer>
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-dark dark group/design-root">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 py-10 sm:px-6 md:px-8 lg:px-20 xl:px-40 flex flex-1 justify-center items-center">
            <div className="layout-content-container flex flex-col max-w-6xl w-full flex-1">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-7 flex flex-col">
                  <div className="flex flex-col gap-3 mb-8">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Entre em Contato</h1>
                    <p className="text-[#92a0c9] text-base font-normal leading-normal">Disponível para novos projetos e colaborações. Vamos conversar!</p>


                  </div>
                </div>
                <div className="md:col-span-5 flex flex-col pt-4">
                  <div className="bg-[#192033] border border-[#323f67] rounded-xl p-8">
                    <h2 className="text-white text-xl font-bold mb-6">Contatos</h2>
                    <div className="flex flex-col gap-6">
                      <a className="flex items-center gap-4 group" href="mailto:lucasdasilvaoliveira.dev@gmail.com">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          <span className="material-symbols-outlined">Email</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[#92a0c9] text-sm">Email</span>
                          <span className="text-white text-base font-medium group-hover:text-primary transition-colors">lucasdasilvaoliveira.dev@gmail.com</span>
                        </div>
                      </a>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg text-primary">
                          <span className="material-symbols-outlined">Call</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[#92a0c9] text-sm">Telefone</span>
                          <span className="text-white text-base font-medium">+55 (21) 98878-1916</span>
                        </div>
                      </div>
                      <div className="pt-4 mt-2 border-t border-[#323f67]">
                        <h3 className="text-white text-lg font-bold mb-4">Redes Sociais</h3>
                        <div className="flex items-center gap-4">
                          <a className="flex items-center justify-center w-10 h-10 bg-[#323f67] rounded-full text-[#92a0c9] hover:bg-primary hover:text-white transition-colors" data-alt="LinkedIn logo" target="_blank" href="https://www.linkedin.com/in/lucas-da-silva-oliveira-12154a240/">
                            <svg fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                          </a>
                          <a className="flex items-center justify-center w-10 h-10 bg-[#323f67] rounded-full text-[#92a0c9] hover:bg-primary hover:text-white transition-colors" data-alt="GitHub logo" target="_blank" href="https://github.com/LucasdaSilvaOliveira">
                            <svg fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
