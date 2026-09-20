import { ExternalLink, GithubIcon } from './Icons'
import { SectionLabel } from './SectionLabel'

export type Project = {
     name: string
     subtitle: string
     description: string
     tech: string[]
     liveUrl: string
     githubUrl: string
     featured: boolean
}

function Tag({ label }: { label: string }) {
     return (
          <span
               className="mono inline-block text-xs px-2.5 py-1 rounded border"
               style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    color: '#9090a8',
                    borderColor: '#1e1e28',
                    backgroundColor: '#111116',
                    letterSpacing: '0.02em',
               }}
          >
               {label}
          </span>
     )
}

function ProjectCard({ project }: { project: Project }) {
     return (
          <div
               style={{
                    border: '1px solid #1a1a22',
                    borderRadius: '10px',
                    backgroundColor: '#0f0f13',
                    overflow: 'hidden',
               }}
          >
               <div
                    style={{
                         height: '240px',
                         backgroundColor: '#111116',
                         borderBottom: '1px solid #1a1a22',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         position: 'relative',
                         overflow: 'hidden',
                    }}
               >
                    <div
                         style={{
                              width: '80%',
                              maxWidth: '480px',
                              backgroundColor: '#16161e',
                              borderRadius: '8px',
                              border: '1px solid #22222e',
                              padding: '16px',
                              fontFamily: "'JetBrains Mono', monospace",
                         }}
                    >
                         <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
                              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2a2a38' }} />
                              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2a2a38' }} />
                              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2a2a38' }} />
                         </div>
                         {[
                              { label: 'Entrega #001', status: 'Em rota', color: '#04D4E6' },
                              { label: 'Entrega #002', status: 'Concluída', color: '#4a9e6a' },
                              { label: 'Entrega #003', status: 'Pendente', color: '#7a7a90' },
                         ].map((row) => (
                              <div
                                   key={row.label}
                                   style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '8px 0',
                                        borderBottom: '1px solid #1e1e28',
                                   }}
                              >
                                   <span style={{ fontSize: '11px', color: '#9090a8' }}>{row.label}</span>
                                   <span
                                        style={{
                                             fontSize: '10px',
                                             color: row.color,
                                             fontFamily: "'JetBrains Mono', monospace",
                                             letterSpacing: '0.04em',
                                        }}
                                   >
                                        {row.status}
                                   </span>
                              </div>
                         ))}
                    </div>
               </div>

               <div style={{ padding: '28px 32px' }}>
                    <div style={{ marginBottom: '16px' }}>
                         <h3
                              style={{
                                   fontSize: '20px',
                                   fontWeight: 600,
                                   color: '#f0f0f0',
                                   letterSpacing: '-0.01em',
                                   marginBottom: '4px',
                              }}
                         >
                              {project.name}
                         </h3>
                         <p
                              style={{
                                   fontSize: '13px',
                                   color: '#04D4E6',
                                   fontFamily: "'JetBrains Mono', monospace",
                                   letterSpacing: '0.04em',
                              }}
                         >
                              {project.subtitle}
                         </p>
                    </div>

                    <p
                         style={{
                              fontSize: '14px',
                              lineHeight: 1.65,
                              color: '#6b6b7a',
                              marginBottom: '20px',
                              maxWidth: '480px',
                         }}
                    >
                         {project.description}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                         {project.tech.map((t) => (
                              <Tag key={t} label={t} />
                         ))}
                    </div>

                    <div style={{ display: 'flex', gap: '10px' }}>
                         <a
                              href={project.liveUrl}
                              style={{
                                   display: 'inline-flex',
                                   alignItems: 'center',
                                   gap: '6px',
                                   padding: '8px 16px',
                                   backgroundColor: '#f0f0f0',
                                   color: '#0c0c0e',
                                   fontSize: '13px',
                                   fontWeight: 500,
                                   borderRadius: '5px',
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
                              Ver projeto
                              <ExternalLink size={12} />
                         </a>
                         <a
                              href={'https://github.com/renanfz/deliverys.git'}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                   display: 'inline-flex',
                                   alignItems: 'center',
                                   gap: '6px',
                                   padding: '8px 16px',
                                   backgroundColor: 'transparent',
                                   color: '#9090a8',
                                   fontSize: '13px',
                                   fontWeight: 400,
                                   borderRadius: '5px',
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
                              <GithubIcon size={13} />
                              GitHub
                         </a>
                    </div>
               </div>
          </div>
     )
}

export function Projects({ projects }: { projects: Project[] }) {
     return (
          <section
               id="projetos"
               style={{
                    padding: '120px 0',
                    maxWidth: '1080px',
                    margin: '0 auto',
                    paddingLeft: '24px',
                    paddingRight: '24px',
               }}
          >
               <SectionLabel>Projetos</SectionLabel>
               <h2
                    style={{
                         fontSize: 'clamp(28px, 4vw, 44px)',
                         fontWeight: 600,
                         letterSpacing: '-0.02em',
                         color: '#f0f0f0',
                         marginBottom: '12px',
                    }}
               >
                    O que tenho construído
               </h2>
               <p
                    style={{
                         fontSize: '15px',
                         color: '#6b6b7a',
                         marginBottom: '56px',
                         maxWidth: '480px',
                    }}
               >
                    Projetos desenvolvidos durante minha trajetória de aprendizado.
               </p>

               <div style={{ display: 'grid', gap: '24px' }}>
                    {projects.map((project) => (
                         <ProjectCard key={project.name} project={project} />
                    ))}
               </div>
          </section>
     )
}
