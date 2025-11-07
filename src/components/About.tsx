import { motion } from 'framer-motion';

export function About() {
  return (
    <section className="container-section py-16" aria-label="About Mohammed Thanis">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-8"
      >
        About Me
      </motion.h2>
      <div className="grid md:grid-cols-[220px,1fr] gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-40 h-40 md:w-52 md:h-52 rounded-2xl bg-gradient-to-br from-brand/30 to-transparent border border-slate-200 dark:border-slate-800 overflow-hidden mx-auto md:mx-0"
        >
          <img
            src="images/profile.JPG"
            alt="Mohammed Thanis profile"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="leading-7 opacity-90"
          >
            Web Developer with 3+ years of experience building dynamic and user-centric web applications. Skilled in full-stack development, responsive design, and cross-browser compatibility. Dedicated to delivering scalable, efficient solutions and adapting to emerging technologies.
          </motion.p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <Info label="Location" value="Doha, Qatar" />
            <Info label="Email" value="thanis7168t@gmail.com" link="mailto:thanis7168t@gmail.com" />
            <Info label="Phone" value="+974 3146 1722" link="tel:+97431461722" />
            <Info label="LinkedIn" value="linkedin.com/in/mohammed-thanis-096b31267" link="https://www.linkedin.com/in/mohammed-thanis-096b31267/" />
            <Info label="GitHub" value="github.com/thanismmm" link="https://github.com/thanismmm" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ label, value, link }: { label: string; value: string; link?: string }) {
  const content = <span className="font-medium">{value}</span>;
  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4 bg-white/40 dark:bg-slate-900/40">
      <div className="text-xs uppercase tracking-wide opacity-70 mb-1">{label}</div>
      {link ? (
        <a href={link} target={link.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="hover:text-brand">
          {content}
        </a>
      ) : content}
    </div>
  );
}


