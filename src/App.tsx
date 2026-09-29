import { useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects, type Project } from './components/Projects'
import { Stack } from './components/Stack'

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contato', href: '#contato' },
]

const PROJECTS: Project[] = [
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

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <style>{responsiveStyles}</style>
      <div style={{ backgroundColor: '#0c0c0e', minHeight: '100vh' }}>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} links={NAV_LINKS} />
        <main>
          <Hero />
          <Projects projects={PROJECTS} />
          <About />
          <Stack />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
