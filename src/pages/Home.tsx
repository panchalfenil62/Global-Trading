import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Globe2, BarChart3, Truck, Droplets, Fuel, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000"
          alt="Oil Refinery"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center space-x-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-accent text-xs font-bold uppercase tracking-widest">Global Energy Partner</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Reliable Global <br />
            <span className="text-accent">Oil Trading</span> Partner
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Empowering global industries with high-quality petroleum products, seamless logistics, and unwavering reliability.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent-hover text-primary px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all group"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/products"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all"
            >
              View Products
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Trust Badges Floating */}
      <div className="absolute bottom-12 right-12 hidden lg:flex space-x-8">
        {[
          { icon: ShieldCheck, label: "ISO Certified" },
          { icon: Globe2, label: "Global Reach" },
          { icon: BarChart3, label: "Market Leader" }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.2 }}
            className="glass-card p-4 rounded-2xl flex items-center space-x-3"
          >
            <item.icon className="h-6 w-6 text-accent" />
            <span className="text-sm font-bold">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const TrustIndicators = () => {
  return (
    <section className="py-12 bg-secondary/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="flex justify-center font-black text-2xl">REFINERY CORP</div>
          <div className="flex justify-center font-black text-2xl">GLOBAL LOGISTICS</div>
          <div className="flex justify-center font-black text-2xl">ENERGY PARTNERS</div>
          <div className="flex justify-center font-black text-2xl">ISO STANDARDS</div>
        </div>
      </div>
    </section>
  );
};

const ProductsSnapshot = () => {
  const products = [
    {
      title: "Crude Oil",
      desc: "High-grade crude oil sourced from premier global fields.",
      icon: Droplets,
      link: "/products#crude"
    },
    {
      title: "Diesel EN590",
      desc: "Ultra-low sulfur diesel meeting international EN590 standards.",
      icon: Fuel,
      link: "/products#diesel"
    },
    {
      title: "Jet Fuel A1",
      desc: "Premium aviation fuel for commercial and industrial use.",
      icon: Wind,
      link: "/products#jet"
    },
    {
      title: "LPG / LNG",
      desc: "Clean energy solutions for industrial and domestic supply.",
      icon: Globe2,
      link: "/products#lpg"
    }
  ];

  return (
    <section className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Our Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Premium Energy Products</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-3xl border border-white/5 hover:border-accent/30 transition-all group"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <product.icon className="h-7 w-7 text-accent group-hover:text-primary transition-colors" />
              </div>
              <h4 className="text-xl font-bold mb-4">{product.title}</h4>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{product.desc}</p>
              <Link to={product.link} className="text-accent font-bold text-sm flex items-center group">
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    { title: "Global Network", desc: "Strategic partnerships across major energy hubs worldwide." },
    { title: "Reliable Supply", desc: "Consistent delivery timelines and volume guarantees." },
    { title: "Quality Assurance", desc: "Rigorous testing and compliance with ISO standards." },
    { title: "Expert Logistics", desc: "Seamless shipping and storage solutions (FOB/CIF)." }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Why Global Trading</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">The Trusted Choice for Energy Procurement</h3>
            <p className="text-slate-400 mb-12 text-lg">
              We combine deep market expertise with a robust logistics network to ensure our clients receive the highest quality products exactly when they need them.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="mt-1 bg-accent/20 p-1 rounded-full">
                    <ShieldCheck className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">{f.title}</h5>
                    <p className="text-slate-400 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000"
                alt="Logistics"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -left-8 glass-card p-8 rounded-3xl shadow-2xl">
              <div className="text-4xl font-bold text-accent mb-1">15+</div>
              <div className="text-sm font-bold text-slate-300">Years Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-accent z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-primary text-4xl md:text-6xl font-bold mb-8">Ready to Secure Your Energy Supply?</h2>
        <p className="text-primary/80 text-xl mb-12 max-w-2xl mx-auto font-medium">
          Partner with Global Trading for reliable, high-quality petroleum products and expert logistics.
        </p>
        <Link
          to="/contact"
          className="bg-primary text-white hover:bg-slate-900 px-12 py-5 rounded-full font-bold text-xl inline-flex items-center transition-all shadow-xl"
        >
          Request a Quote Now
          <ArrowRight className="ml-3 h-6 w-6" />
        </Link>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <ProductsSnapshot />
      <WhyChooseUs />
      <CTASection />
    </>
  );
};
