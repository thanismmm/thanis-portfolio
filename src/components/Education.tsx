import { motion } from 'framer-motion';

const items = [
  { icon: '🎓', title: 'BTEC HND in Software Engineering – BCAS, Colombo' },
  { icon: '🧠', title: 'NVQ Level 4 in ICT Technician' },
  { icon: '🏅', title: 'Certificate in Office Assistant' },
];

export function Education() {
  return (
    <section className="container-section py-16" aria-label="Education & Certification">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-8"
      >
        Education & Certification
      </motion.h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            whileTap={{ y: -2 }}
            className="group rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/40 dark:bg-slate-900/40 transition-all duration-300 hover:shadow-lg hover:border-brand/30 hover:bg-white/60 dark:hover:bg-slate-900/60"
          >
            <div className="text-3xl">{it.icon}</div>
            <div className="mt-3 font-medium">{it.title}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


