export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="container-section py-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="opacity-80">© {new Date().getFullYear()} Mohammed Thanis. All rights reserved.</p>
        <div className="flex items-center gap-4 opacity-90">
          <a href="https://github.com/thanismmm" target="_blank" rel="noreferrer" className="hover:text-brand">GitHub</a>
          <a href="https://www.linkedin.com/in/mohammed-thanis-096b31267/" target="_blank" rel="noreferrer" className="hover:text-brand">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}


