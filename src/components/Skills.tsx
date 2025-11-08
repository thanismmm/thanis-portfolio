import { motion } from 'framer-motion';

const categories = [
  { title: 'Frontend', items: ['React', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'Flask', 'PHP'] },
  { title: 'Database', items: ['MySQL', 'MongoDB'] },
  { title: 'Cloud & Tools', items: ['Azure', 'Git', 'Netlify', 'Vercel', 'Postman'] },
  { title: 'Mobile & UI Design', items: ['Flutter', 'Figma', 'Canva Sketch'] },
];

export function Skills() {
  return (
    <section className="container-section py-16" aria-label="Skills">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-8"
      >
        Skills
      </motion.h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            whileTap={{ y: -2 }}
            className="group rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/40 dark:bg-slate-900/40 transition-all duration-300 hover:shadow-lg hover:border-brand/30 hover:bg-white/60 dark:hover:bg-slate-900/60"
          >
            <h3 className="font-semibold mb-3">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map(item => (
                <span key={item} className="px-3 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70 transition-colors group-hover:border-brand/40">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


