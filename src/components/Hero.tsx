import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

export function Hero() {
  const roles = useMemo(() => [
    'Web Developer',
    'Frontend Developer',
    'Mobile App Developer',
    'Full Stack Developer',
  ], []);

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80; // ms per char
    const pauseAtEnd = 900; // pause before deleting
    const pauseBetween = 400; // pause before next word

    let timer: number | undefined;

    if (!isDeleting && displayed === fullText) {
      timer = window.setTimeout(() => setIsDeleting(true), pauseAtEnd);
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
      timer = window.setTimeout(() => {}, pauseBetween);
    } else {
      timer = window.setTimeout(() => {
        const next = isDeleting
          ? fullText.slice(0, displayed.length - 1)
          : fullText.slice(0, displayed.length + 1);
        setDisplayed(next);
      }, typingSpeed);
    }

    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [displayed, isDeleting, roleIndex, roles]);
  return (
    <div className="container-section min-h-[84vh] grid place-items-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-white/40 dark:to-slate-950/40" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl"
      >
        <div className="flex justify-center mb-6">
          <motion.img
            src="/images/profile.jpg"
            alt="Mohammed Thanis profile"
            className="mx-auto w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover object-center ring-2 ring-brand/50 shadow-lg"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            loading="eager"
          />
        </div>
        {/* <div className="accent-pill mb-4">
          <span className="w-2 h-2 rounded-full bg-brand" />
          Transferable Visa with NOC Available
        </div> */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Mohammed Thanis
        </h1>
        <div className="mt-3 text-lg sm:text-xl opacity-90 h-[1.6em] font-medium">
          <span>{displayed}</span>
          <span className="caret" aria-hidden="true" />
          {/* <span className="opacity-70"> | Doha, Qatar</span> */}
        </div>
        <p className="mt-4 text-base sm:text-lg opacity-80">
          Building modern, scalable, and user-friendly web applications.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#projects" className="px-5 py-3 rounded-lg bg-brand text-white hover:bg-brand-dark transition-colors">View Projects</a>
          <a target='_blank' href="/public/thanis-webcv-qatar.pdf" className="px-5 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors">Download Resume</a>
        </div>
      </motion.div>
    </div>
  );
}


