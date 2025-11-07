import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMoon, FiSun, FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ isDark, onToggleTheme }: { isDark: boolean; onToggleTheme: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-950/70 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="container-section flex items-center justify-between h-14">
        <a href="#home" className="font-semibold tracking-tight">Mohammed Thanis</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {sections.map(s => (
            <a key={s.id} href={`#${s.id}`} className="hover:text-brand dark:hover:text-brand transition-colors">{s.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/thanismmm"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-thanis-096b31267/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900"
          >
            <FiLinkedin />
          </a>
          <button
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <button
            className="md:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden overflow-hidden border-t border-slate-200 dark:border-slate-800"
          >
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="container-section py-3 flex flex-col gap-3"
            >
              {sections.map(s => (
                <a key={s.id} href={`#${s.id}`} onClick={() => setOpen(false)} className="py-1">
                  {s.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


