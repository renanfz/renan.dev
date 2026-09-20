import { ArrowRight, GithubIcon } from './Icons'

export function Hero() {
     return (
          <section
               id="inicio"
               style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    paddingTop: '80px',
               }}
          >
               <div
                    style={{
                         maxWidth: '1080px',
                         margin: '0 auto',
                         padding: '0 24px',
                         width: '100%',
                    }}
               >
                    <div
                         style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '8px',
                              marginBottom: '40px',
                         }}
                    >
                         <span
                              style={{
                                   width: '6px',
                                   height: '6px',
                                   borderRadius: '50%',
                                   backgroundColor: '#04D4E6',
                                   display: 'inline-block',
                              }}
                         />
                         <span
                              style={{
                                   fontFamily: "'JetBrains Mono', monospace",
                                   fontSize: '11px',
                                   color: '#6b6b7a',
                                   letterSpacing: '0.08em',
                                   textTransform: 'uppercase',
                              }}
                         >
                              Portfólio · 2026
                         </span>
                    </div>

                    <h1
                         style={{
                              fontSize: 'clamp(42px, 7vw, 80px)',
                              fontWeight: 600,
                              lineHeight: 1.05,
                              letterSpacing: '-0.03em',
                              color: '#f0f0f0',
                              marginBottom: '16px',
                         }}
                    >
                         Renan Freitas
                    </h1>

                    <p
                         style={{
                              fontSize: 'clamp(18px, 2.5vw, 24px)',
                              fontWeight: 300,
                              color: '#9090a8',
                              letterSpacing: '-0.01em',
                              marginBottom: '28px',
                         }}
                    >
                         Desenvolvedor Web em formação
                    </p>

                    <p
                         style={{
                              fontSize: '15px',
                              lineHeight: 1.7,
                              color: '#6b6b7a',
                              maxWidth: '520px',
                              marginBottom: '48px',
                         }}
                    >
                         Estudante de Análise e Desenvolvimento de Sistemas, aprofundando meus
                         conhecimentos em React, TypeScript, Node.js e desenvolvimento de APIs.
                    </p>

                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                         <a
                              href="#projetos"
                              style={{
                                   display: 'inline-flex',
                                   alignItems: 'center',
                                   gap: '8px',
                                   padding: '10px 20px',
                                   backgroundColor: '#f0f0f0',
                                   color: '#0c0c0e',
                                   fontSize: '14px',
                                   fontWeight: 500,
                                   borderRadius: '6px',
                                   textDecoration: 'none',
                                   transition: 'background-color 0.15s',
                              }}
                              onMouseEnter={(e) => {
                                   ; (e.currentTarget as HTMLElement).style.backgroundColor = '#d8d8e0'
                              }}
                              onMouseLeave={(e) => {
                                   ; (e.currentTarget as HTMLElement).style.backgroundColor = '#f0f0f0'
                              }}
                         >
                              Ver projetos
                              <ArrowRight size={14} />
                         </a>
                         <a
                              href="https://github.com/renanfz"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                   display: 'inline-flex',
                                   alignItems: 'center',
                                   gap: '8px',
                                   padding: '10px 20px',
                                   backgroundColor: 'transparent',
                                   color: '#9090a8',
                                   fontSize: '14px',
                                   fontWeight: 400,
                                   borderRadius: '6px',
                                   border: '1px solid #1e1e28',
                                   textDecoration: 'none',
                                   transition: 'all 0.15s',
                              }}
                              onMouseEnter={(e) => {
                                   const el = e.currentTarget as HTMLElement
                                   el.style.borderColor = '#3a3a50'
                                   el.style.color = '#f0f0f0'
                              }}
                              onMouseLeave={(e) => {
                                   const el = e.currentTarget as HTMLElement
                                   el.style.borderColor = '#1e1e28'
                                   el.style.color = '#9090a8'
                              }}
                         >
                              <GithubIcon size={14} />
                              GitHub
                         </a>
                    </div>
               </div>
          </section>
     )
}
