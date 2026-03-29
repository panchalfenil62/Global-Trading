import React from 'react';
import { motion } from 'motion/react';
import { Ship, Truck, Warehouse, Map, Anchor, ShieldCheck } from 'lucide-react';

export const Logistics = () => {
  return (
    <div className="bg-primary">
      <section className="py-20 bg-secondary/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Logistics & Supply Chain</h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Optimized global delivery networks ensuring safe, timely, and efficient transport of energy resources.
          </p>
        </div>
      </section>

      {/* Shipping Methods */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Our Capabilities</h2>
            <h3 className="text-4xl font-bold">Global Transport Solutions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Maritime Shipping",
                desc: "Full-scale tanker operations (VLCC, Suezmax, Aframax) for global crude and product transport.",
                icon: Ship,
                image: "https://images.unsplash.com/photo-1494412574743-019485b782df?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Storage & Terminals",
                desc: "Strategic access to major storage hubs and port terminals for efficient inventory management.",
                icon: Warehouse,
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Inland Distribution",
                desc: "Robust pipeline and road transport networks for regional delivery to refineries and distributors.",
                icon: Truck,
                image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800"
              }
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-3xl overflow-hidden border border-white/5 group">
                <div className="h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Terms */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Trade Terms</h2>
              <h3 className="text-4xl font-bold mb-8">Flexible Delivery Options</h3>
              <div className="space-y-6">
                {[
                  { title: "FOB (Free On Board)", desc: "We handle delivery to the port of origin and loading onto the vessel." },
                  { title: "CIF (Cost, Insurance, and Freight)", desc: "We manage the entire transport process to your destination port." },
                  { title: "TTO / TTT", desc: "Tanker Take Over and Tanker to Tanker transfer options available." }
                ].map((term, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="mt-1">
                      <ShieldCheck className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-1">{term.title}</h5>
                      <p className="text-slate-400 text-sm">{term.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-accent/10 p-12 rounded-3xl border border-accent/20">
                <Map className="h-full w-full text-accent opacity-20 absolute inset-0 p-20" />
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-6">Global Supply Network</h4>
                  <p className="text-slate-300 mb-8">
                    Our logistics network covers major trade routes across the Atlantic, Pacific, and Indian Oceans, connecting producers in the Middle East, Africa, and the Americas with consumers in Europe and Asia.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/50 p-4 rounded-xl border border-white/5">
                      <div className="text-accent font-bold">50+</div>
                      <div className="text-xs text-slate-400">Ports Served</div>
                    </div>
                    <div className="bg-primary/50 p-4 rounded-xl border border-white/5">
                      <div className="text-accent font-bold">24/7</div>
                      <div className="text-xs text-slate-400">Monitoring</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
