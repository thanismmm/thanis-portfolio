import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface StatItemProps {
    value: number;
    label: string;
    suffix?: string;
    icon?: string;
}

function StatItem({ value, label, suffix = '', icon }: StatItemProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });
    const [displayValue, setDisplayValue] = useState('0');

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, motionValue, value]);

    useEffect(() => {
        const unsubscribe = springValue.on('change', (latest) => {
            setDisplayValue(Math.floor(latest).toString());
        });
        return unsubscribe;
    }, [springValue]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center group"
        >
            <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand/30 to-purple-500/30 blur-xl group-hover:blur-2xl transition-all duration-500" />

                {/* Main circle */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-brand/20 to-purple-500/20 border-2 border-brand/40 dark:border-brand/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                    {/* Inner circle */}
                    <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 flex flex-col items-center justify-center shadow-lg">
                        {icon && (
                            <span className="text-2xl sm:text-3xl mb-1">{icon}</span>
                        )}
                        <motion.span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-brand to-purple-600 bg-clip-text text-transparent">
                            {displayValue}
                            {suffix}
                        </motion.span>
                    </div>
                </div>
            </div>

            <h3 className="mt-4 text-sm sm:text-base font-semibold text-center opacity-90">
                {label}
            </h3>
        </motion.div>
    );
}

export function Stats() {
    const stats: StatItemProps[] = [
        { value: 15, label: 'Completed Projects', icon: '✓', suffix: '+' },
        { value: 3, label: 'Ongoing Projects', icon: '⚡' },
        { value: 3, label: 'Years Experience', icon: '🚀', suffix: '+' },
        { value: 20, label: 'Technologies', icon: '💻', suffix: '+' },
    ];

    return (
        <section className="container-section py-16" aria-label="Statistics">
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold mb-12 text-center"
            >
                Achievements
            </motion.h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-5xl mx-auto">
                {stats.map((stat, index) => (
                    <StatItem key={index} {...stat} />
                ))}
            </div>
        </section>
    );
}
