import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contato', href: '#contato' },
]

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

const PROJECTS = [
  {
    name: 'Rota B',
    subtitle: 'Controle de Entregas',
    description:
      'Aplicação para acompanhamento de rotas e entregas, permitindo visualizar destinos e acompanhar o andamento das entregas.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'API'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
]

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

function Header({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
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
      {/* Floating pill — desktop */}
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
        {/* Logo */}
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

        {/* Divider */}
        <div style={{ width: '1px', height: '16px', backgroundColor: '#1e1e2a', margin: '0 4px' }} />

        {NAV_LINKS.map((link) => (
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

        {/* Divider */}
        <div style={{ width: '1px', height: '16px', backgroundColor: '#1e1e2a', margin: '0 4px' }} />

        <a
          href="https://github.com/renanfreitas"
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

      {/* Mobile top bar */}
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

      {/* Mobile dropdown */}
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
          {[...NAV_LINKS, { label: 'GitHub', href: 'https://github.com/renanfreitas' }].map((link, i, arr) => (
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

function Hero() {
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
        {/* Subtle badge */}
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

        {/* Name */}
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

        {/* Role */}
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

        {/* Description */}
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

        {/* CTAs */}
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
              ;(e.currentTarget as HTMLElement).style.backgroundColor = '#d8d8e0'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.backgroundColor = '#f0f0f0'
            }}
          >
            Ver projetos
            <ArrowRight size={14} />
          </a>
          <a
            href="https://github.com/renanfreitas"
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

function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  return (
    <div
      style={{
        border: '1px solid #1a1a22',
        borderRadius: '10px',
        backgroundColor: '#0f0f13',
        overflow: 'hidden',
      }}
    >
      {/* Mockup area */}
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
        {/* Fake app mockup */}
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
          {/* Fake top bar */}
          <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2a2a38' }} />
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2a2a38' }} />
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2a2a38' }} />
          </div>
          {/* Fake content rows */}
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

      {/* Content */}
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

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
          {project.tech.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>

        {/* Links */}
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
              ;(e.currentTarget as HTMLElement).style.backgroundColor = '#d8d8e0'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.backgroundColor = '#f0f0f0'
            }}
          >
            Ver projeto
            <ExternalLink size={12} />
          </a>
          <a
            href={project.githubUrl}
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

function SectionLabel({ children }: { children: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '48px',
      }}
    >
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px',
          color: '#04D4E6',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        {children}
      </span>
      <div style={{ flex: 1, height: '1px', backgroundColor: '#1a1a22' }} />
    </div>
  )
}

function Projects() {
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
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}

function About() {
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

function Stack() {
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

function Contact() {
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
            href="https://github.com/renanfreitas"
            icon={<GithubIcon size={15} />}
            label="GitHub"
            detail="github.com/renanfreitas"
          />
          <ContactLink
            href="https://linkedin.com/in/renanfreitas"
            icon={<LinkedinIcon size={15} />}
            label="LinkedIn"
            detail="linkedin.com/in/renanfreitas"
          />
          <ContactLink
            href="mailto:renan@email.com"
            icon={<MailIcon size={15} />}
            label="E-mail"
            detail="renan@email.com"
          />
        </div>
      </div>
    </section>
  )
}

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

function Footer() {
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
              fontSize: '11px',
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
            href="https://github.com/renanfreitas"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#4a4a5a', textDecoration: 'none', transition: 'color 0.15s' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#9090a8')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#4a4a5a')}
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://linkedin.com/in/renanfreitas"
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

// ── Icons ────────────────────────────────────────────────────────────────────

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function MailIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function ExternalLink({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function HamburgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

// ── Tech Icons ───────────────────────────────────────────────────────────────

function IconReact() {
  return (
    <svg viewBox="-11.5 -10.232 23 20.463" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1">
      <circle r="2.05" fill="currentColor" stroke="none"/>
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </svg>
  )
}

function IconTypeScript() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
    </svg>
  )
}

function IconJavaScript() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
    </svg>
  )
}

function IconTailwind() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  )
}

function IconNode() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.079-.383.585-.203.703-.25 1.328-.605.065-.038.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.19-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.085.05-.14.146-.14.245v10.15c0 .097.054.189.137.236l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.026c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.851 1.851 0 0 1-.919-1.604V6.921c0-.664.354-1.278.922-1.604l8.795-5.082c.554-.315 1.292-.315 1.841 0l8.794 5.082c.567.326.922.94.922 1.604v10.15c0 .664-.355 1.275-.922 1.604l-8.794 5.076c-.28.163-.6.247-.921.247zm2.717-6.994c-3.855 0-4.663-1.772-4.663-3.258 0-.141.115-.253.256-.253h1.138c.127 0 .234.092.253.218.172 1.161.684 1.748 3.018 1.748 1.858 0 2.649-.42 2.649-1.406 0-.568-.225-.99-3.116-1.274-2.419-.24-3.912-.771-3.912-2.702 0-1.779 1.499-2.839 4.012-2.839 2.82 0 4.218.979 4.394 3.079a.255.255 0 0 1-.064.195.254.254 0 0 1-.191.084h-1.142a.253.253 0 0 1-.246-.199c-.276-1.218-.943-1.609-2.751-1.609-2.027 0-2.263.706-2.263 1.235 0 .642.279.829 3.019 1.191 2.714.358 4.005.866 4.005 2.773 0 1.92-1.601 3.017-4.394 3.017z"/>
    </svg>
  )
}

function IconFastify() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z"/>
    </svg>
  )
}

function IconPrisma() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M21.807 18.285L13.553.765a1.813 1.813 0 0 0-1.65-1.053c-.078 0-.156.006-.234.018a1.813 1.813 0 0 0-1.466 1.224L2.211 22.5a1.813 1.813 0 0 0 2.035 2.308l9.216-1.998a1.813 1.813 0 0 0 1.255-1.045l7.09-3.48zm-9.6 3.42-7.926 1.718 5.97-17.396 7.556 16.25z"/>
    </svg>
  )
}

function IconPostgres() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="8" ry="3"/>
      <path d="M4 5v5c0 1.657 3.582 3 8 3s8-1.343 8-3V5"/>
      <path d="M4 10v5c0 1.657 3.582 3 8 3s8-1.343 8-3v-5"/>
    </svg>
  )
}

function IconSQLite() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="8" ry="3"/>
      <path d="M4 5v5c0 1.657 3.582 3 8 3s8-1.343 8-3V5"/>
      <path d="M4 10v9c0 1.657 3.582 3 8 3s8-1.343 8-3v-9"/>
    </svg>
  )
}

function IconGit() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
    </svg>
  )
}

// ── Responsive CSS ───────────────────────────────────────────────────────────

const responsiveStyles = `
  @media (max-width: 768px) {
    .hidden-mobile { display: none !important; }
    .show-mobile { display: flex !important; }
    .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
  }
  @media (min-width: 769px) {
    .show-mobile { display: none !important; }
  }
`

// ── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <style>{responsiveStyles}</style>
      <div style={{ backgroundColor: '#0c0c0e', minHeight: '100vh' }}>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main>
          <Hero />
          <Projects />
          <About />
          <Stack />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
