
import React from 'react';
import { FEATURES, ICON_MAP } from '../constants';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Core Benefits</h2>
          <p className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
            Everything you need to thrive.
          </p>
          <p className="text-lg text-slate-600">
            We've reimagined wellness from the ground up, combining holistic practices with cutting-edge medical technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group"
            >
              <div className="bg-white p-4 rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform mb-6">
                {ICON_MAP[feature.icon]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
