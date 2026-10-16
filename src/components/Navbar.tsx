import { useState } from 'react';

interface NavbarProps {
  currentView: 'home' | 'blog';
  onNavigate: (view: 'home' | 'blog', sectionId?: string) => void;
}

export default function Navbar({ currentView, onNavigate }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('inicio');
  const activeLinkClass = 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
  const inactiveLinkClass = 'border-transparent text-gray-300 hover:text-white hover:bg-white/5';

  const navigateToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    onNavigate('home', sectionId);
  };

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    navigateToSection(sectionId);
  };

  const handleBlogClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveSection('blog');
    onNavigate('blog');
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:flex-nowrap sm:px-6 sm:py-4">
        <div
          className="flex min-w-0 flex-col cursor-pointer"
          onClick={() => navigateToSection('inicio')}
        >
          <img
            src="/mander-tech-logo.svg"
            alt="Mander Tech"
            className="h-auto w-48 sm:w-56"
          />
        </div>

        <nav className="flex w-full justify-between items-center text-xs text-gray-300 sm:w-auto sm:gap-6 sm:text-base">
          <a
            href="#inicio"
            onClick={(e) => handleSectionClick(e, 'inicio')}
            className={`rounded-md border px-3 py-1 text-sm font-semibold transition-all ${
              currentView === 'home' && activeSection === 'inicio' ? activeLinkClass : inactiveLinkClass
            }`}
          >
            Inicio
          </a>

          <a
            href="#servicios"
            onClick={(e) => handleSectionClick(e, 'servicios')}
            className={`rounded-md border px-3 py-1 text-sm font-semibold transition-all ${
              currentView === 'home' && activeSection === 'servicios' ? activeLinkClass : inactiveLinkClass
            }`}
          >
            Servicios
          </a>

          <a
            href="#proyectos"
            onClick={(e) => handleSectionClick(e, 'proyectos')}
            className={`rounded-md border px-3 py-1 text-sm font-semibold transition-all ${
              currentView === 'home' && activeSection === 'proyectos' ? activeLinkClass : inactiveLinkClass
            }`}
          >
            Proyectos
          </a>

          <a
            href="#blog"
            onClick={handleBlogClick}
            className={`rounded-md border px-3 py-1 text-sm font-semibold transition-all ${
              currentView === 'blog'
                ? activeLinkClass
                : inactiveLinkClass
            }`}
          >
            Blog
          </a>

          <a
            href="#contacto"
            onClick={(e) => handleSectionClick(e, 'contacto')}
            className={`rounded-md border px-3 py-1 text-sm font-semibold transition-all ${
              currentView === 'home' && activeSection === 'contacto' ? activeLinkClass : inactiveLinkClass
            }`}
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}