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
                    maxWidth: '400px',

               }}
          >
               <div
                    style={{
                         height: '240px',
                         backgroundColor: 'white',
                         borderBottom: '1px solid #1a1a22',
                         position: 'relative',
                         overflow: 'hidden'
                    }}
               >
                    <img
                         src="src/assets/img-rotab-deliverys/card-rotab2.png"
                         alt="Preview do projeto Rotab Deliverys"
                         style={{
                              display: 'block',
                              width: '100%',
                              height: 'auto', // Permite que a altura mude proporcionalmente
                              maxWidth: '400px', // Substitua pelo tamanho real da imagem em pixels
                              objectFit: 'cover',
                              objectPosition: 'center top',
                         }}

                    />
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
