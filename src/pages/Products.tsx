import React from 'react';
import { motion } from 'motion/react';
import { Droplets, Fuel, Wind, Globe, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const ProductCard = ({ title, id, icon: Icon, specs, description, image }: any) => (
  <div id={id} className="py-24 border-b border-white/5 last:border-0">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className={cn("order-2 lg:order-1")}>
        <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1 mb-6">
          <Icon className="h-4 w-4 text-accent" />
          <span className="text-accent text-xs font-bold uppercase tracking-widest">Premium Grade</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
          {description}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {specs.map((spec: string, i: number) => (
            <div key={i} className="flex items-center space-x-3 text-slate-300">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">{spec}</span>
            </div>
          ))}
        </div>

        <div className="flex space-x-4">
          <Link to="/contact" className="bg-accent hover:bg-accent-hover text-primary px-8 py-4 rounded-full font-bold transition-all">
            Request Pricing
          </Link>
          <button className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all">
            Download Specs
          </button>
        </div>
      </div>
      
      <div className="order-1 lg:order-2">
        <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </div>
);

export const Products = () => {
  const products = [
    {
      id: "crude",
      title: "Crude Oil",
      icon: Droplets,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1000",
      description: "We supply high-quality light and heavy crude oil sourced from reliable global producers. Our crude oil portfolio is designed to meet the specific refining requirements of our international partners.",
      specs: [
        "API Gravity: 30-40",
        "Sulfur Content: < 0.5%",
        "BS&W: < 1.0%",
        "Global Sourcing",
        "FOB / CIF Terms",
        "Spot & Contract Supply"
      ]
    },
    {
      id: "diesel",
      title: "Diesel EN590 (10PPM)",
      icon: Fuel,
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ead?auto=format&fit=crop&q=80&w=1000",
      description: "Our Diesel EN590 is an ultra-low sulfur fuel (10PPM) that meets the highest European and international standards for performance and environmental compliance.",
      specs: [
        "Sulfur: Max 10PPM",
        "Cetane Index: Min 51",
        "Density @ 15°C: 820-845 kg/m³",
        "Flash Point: > 55°C",
        "Euro 5 & 6 Compliant",
        "Bulk Supply Available"
      ]
    },
    {
      id: "jet",
      title: "Jet Fuel (Jet A1)",
      icon: Wind,
      image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1000",
      description: "Premium aviation turbine fuel designed for use in commercial and military aircraft. Our Jet A1 meets AFQRJOS, Def Stan 91-91, and ASTM D1655 specifications.",
      specs: [
        "Freezing Point: Max -47°C",
        "Flash Point: Min 38°C",
        "Specific Gravity: 0.775-0.840",
        "AFQRJOS Compliant",
        "Global Airport Delivery",
        "Strict Quality Control"
      ]
    },
    {
      id: "lpg",
      title: "LPG / LNG",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1000",
      description: "Clean-burning Liquefied Petroleum Gas and Liquefied Natural Gas for industrial, commercial, and domestic energy needs.",
      specs: [
        "High Calorific Value",
        "Low Carbon Emissions",
        "Custom Mix Ratios",
        "Storage & Terminal Access",
        "Safe Logistics Handling",
        "Reliable Supply Chain"
      ]
    }
  ];

  return (
    <div className="bg-primary">
      <section className="py-20 bg-secondary/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Providing high-specification energy products to global markets with guaranteed quality and compliance.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </section>

      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Need a Custom Specification?</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            Our technical team can work with you to source products meeting your specific refinery or industrial requirements.
          </p>
          <Link to="/contact" className="bg-accent text-primary px-10 py-4 rounded-full font-bold inline-flex items-center">
            Consult Our Experts <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};
