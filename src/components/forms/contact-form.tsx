'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import type { Dictionary } from '@/types';

type Props = {
  dictionary: Dictionary;
};

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  company: z.string().optional(),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export function ContactForm({ dictionary }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send');

      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-primary/30 bg-primary/5 py-16 text-center"
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <p className="text-xl font-medium">{dictionary.contact.form.success}</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: easeOutExpo }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Name & Company */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{dictionary.contact.form.name} *</Label>
          <Input
            id="name"
            {...register('name')}
            aria-invalid={!!errors.name}
            placeholder="Jan Kowalski"
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">{dictionary.contact.form.company}</Label>
          <Input
            id="company"
            {...register('company')}
            placeholder="Nazwa firmy"
          />
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">{dictionary.contact.form.email} *</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            aria-invalid={!!errors.email}
            placeholder="jan@firma.pl"
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">{dictionary.contact.form.phone}</Label>
          <Input
            id="phone"
            type="tel"
            {...register('phone')}
            placeholder="+48 123 456 789"
          />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">{dictionary.contact.form.message} *</Label>
        <Textarea
          id="message"
          {...register('message')}
          aria-invalid={!!errors.message}
          placeholder="Opowiedz nam o swoim projekcie..."
          rows={6}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* Error message */}
      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-4"
        >
          <AlertCircle className="h-5 w-5 text-destructive" />
          <p className="text-sm text-destructive">{dictionary.contact.form.error}</p>
        </motion.div>
      )}

      {/* Submit button */}
      <Button
        type="submit"
        size="lg"
        disabled={status === 'sending'}
        className="w-full text-lg"
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            {dictionary.contact.form.sending}
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            {dictionary.contact.form.submit}
          </>
        )}
      </Button>
    </motion.form>
  );
}
