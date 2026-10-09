'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { siteConfig } from '@/config/site';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

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
      <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C5A96]/90 to-[#0B1120]/80 mix-blend-multiply" />
        
        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[48px] md:text-[64px] font-bold text-white mb-6 font-heading tracking-tight"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[18px] md:text-[20px] text-gray-200 max-w-2xl leading-relaxed"
          >
            Get in touch with our experts to discuss how we can accelerate your digital transformation and streamline your operations.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: Info */}
          <div className="lg:w-1/3 flex flex-col gap-8">
            <div>
              <h2 className="text-[32px] font-bold text-[var(--primary)] mb-8 font-heading">Get In Touch</h2>
              <div className="flex flex-col gap-4">
                
                <div className="flex items-start gap-5 bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center text-[#0C5A96] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href={`mailto:${siteConfig.contactEmail}`} className="text-gray-600 hover:text-[#0C5A96] transition-colors">{siteConfig.contactEmail}</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center text-[#0C5A96] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href={`tel:${siteConfig.contactPhone}`} className="text-gray-600 hover:text-[#0C5A96] transition-colors">{siteConfig.contactPhone}</a>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center text-[#0C5A96] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Headquarters</h3>
                    <p className="text-gray-600 leading-relaxed">123 Innovation Drive<br/>Suite 400<br/>Tech City, TC 10001</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100 mt-2">
              <h2 className="text-[20px] font-bold text-gray-900 mb-2">Business Hours</h2>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:w-2/3">
            <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 rounded-3xl">
              <h2 className="text-[32px] font-bold text-[var(--primary)] mb-8 font-heading">Send us a message</h2>
              
              {submitStatus === 'success' ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-2xl text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                  <p className="text-green-700/80 mb-6">Thank you for reaching out. One of our experts will get back to you shortly.</p>
                  <button onClick={() => setSubmitStatus('idle')} className="text-green-700 font-semibold underline hover:text-green-800 transition-colors">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                  {/* Honeypot field - hidden from users */}
                  <input type="text" {...register('honeypot')} className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="fullName" className="text-[14px] font-medium text-gray-700">Full name <span className="text-red-500">*</span></label>
                      <input 
                        id="fullName" 
                        placeholder="John Doe"
                        {...register('fullName')} 
                        className={`p-4 bg-gray-50/50 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#0C5A96]/20 transition-all ${errors.fullName ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-[#0C5A96]'}`}
                      />
                      {errors.fullName && <span className="text-red-500 text-xs font-medium">{errors.fullName.message}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[14px] font-medium text-gray-700">Work email <span className="text-red-500">*</span></label>
                      <input 
                        id="email" 
                        type="email"
                        placeholder="john@company.com"
                        {...register('email')} 
                        className={`p-4 bg-gray-50/50 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#0C5A96]/20 transition-all ${errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-[#0C5A96]'}`}
                      />
                      {errors.email && <span className="text-red-500 text-xs font-medium">{errors.email.message}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-[14px] font-medium text-gray-700">Phone</label>
                      <input 
                        id="phone" 
                        placeholder="+1 (555) 000-0000"
                        {...register('phone')} 
                        className="p-4 bg-gray-50/50 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0C5A96] focus:ring-2 focus:ring-[#0C5A96]/20 transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="text-[14px] font-medium text-gray-700">Company</label>
                      <input 
                        id="company" 
                        placeholder="Your organization name"
                        {...register('company')} 
                        className="p-4 bg-gray-50/50 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0C5A96] focus:ring-2 focus:ring-[#0C5A96]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-[14px] font-medium text-gray-700">Service of interest</label>
                    <select 
                      id="service" 
                      {...register('service')}
                      className="p-4 bg-gray-50/50 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0C5A96] focus:ring-2 focus:ring-[#0C5A96]/20 transition-all appearance-none cursor-pointer"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                    >
                      <option value="">Select a service...</option>
                      {siteConfig.services.map(s => (
                        <option key={s.name} value={s.name}>{s.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[14px] font-medium text-gray-700">Message <span className="text-red-500">*</span></label>
                    <textarea 
                      id="message" 
                      rows={5}
                      placeholder="How can we help you?"
                      {...register('message')} 
                      className={`p-4 bg-gray-50/50 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#0C5A96]/20 transition-all resize-y ${errors.message ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-[#0C5A96]'}`}
                    />
                    {errors.message && <span className="text-red-500 text-xs font-medium">{errors.message.message}</span>}
                  </div>

                  {submitStatus === 'error' && (
                    <div className="text-red-600 bg-red-50 p-4 rounded-xl text-sm font-medium border border-red-100">
                      An error occurred while sending your message. Please try again later.
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="mt-4 bg-gradient-to-r from-[#0C5A96] to-[#2F7BFF] text-white py-4 px-8 rounded-xl font-bold uppercase tracking-wide hover:shadow-[0_8px_30px_rgb(12,90,150,0.3)] transition-all duration-300 disabled:opacity-70 disabled:hover:shadow-none transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Map */}
      <div className="w-full h-[400px] md:h-[500px] relative bg-gray-100 mt-8">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2527998699!2d-74.14448744576307!3d40.69763123337346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(100%) contrast(1.1) opacity(0.8)' }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="MATIC Global Solutions Headquarters"
          className="absolute inset-0"
        />
        {/* Overlay box for extra premium feel */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12 bg-white/95 backdrop-blur shadow-2xl p-6 rounded-2xl border border-gray-100 hidden md:flex flex-col gap-2 pointer-events-none">
          <div className="flex items-center gap-2 text-[#0C5A96]">
            <MapPin className="w-5 h-5" />
            <h3 className="font-bold">Global Headquarters</h3>
          </div>
          <p className="text-gray-600 text-sm mt-1">123 Innovation Drive, Suite 400<br/>Tech City, NY 10001</p>
        </div>
      </div>
    </div>
  );
}
