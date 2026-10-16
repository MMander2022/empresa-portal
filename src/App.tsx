import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BlogNormas } from './pages/BlogNormas';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'blog'>('home');

  const handleNavigate = (view: 'home' | 'blog', sectionId?: string) => {
    setCurrentView(view);

    if (view === 'home') {
      if (sectionId) {
        // Da un instante breve por si el DOM estaba mostrando el Blog
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-white">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      
      <main>
        {currentView === 'home' ? <Home /> : <BlogNormas />}
      </main>
    </div>
  );
}