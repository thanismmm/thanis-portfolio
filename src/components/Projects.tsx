import { motion } from 'framer-motion';

type Project = {
  name: string;
  description: string;
  stack: string[];
  image?: string; // path under /public or external URL
  links?: { github?: string; demo?: string };
};

const projects: Project[] = [
  {
    name: 'Solent Health Care',
    description: 'Hospital website with patient information and services.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    image: '/public/hospital.png',
    links: { demo: '#', github: '#' },
  },
  {
    name: 'Reporting System',
    description: 'Python & Streamlit analytics dashboard for reporting needs.',
    stack: ['Python', 'Streamlit'],
    image: '/public/erp.png',
    links: { github: '#' },
  },
  {
    name: 'Business Analysis Dashboard',
    description: 'Python-based data insights for business decision-making.',
    stack: ['Python'],
    image: '/public/bps.png',
    links: { github: '#' },
  },
  {
    name: 'News Page Website',
    description: 'React app consuming Open News API for latest headlines.',
    stack: ['React', 'Open News API'],
    image: '/public/newspage.png',
    links: { demo: '#', github: '#' },
  },
  {
    name: 'Book Recommendation System',
    description: 'Streamlit app recommending books based on preferences.',
    stack: ['Python', 'Streamlit'],
    image: '/public/book_rec.png',
    links: { github: '#' },
  },
];

export function Projects() {
  return (
    <section className="container-section py-16" aria-label="Projects">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-8"
      >
        Projects
      </motion.h2>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white/40 dark:bg-slate-900/40 hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <div className="aspect-video bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <img
                src={p.image ?? `https://picsum.photos/seed/${encodeURIComponent(p.name)}/800/450`}
                alt={`${p.name} preview`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.src = `https://picsum.photos/seed/${encodeURIComponent(p.name)}/800/450`;
                }}
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm opacity-80">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {p.stack.map(s => (
                  <span key={s} className="px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70">{s}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4 text-sm">
                {p.links?.demo && <a className="hover:text-brand" href={p.links.demo} target="_blank" rel="noreferrer">Live Demo</a>}
                {p.links?.github && <a className="hover:text-brand" href={p.links.github} target="_blank" rel="noreferrer">GitHub</a>}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}


