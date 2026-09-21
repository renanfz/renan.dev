import { GithubIcon, LinkedinIcon } from './Icons'

export function Footer() {
     return (
          <footer
               style={{
                    borderTop: '1px solid #1a1a22',
                    padding: '32px 0',
               }}
          >
               <div
                    style={{
                         maxWidth: '1080px',
                         margin: '0 auto',
                         padding: '0 24px',
                         display: 'flex',
                         justifyContent: 'space-between',
                         alignItems: 'center',
                         flexWrap: 'wrap',
                         gap: '16px',
                    }}
               >
                    <div>
                         <p style={{ fontSize: '13px', color: '#9090a8', fontWeight: 400 }}>Renan Freitas</p>
                         <p
                              style={{
                                   fontSize: '13px',
                                   color: '#4a4a5a',
                                   fontFamily: "'JetBrains Mono', monospace",
                                   marginTop: '2px',
                              }}
                         >
                              © 2026
                         </p>
                    </div>
                    <div style={{ display: 'flex', gap: '20px' }}>
                         <a
                              href="https://github.com/renanfz"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: '#4a4a5a', textDecoration: 'none', transition: 'color 0.15s' }}
                              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#9090a8')}
                              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#4a4a5a')}
                         >
                              <GithubIcon size={16} />
                         </a>
                         <a
                              href="https://linkedin.com/in/renanfz"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: '#4a4a5a', textDecoration: 'none', transition: 'color 0.15s' }}
                              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#9090a8')}
                              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#4a4a5a')}
                         >
                              <LinkedinIcon size={16} />
                         </a>
                    </div>
               </div>
          </footer>
     )
}
