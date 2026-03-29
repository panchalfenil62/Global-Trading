import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  requirement: string;
  message: string;
};

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setIsSuccess(true);
        reset();
      }
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-primary min-h-screen">
      {/* Header */}
      <section className="py-20 bg-secondary/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Our Team</h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Get in touch with our global trading experts for pricing, logistics, and supply inquiries.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Global Reach, Local Support</h2>
              <p className="text-slate-400 mb-12 text-lg">
                Whether you're looking for a long-term supply contract or a spot purchase, our team is ready to assist you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-accent/10 p-4 rounded-2xl">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Us</h4>
                    <p className="text-slate-400">trade@globaltrading.com</p>
                    <p className="text-slate-400">support@globaltrading.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-accent/10 p-4 rounded-2xl">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Call Us</h4>
                    <p className="text-slate-400">+1 (555) 123-4567 (Global HQ)</p>
                    <p className="text-slate-400">+44 20 7946 0000 (Europe Office)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-accent/10 p-4 rounded-2xl">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Office Location</h4>
                    <p className="text-slate-400">123 Energy Plaza, Financial District</p>
                    <p className="text-slate-400">Houston, TX 77002, USA</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 rounded-3xl overflow-hidden h-64 bg-secondary border border-white/5 relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                  <MapPin className="h-12 w-12 opacity-20" />
                  <span className="ml-4 font-bold">Interactive Map Loading...</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="h-20 w-20 text-green-500 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold mb-4">Inquiry Sent!</h3>
                  <p className="text-slate-400 mb-8">
                    Thank you for contacting Global Trading. Our representative will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-accent font-bold hover:underline"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-8">Request a Quote</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-400 mb-2">Full Name</label>
                        <input
                          {...register('name', { required: true })}
                          className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors"
                          placeholder="John Doe"
                        />
                        {errors.name && <span className="text-red-500 text-xs mt-1">Required</span>}
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-400 mb-2">Email Address</label>
                        <input
                          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                          className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors"
                          placeholder="john@company.com"
                        />
                        {errors.email && <span className="text-red-500 text-xs mt-1">Valid email required</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-400 mb-2">Company Name</label>
                        <input
                          {...register('company', { required: true })}
                          className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors"
                          placeholder="Energy Corp"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-400 mb-2">Requirement Type</label>
                        <select
                          {...register('requirement')}
                          className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors appearance-none"
                        >
                          <option value="crude">Crude Oil</option>
                          <option value="diesel">Diesel EN590</option>
                          <option value="jet">Jet Fuel A1</option>
                          <option value="lpg">LPG / LNG</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-400 mb-2">Message / Specific Requirements</label>
                      <textarea
                        {...register('message', { required: true })}
                        rows={4}
                        className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors"
                        placeholder="Tell us about your volume requirements and delivery terms..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent-hover text-primary font-bold py-4 rounded-xl transition-all flex items-center justify-center disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <Loader2 className="h-6 w-6 animate-spin" />
                      ) : (
                        <>
                          Submit Inquiry
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
