'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { siteConfig } from '@/config/site';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Valid work email is required'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().max(0, 'Spam detected').optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    if (data.honeypot) return; // Simple honeypot check
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white pb-16">
      {/* Hero */}
      <div className="bg-[var(--bg)] py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[40px] md:text-[56px] font-bold text-[var(--primary)] mb-4">Contact Us</h1>
          <p className="text-[18px] text-[var(--text-muted)] max-w-2xl">
            Get in touch with our experts to discuss how we can accelerate your digital transformation and streamline your operations.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: Info */}
          <div className="lg:w-1/3 flex flex-col gap-10">
            <div>
              <h2 className="text-[28px] font-bold text-[var(--text)] mb-6">Get In Touch</h2>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-[var(--primary)] shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text)]">Email</h3>
                    <a href={`mailto:${siteConfig.contactEmail}`} className="text-[var(--text-muted)] hover:text-[var(--primary)]">{siteConfig.contactEmail}</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-[var(--primary)] shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text)]">Phone</h3>
                    <a href={`tel:${siteConfig.contactPhone}`} className="text-[var(--text-muted)] hover:text-[var(--primary)]">{siteConfig.contactPhone}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-[var(--primary)] shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text)]">Headquarters</h3>
                    <p className="text-[var(--text-muted)]">123 Innovation Drive<br/>Suite 400<br/>Tech City, TC 10001</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-[24px] font-bold text-[var(--text)] mb-4">Business Hours</h2>
              <p className="text-[var(--text-muted)]">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-10 shadow-soft border border-gray-100 rounded-lg">
              <h2 className="text-[28px] font-bold text-[var(--text)] mb-6">Send us a message</h2>
              
              {submitStatus === 'success' ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-md">
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p>Thank you for reaching out. One of our experts will get back to you shortly.</p>
                  <button onClick={() => setSubmitStatus('idle')} className="mt-4 text-green-700 underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                  {/* Honeypot field - hidden from users */}
                  <input type="text" {...register('honeypot')} className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="fullName" className="font-semibold text-[var(--text)]">Full name *</label>
                      <input 
                        id="fullName" 
                        {...register('fullName')} 
                        className={`p-3 border rounded focus:outline-none focus:border-[var(--primary)] ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-semibold text-[var(--text)]">Work email *</label>
                      <input 
                        id="email" 
                        type="email"
                        {...register('email')} 
                        className={`p-3 border rounded focus:outline-none focus:border-[var(--primary)] ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="font-semibold text-[var(--text)]">Phone</label>
                      <input 
                        id="phone" 
                        {...register('phone')} 
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:border-[var(--primary)]"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="font-semibold text-[var(--text)]">Company</label>
                      <input 
                        id="company" 
                        {...register('company')} 
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:border-[var(--primary)]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="font-semibold text-[var(--text)]">Service of interest</label>
                    <select 
                      id="service" 
                      {...register('service')}
                      className="p-3 border border-gray-300 rounded focus:outline-none focus:border-[var(--primary)] bg-white"
                    >
                      <option value="">Select a service...</option>
                      {siteConfig.services.map(s => (
                        <option key={s.name} value={s.name}>{s.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold text-[var(--text)]">Message *</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      {...register('message')} 
                      className={`p-3 border rounded focus:outline-none focus:border-[var(--primary)] resize-y ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
                  </div>

                  {submitStatus === 'error' && (
                    <div className="text-red-600 bg-red-50 p-3 rounded text-sm">
                      An error occurred while sending your message. Please try again later.
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-[var(--primary)] text-white py-4 px-8 font-bold uppercase hover:bg-[var(--primary-dark)] transition-colors disabled:opacity-70 mt-2"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="w-full h-[400px] bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-500">
          <MapPin className="w-12 h-12 mb-2 opacity-50" />
          <p className="font-semibold">Interactive Map Embed Placeholder</p>
        </div>
      </div>
    </div>
  );
}
