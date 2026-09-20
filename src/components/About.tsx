import { SectionLabel } from './SectionLabel'

export function About() {
     return (
          <section
               id="sobre"
               style={{
                    padding: '120px 0',
                    borderTop: '1px solid #1a1a22',
               }}
          >
               <div
                    style={{
                         maxWidth: '1080px',
                         margin: '0 auto',
                         padding: '0 24px',
                    }}
               >
                    <SectionLabel>Sobre</SectionLabel>

                    <div
                         style={{
                              display: 'grid',
                              gridTemplateColumns: '1fr 1fr',
                              gap: '80px',
                              alignItems: 'start',
                         }}
                         className="about-grid"
                    >
                         <h2
                              style={{
                                   fontSize: 'clamp(28px, 4vw, 44px)',
                                   fontWeight: 600,
                                   letterSpacing: '-0.02em',
                                   color: '#f0f0f0',
                                   lineHeight: 1.1,
                              }}
                         >
                              Quem sou
                         </h2>

                         <div>
                              <p
                                   style={{
                                        fontSize: '15px',
                                        lineHeight: 1.75,
                                        color: '#8888a0',
                                        marginBottom: '20px',
                                   }}
                              >
                                   Sou estudante de Análise e Desenvolvimento de Sistemas e estou construindo minha
                                   experiência em desenvolvimento web.
                              </p>
                              <p
                                   style={{
                                        fontSize: '15px',
                                        lineHeight: 1.75,
                                        color: '#8888a0',
                                        marginBottom: '20px',
                                   }}
                              >
                                   Atualmente estou aprofundando meus conhecimentos em React, TypeScript, Node.js e
                                   APIs, buscando transformar o que estudo em projetos práticos.
                              </p>
                              <p
                                   style={{
                                        fontSize: '15px',
                                        lineHeight: 1.75,
                                        color: '#8888a0',
                                   }}
                              >
                                   Meu objetivo é conquistar minha primeira oportunidade de estágio na área de
                                   desenvolvimento.
                              </p>
                         </div>
                    </div>
               </div>
          </section>
     )
}
