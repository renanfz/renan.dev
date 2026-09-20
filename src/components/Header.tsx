import { CloseIcon, GithubIcon, HamburgerIcon } from './Icons'

export type HeaderLink = {
     label: string
     href: string
}

export function Header({
     menuOpen,
     setMenuOpen,
     links,
}: {
     menuOpen: boolean
     setMenuOpen: (v: boolean) => void
     links: HeaderLink[]
}) {
     return (
          <header
               style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    paddingTop: '16px',
                    pointerEvents: 'none',
               }}
          >
               <nav
                    className="hidden-mobile"
                    style={{
                         pointerEvents: 'auto',
                         display: 'flex',
                         alignItems: 'center',
                         gap: '4px',
                         padding: '6px 8px',
                         backgroundColor: 'rgba(14,14,18,0.88)',
                         backdropFilter: 'blur(16px)',
                         WebkitBackdropFilter: 'blur(16px)',
                         border: '1px solid #1e1e2a',
                         borderRadius: '12px',
                    }}
               >
                    <a
                         href="#inicio"
                         style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: '12px',
                              fontWeight: 500,
                              color: '#f0f0f0',
                              textDecoration: 'none',
                              letterSpacing: '0.04em',
                              padding: '5px 12px',
                              borderRadius: '7px',
                              marginRight: '4px',
                         }}
                    >
                         renan.dev
                    </a>

                    <div style={{ width: '1px', height: '16px', backgroundColor: '#1e1e2a', margin: '0 4px' }} />

                    {links.map((link) => (
                         <a
                              key={link.href}
                              href={link.href}
                              style={{
                                   fontSize: '12.5px',
                                   color: '#80808c',
                                   textDecoration: 'none',
                                   fontWeight: 400,
                                   padding: '5px 11px',
                                   borderRadius: '7px',
                                   transition: 'color 0.15s, background-color 0.15s',
                              }}
                              onMouseEnter={(e) => {
                                   const el = e.currentTarget as HTMLElement
                                   el.style.color = '#f0f0f0'
                                   el.style.backgroundColor = '#ffffff0d'
                              }}
                              onMouseLeave={(e) => {
                                   const el = e.currentTarget as HTMLElement
                                   el.style.color = '#80808c'
                                   el.style.backgroundColor = 'transparent'
                              }}
                         >
                              {link.label}
                         </a>
                    ))}

                    <div style={{ width: '1px', height: '16px', backgroundColor: '#1e1e2a', margin: '0 4px' }} />

                    <a
                         href="https://github.com/renanfz"
                         target="_blank"
                         rel="noopener noreferrer"
                         style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '5px',
                              fontSize: '12.5px',
                              color: '#80808c',
                              textDecoration: 'none',
                              padding: '5px 11px',
                              borderRadius: '7px',
                              transition: 'color 0.15s, background-color 0.15s',
                         }}
                         onMouseEnter={(e) => {
                              const el = e.currentTarget as HTMLElement
                              el.style.color = '#f0f0f0'
                              el.style.backgroundColor = '#ffffff0d'
                         }}
                         onMouseLeave={(e) => {
                              const el = e.currentTarget as HTMLElement
                              el.style.color = '#80808c'
                              el.style.backgroundColor = 'transparent'
                         }}
                    >
                         <GithubIcon size={13} />
                         GitHub
                    </a>
               </nav>

               <div
                    className="show-mobile"
                    style={{
                         pointerEvents: 'auto',
                         width: '100%',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-between',
                         padding: '0 20px',
                         marginTop: '4px',
                    }}
               >
                    <div
                         style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0',
                              padding: '6px 10px',
                              backgroundColor: 'rgba(14,14,18,0.88)',
                              backdropFilter: 'blur(16px)',
                              border: '1px solid #1e1e2a',
                              borderRadius: '10px',
                         }}
                    >
                         <a
                              href="#inicio"
                              style={{
                                   fontFamily: "'JetBrains Mono', monospace",
                                   fontSize: '12px',
                                   fontWeight: 500,
                                   color: '#f0f0f0',
                                   textDecoration: 'none',
                              }}
                         >
                              renan.dev
                         </a>
                    </div>

                    <button
                         onClick={() => setMenuOpen(!menuOpen)}
                         aria-label="Menu"
                         style={{
                              background: 'rgba(14,14,18,0.88)',
                              border: '1px solid #1e1e2a',
                              backdropFilter: 'blur(16px)',
                              borderRadius: '10px',
                              cursor: 'pointer',
                              padding: '8px 10px',
                              color: '#f0f0f0',
                              display: 'flex',
                              alignItems: 'center',
                         }}
                    >
                         {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
                    </button>
               </div>

               {menuOpen && (
                    <div
                         style={{
                              position: 'absolute',
                              top: '64px',
                              left: '16px',
                              right: '16px',
                              pointerEvents: 'auto',
                              backgroundColor: 'rgba(14,14,20,0.96)',
                              backdropFilter: 'blur(20px)',
                              border: '1px solid #1e1e2a',
                              borderRadius: '12px',
                              padding: '8px',
                         }}
                    >
                         {[...links, { label: 'GitHub', href: 'https://github.com/renanfreitas' }].map((link, i, arr) => (
                              <a
                                   key={link.href}
                                   href={link.href}
                                   onClick={() => setMenuOpen(false)}
                                   style={{
                                        display: 'block',
                                        padding: '10px 14px',
                                        fontSize: '14px',
                                        color: '#c0c0d0',
                                        textDecoration: 'none',
                                        borderRadius: '8px',
                                        borderBottom: i < arr.length - 1 ? '1px solid #16161e' : 'none',
                                   }}
                              >
                                   {link.label}
                              </a>
                         ))}
                    </div>
               )}
          </header>
     )
}
