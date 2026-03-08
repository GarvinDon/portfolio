import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import DesignSystem from '@/components/DesignSystem'
import Experience from '@/components/Experience'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <DesignSystem />
      <Experience />
      <Achievements />
      <Contact />
      <footer className="py-10 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Adon · Portfolio
      </footer>
    </main>
  )
}
