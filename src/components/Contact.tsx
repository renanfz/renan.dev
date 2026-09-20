import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'
import { SectionLabel } from './SectionLabel'

function ContactLink({
     href,
     icon,
     label,
     detail,
}: {
     href: string
     icon: React.ReactNode
     label: string
     detail: string
}) {
     return (
          <a
               href={href}
               target={href.startsWith('mailto') ? undefined : '_blank'}
               rel="noopener noreferrer"
               style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '14px 18px',
                    border: '1px solid #1a1a22',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.15s',
                    backgroundColor: 'transparent',
               }}
               onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = '#2e2e40'
                    el.style.backgroundColor = '#0f0f15'
               }}
               onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = '#1a1a22'
                    el.style.backgroundColor = 'transparent'
               }}
          >
               <span style={{ color: '#04D4E6', display: 'flex' }}>{icon}</span>
               <div>
                    <p style={{ fontSize: '13px', fontWeight: 500, color: '#d0d0e0', marginBottom: '2px' }}>
                         {label}
                    </p>
                    <p
                         style={{
                              fontSize: '11px',
                              color: '#5a5a70',
                              fontFamily: "'JetBrains Mono', monospace",
                         }}
                    >
                         {detail}
                    </p>
               </div>
          </a>
     )
}

export function Contact() {
     return (
          <section
               id="contato"
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
                    <SectionLabel>Contato</SectionLabel>

                    <h2
                         style={{
                              fontSize: 'clamp(28px, 4vw, 52px)',
                              fontWeight: 600,
                              letterSpacing: '-0.025em',
                              color: '#f0f0f0',
                              marginBottom: '16px',
                         }}
                    >
                         Vamos conversar?
                    </h2>
                    <p
                         style={{
                              fontSize: '15px',
                              color: '#6b6b7a',
                              marginBottom: '48px',
                              maxWidth: '440px',
                         }}
                    >
                         Estou buscando minha primeira oportunidade de estágio em desenvolvimento.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '320px' }}>
                         <ContactLink
                              href="https://github.com/renanfz"
                              icon={<GithubIcon size={15} />}
                              label="GitHub"
                              detail="github.com/renanfz"
                         />
                         <ContactLink
                              href="https://linkedin.com/in/renanfz"
                              icon={<LinkedinIcon size={15} />}
                              label="LinkedIn"
                              detail="linkedin.com/in/renanfz"
                         />
                         <ContactLink
                              href="mailto:renanfsouza135@gmail.com"
                              icon={<MailIcon size={15} />}
                              label="E-mail"
                              detail="renanfsouza135@gmail.com"
                         />
                    </div>
               </div>
          </section>
     )
}
export function Training() {
     return (
          <section
               id="formacao"
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
                    <SectionLabel>Formação</SectionLabel>

                    <h2
                         style={{
                              fontSize: 'clamp(28px, 4vw, 52px)',
                              fontWeight: 600,
                              letterSpacing: '-0.025em',
                              color: '#f0f0f0',
                              marginBottom: '16px',
                         }}
                    >
                         Vamos conversar?
                    </h2>
                    <p
                         style={{
                              fontSize: '15px',
                              color: '#6b6b7a',
                              marginBottom: '48px',
                              maxWidth: '440px',
                         }}
                    >
                         Estou buscando minha primeira oportunidade de estágio em desenvolvimento.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '320px' }}>
                         <ContactLink
                              href="https://github.com/renanfz"
                              icon={<GithubIcon size={15} />}
                              label="GitHub"
                              detail="github.com/renanfz"
                         />
                         <ContactLink
                              href="https://linkedin.com/in/renanfz"
                              icon={<LinkedinIcon size={15} />}
                              label="LinkedIn"
                              detail="linkedin.com/in/renanfz"
                         />
                         <ContactLink
                              href="mailto:renanfsouza135@gmail.com"
                              icon={<MailIcon size={15} />}
                              label="E-mail"
                              detail="renanfsouza135@gmail.com"
                         />
                    </div>
               </div>
          </section>
     )
}

