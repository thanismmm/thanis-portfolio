import { motion } from 'framer-motion';

const roles = [
  {
    title: 'Web Developer',
    org: 'SoftexpertZ',
    period: 'Jun 2023 – Aug 2025',
    points: [
      'MERN stack projects and API integration',
      'Responsive design and cross-browser compatibility',
      'Bug fixes, performance improvements, and code reviews',
      'Team collaboration and Agile workflows',
    ],
  },
  {
    title: 'IT Technician',
    org: 'Predeshiya Sabha',
    period: 'Apr 2021 – May 2022',
    points: [
      'Hardware setup and troubleshooting',
      'Network maintenance and support',
      'IT support and documentation',
    ],
  },
];

export function Experience() {
  return (
    <section className="container-section py-16" aria-label="Experience">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-8"
      >
        Experience
      </motion.h2>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />
        <div className="space-y-10">
          {roles.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="pl-12"
            >
              <div className="w-2 h-2 rounded-full bg-brand absolute translate-x-4 mt-2" />
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5 bg-white/40 dark:bg-slate-900/40">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="font-semibold">{r.title} | {r.org}</h3>
                  <div className="text-sm opacity-70">{r.period}</div>
                </div>
                <ul className="mt-3 list-disc pl-5 space-y-1 opacity-90">
                  {r.points.map(p => (<li key={p}>{p}</li>))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


