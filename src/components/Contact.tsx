import { motion } from 'framer-motion';
import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Handle possible TypeScript error for 'import.meta.env'
const serviceId = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID;
const templateId = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY;

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const isConfigured = useMemo(() => Boolean(serviceId && templateId && publicKey), []);

  const validate = () => {
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email.';
    } else if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!form.message.trim()) nextErrors.message = 'Please enter a message.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (field: keyof FormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [field]: event.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setStatusMessage('Email service is not configured yet. Please reach out via the links on the right.');
      return;
    }

    setStatus('loading');
    setStatusMessage('Sending your message...');

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        publicKey,
      );

      setStatus('success');
      setStatusMessage('Thanks for reaching out! I will get back to you soon.');
      setForm({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('EmailJS error', error);
      setStatus('error');
      setStatusMessage('Something went wrong while sending. Please try again or email me directly.');
    }
  };

  return (
    <section className="container-section py-16" aria-label="Contact">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-8"
      >
        Contact
      </motion.h2>
      <div className="grid lg:grid-cols-2 gap-8">
        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/40 dark:bg-slate-900/40"
          onSubmit={handleSubmit}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" error={errors.name}>
              <input
                required
                className={`input ${errors.name ? 'border-red-400 focus:ring-red-300 dark:border-red-500' : ''}`}
                placeholder="Your name"
                value={form.name}
                onChange={handleChange('name')}
                aria-invalid={Boolean(errors.name)}
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                required
                type="email"
                className={`input ${errors.email ? 'border-red-400 focus:ring-red-300 dark:border-red-500' : ''}`}
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange('email')}
                aria-invalid={Boolean(errors.email)}
              />
            </Field>
          </div>
          <Field label="Message" className="mt-4" error={errors.message}>
            <textarea
              required
              rows={5}
              className={`input ${errors.message ? 'border-red-400 focus:ring-red-300 dark:border-red-500' : ''}`}
              placeholder="How can I help?"
              value={form.message}
              onChange={handleChange('message')}
              aria-invalid={Boolean(errors.message)}
            />
          </Field>
          <button
            type="submit"
            className="mt-4 px-5 py-3 rounded-lg bg-brand text-white hover:bg-brand-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending…' : 'Send Message'}
          </button>
          <div className="mt-3 min-h-[1.6rem] text-sm" aria-live="polite" role="status">
            {status !== 'idle' && (
              <span
                className={
                  status === 'success'
                    ? 'text-emerald-500'
                    : status === 'error'
                    ? 'text-red-500'
                    : 'opacity-80'
                }
              >
                {statusMessage}
              </span>
            )}
          </div>
          {!isConfigured && (
            <p className="mt-2 text-xs text-amber-500">
              Email service keys are not configured. Update your `.env` file with EmailJS credentials to enable sending.
            </p>
          )}
          <p className="mt-3 text-sm opacity-80">Let’s build something amazing together.</p>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/40 dark:bg-slate-900/40"
        >
          <h3 className="font-semibold">Reach me</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="mailto:thanis7168t@gmail.com" className="hover:text-brand">thanis7168t@gmail.com</a></li>
            <li><a href="tel:+97431461722" className="hover:text-brand">+974 3146 1722</a></li>
            <li className="opacity-80">Doha, Qatar</li>
          </ul>
          <div className="mt-4 flex items-center gap-4 text-sm">
            <a href="https://www.linkedin.com/in/mohammed-thanis-096b31267/" target="_blank" rel="noreferrer" className="hover:text-brand">LinkedIn</a>
            <a href="https://github.com/thanismmm" target="_blank" rel="noreferrer" className="hover:text-brand">GitHub</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  className,
  error,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
  error?: string;
}) {
  return (
    <label className={`block ${className ?? ''}`}>
      <div className="text-xs uppercase tracking-wide opacity-70 mb-1">{label}</div>
      <div className="[&_input.input]:w-full [&_textarea.input]:w-full">
        {children}
      </div>
      {error && <div className="mt-1 text-xs text-red-500">{error}</div>}
    </label>
  );
}



