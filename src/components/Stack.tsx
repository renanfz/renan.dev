import { GithubIcon, IconFastify, IconGit, IconJavaScript, IconNode, IconPostgres, IconPrisma, IconReact, IconSQLite, IconTailwind, IconTypeScript } from './Icons'
import { SectionLabel } from './SectionLabel'

const STACK: Record<string, { name: string; icon: React.ReactNode }[]> = {
     Frontend: [
          { name: 'React', icon: <IconReact /> },
          { name: 'TypeScript', icon: <IconTypeScript /> },
          { name: 'JavaScript', icon: <IconJavaScript /> },
          { name: 'Tailwind CSS', icon: <IconTailwind /> },
     ],
     Backend: [
          { name: 'Node.js', icon: <IconNode /> },
          { name: 'Fastify', icon: <IconFastify /> },
          { name: 'Prisma', icon: <IconPrisma /> },
     ],
     'Banco de dados': [
          { name: 'PostgreSQL', icon: <IconPostgres /> },
          { name: 'SQLite', icon: <IconSQLite /> },
     ],
     Ferramentas: [
          { name: 'Git', icon: <IconGit /> },
          { name: 'GitHub', icon: <GithubIcon size={14} /> },
     ],
}

export function Stack() {
     return (
          <section
               id="stack"
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
                    <SectionLabel>Stack</SectionLabel>
                    <h2
                         style={{
                              fontSize: 'clamp(28px, 4vw, 44px)',
                              fontWeight: 600,
                              letterSpacing: '-0.02em',
                              color: '#f0f0f0',
                              marginBottom: '56px',
                         }}
                    >
                         Tecnologias
                    </h2>

                    <div
                         style={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                              gap: '32px',
                         }}
                    >
                         {Object.entries(STACK).map(([category, techs]) => (
                              <div key={category}>
                                   <p
                                        style={{
                                             fontFamily: "'JetBrains Mono', monospace",
                                             fontSize: '11px',
                                             color: '#04D4E6',
                                             letterSpacing: '0.08em',
                                             textTransform: 'uppercase',
                                             marginBottom: '16px',
                                        }}
                                   >
                                        {category}
                                   </p>
                                   <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        {techs.map((tech) => (
                                             <div
                                                  key={tech.name}
                                                  style={{
                                                       display: 'flex',
                                                       alignItems: 'center',
                                                       gap: '10px',
                                                  }}
                                             >
                                                  <span
                                                       style={{
                                                            width: '18px',
                                                            height: '18px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            flexShrink: 0,
                                                            color: '#4a4a60',
                                                       }}
                                                  >
                                                       {tech.icon}
                                                  </span>
                                                  <span
                                                       style={{
                                                            fontSize: '14px',
                                                            color: '#c0c0d0',
                                                            fontWeight: 400,
                                                       }}
                                                  >
                                                       {tech.name}
                                                  </span>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     )
}
