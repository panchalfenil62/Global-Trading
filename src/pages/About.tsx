import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Eye, Award, CheckCircle2, Users } from 'lucide-react';

export const About = () => {
  return (
    <div className="bg-primary">
      {/* Hero */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Driving the Future of <span className="text-accent">Energy Trading</span></h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              Global Trading is a premier energy commodities firm specializing in the sourcing, logistics, and distribution of petroleum products worldwide.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-3xl rounded-full -mr-20 -mt-20" />
      </section>

      {/* Mission/Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-card p-12 rounded-3xl border border-white/5">
              <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                To provide seamless energy solutions through integrity, innovation, and operational excellence, ensuring a reliable flow of energy to power global progress.
              </p>
            </div>
            <div className="glass-card p-12 rounded-3xl border border-white/5">
              <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                To be the world's most trusted energy trading partner, recognized for our commitment to sustainability, reliability, and global market leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Core Values</h2>
            <h3 className="text-4xl font-bold">What Defines Us</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Integrity", desc: "Honesty and transparency in every transaction and partnership.", icon: Shield },
              { title: "Excellence", desc: "Striving for the highest standards in logistics and supply.", icon: Award },
              { title: "Collaboration", desc: "Building long-term value through strategic global partnerships.", icon: Users }
            ].map((value, i) => (
              <div key={i} className="text-center p-8">
                <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-10 w-10 text-accent" />
                </div>
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-slate-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1454165833767-027ff33027ef?auto=format&fit=crop&q=80&w=1000"
                alt="Compliance"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Compliance & Safety</h2>
              <h3 className="text-4xl font-bold mb-8">Unwavering Commitment to Standards</h3>
              <p className="text-slate-400 mb-8 text-lg">
                We operate with strict adherence to international laws, environmental regulations, and safety standards. Our compliance framework ensures that every barrel traded meets global ethical and legal requirements.
              </p>
              <ul className="space-y-4">
                {["ISO 9001:2015 Certified", "Environmental Protection Agency Standards", "International Maritime Organization Compliance", "Strict Anti-Money Laundering (AML) Protocols"].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-200">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
