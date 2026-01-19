import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AIChat from './components/AIChat';
import Footer from './components/Footer';
import { Heart, Shield, Zap, Star, CheckCircle2 } from 'lucide-react';

const ProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-[60]"
      style={{ scaleX }}
    />
  );
};

const TrustSection: React.FC = () => (
  <section className="py-12 border-y border-slate-100 bg-white/50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <p className="text-center text-slate-400 text-sm font-bold uppercase tracking-[0.2em] mb-8">
        Trusted by leading healthcare providers
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-50">
        {['HealthLine', 'GlobalCare', 'MedTech', 'WellnessCo', 'BioSync'].map(brand => (
          <span key={brand} className="text-xl font-bold text-slate-900 tracking-tight">{brand}</span>
        ))}
      </div>
    </div>
  </section>
);

const StatsSection: React.FC = () => {
  const stats = [
    { label: 'Active Users', value: '50,000+', icon: <Heart className="text-rose-500" />, delay: 0.1 },
    { label: 'Medical Specialists', value: '450+', icon: <Zap className="text-amber-500" />, delay: 0.2 },
    { label: 'Platform Uptime', value: '99.9%', icon: <Shield className="text-emerald-500" />, delay: 0.3 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 -mt-20 relative z-30">
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: stat.delay }}
            whileHover={{ y: -5 }}
            className="glass-card p-8 rounded-[2rem] shadow-2xl shadow-emerald-900/5 flex flex-col gap-4 border border-white"
          >
            <div className="bg-emerald-50 w-12 h-12 rounded-2xl flex items-center justify-center">
              {stat.icon}
            </div>
            <div>
              <p className="text-3xl font-extrabold text-slate-900 tracking-tight">{stat.value}</p>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const BentoSection: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-600 font-extrabold tracking-widest text-xs uppercase mb-4 block"
          >
            Predictive Wellness
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Intelligence at every <span className="text-gradient">VitalPoint.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto lg:h-[600px]">
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-2 bg-slate-900 rounded-[3rem] p-10 flex flex-col justify-end relative overflow-hidden group shadow-2xl"
          >
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" alt="Tech" />
            <div className="relative z-10">
              <div className="bg-emerald-500 px-4 py-1 rounded-full text-white text-xs font-bold w-fit mb-4">NEW</div>
              <h3 className="text-3xl font-bold text-white mb-4">Precision Diagnostics</h3>
              <p className="text-slate-300 max-w-md">Our neural network analyzes over 2,000 biometrics in real-time to detect anomalies before they become symptoms.</p>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="bg-emerald-50 rounded-[3rem] p-10 flex flex-col gap-6 shadow-xl border border-emerald-100/50"
          >
            <div className="bg-white p-4 rounded-3xl w-fit shadow-lg">
              <Star className="w-8 h-8 text-emerald-500 fill-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Top-Rated Care</h3>
            <p className="text-slate-600">Rated #1 for digital health experiences for three consecutive years by HealthTech Review.</p>
            <div className="mt-auto pt-6 border-t border-emerald-200/50">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-12 h-12 rounded-full border-4 border-white shadow-md" alt="User" />
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-emerald-600 flex items-center justify-center text-white text-xs font-bold shadow-md">+12k</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="bg-slate-50 rounded-[3rem] p-10 md:col-span-1 shadow-xl border border-slate-200"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Biometric Security</h3>
            <p className="text-slate-600 mb-8">Zero-knowledge encryption ensures that only you and your physician can ever access your data.</p>
            <div className="flex flex-col gap-3">
              {['AES-256 Encryption', 'HIPAA Compliant', 'ISO 27001'].map(tag => (
                <div key={tag} className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {tag}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-2 bg-emerald-600 rounded-[3rem] p-10 text-white flex items-center justify-between shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10 max-w-lg">
              <h3 className="text-3xl font-bold mb-4">Global Health Passport</h3>
              <p className="text-emerald-50 opacity-90">Seamlessly share your medical records with specialists in over 120 countries, instantly translated and verified.</p>
            </div>
            <div className="hidden lg:block relative z-10">
               <div className="w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CTASection: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-[4rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
        <div className="relative bg-slate-900 rounded-[4rem] p-10 lg:p-24 overflow-hidden shadow-2xl">
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
                Healthcare that <br /><span className="text-emerald-400">evolves</span> with you.
              </h2>
              <p className="text-slate-400 text-xl mb-12 leading-relaxed">
                Stop reactive medicine. Join the platform designed for life-long health optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-emerald-500/25">
                  Start Free Trial
                </button>
                <button className="bg-white/10 text-white backdrop-blur-md px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                  Contact Sales
                </button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-square bg-emerald-500/20 rounded-full absolute -top-10 -right-10 blur-3xl animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80" 
                className="rounded-[3rem] shadow-2xl relative z-10 border border-white/10 rotate-2 hover:rotate-0 transition-all duration-700" 
                alt="Mobile Dashboard" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      <ProgressBar />
      <Navbar />
      <Hero />
      <TrustSection />
      <StatsSection />
      <BentoSection />
      <Features />
      <CTASection />
      <AIChat />
      <Footer />
    </div>
  );
};

export default App;