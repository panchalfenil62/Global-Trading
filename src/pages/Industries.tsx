import React from 'react';
import { Plane, Truck, Factory, Building2, ShieldCheck, Zap } from 'lucide-react';

export const Industries = () => {
  const industries = [
    {
      title: "Aviation",
      icon: Plane,
      desc: "Supplying high-grade Jet A1 fuel to commercial airlines and private aviation hubs globally.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109c055?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Transportation",
      icon: Truck,
      desc: "Powering logistics fleets and public transport networks with premium Diesel EN590.",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Manufacturing",
      icon: Factory,
      desc: "Providing essential energy resources for industrial production and heavy machinery.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Infrastructure",
      icon: Building2,
      desc: "Supporting government projects and urban development with reliable bitumen and fuel supply.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Power Generation",
      icon: Zap,
      desc: "Fueling power plants and emergency backup systems for critical infrastructure.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "International Trade",
      icon: ShieldCheck,
      desc: "Partnering with global distributors and import/export firms for bulk energy commodities.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="bg-primary">
      <section className="py-20 bg-secondary/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Providing tailored energy solutions across diverse sectors to power global economic growth.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden h-96 shadow-2xl">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="bg-accent text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <industry.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{industry.title}</h3>
                  <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {industry.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
