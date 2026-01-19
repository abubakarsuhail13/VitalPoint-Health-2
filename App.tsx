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
  <section className="py-20 md:py-28 border-y border-slate-100 bg-white/50 overflow-hidden relative">
    {/* Subtle Background Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-emerald-50/30 blur-[100px] -z-10"></div>
    
    <div className="max-w-7xl mx-auto px-4">
      <p className="text-center text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-12 md:mb-16">
        Trusted by industry leaders & institutions
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out cursor-default">
        {['HealthLine', 'GlobalCare', 'MedTech', 'WellnessCo', 'BioSync'].map(brand => (
          <span key={brand} className="text-xl md:text-4xl font-black text-slate-900 tracking-tighter whitespace-nowrap">
            {brand}
          </span>
        ))}
      </div>
    </div>
  </section>
);

const StatsSection: React.FC = () => {
  const stats = [
    { label: 'Active Users', value: '50,000+', icon: <Heart className="text-rose-500 w-6 h-6" />, delay: 0.1 },
    { label: 'Specialists', value: '450+', icon: <Zap className="text-amber-500 w-6 h-6" />, delay: 0.2 },
    { label: 'Uptime', value: '99.9%', icon: <Shield className="text-emerald-500 w-6 h-6" />, delay: 0.3 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-0 md:-mt-24 relative z-30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: stat.delay, ease: "easeOut" }}
            whileHover={{ y: -12, scale: 1.02 }}
            className="glass-card p-10 md:p-12 rounded-[3rem] shadow-2xl shadow-emerald-900/5 flex flex-col items-center md:items-start gap-5 border border-white ring-1 ring-slate-100"
          >
            <div className="bg-emerald-50 w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-inner relative group-hover:bg-emerald-100 transition-colors">
              <div className="absolute inset-0 bg-emerald-200/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {stat.icon}
            </div>
            <div className="text-center md:text-left">
              <p className="text-5xl font-black text-slate-900 tracking-tight leading-none mb-2">{stat.value}</p>
              <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const BentoSection: React.FC = () => {
  return (
    <section className="py-24 md:py-48 bg-white overflow-hidden relative">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-emerald-50/40 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20 md:mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-600 font-black tracking-[0.4em] text-[10px] md:text-xs uppercase mb-6 block"
          >
            Advanced Bio-Systems
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9] md:leading-[0.95]"
          >
            Intelligence at every <br className="hidden md:block"/><span className="text-gradient">VitalPoint.</span>
          </motion.h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-semibold text-lg md:text-xl leading-relaxed">
            Our multi-layered platform combines advanced sensors with neural processing to deliver healthcare that's always one step ahead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-min">
          {/* Main Card */}
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-12 lg:col-span-8 bg-slate-900 rounded-[4rem] p-10 md:p-16 min-h-[500px] md:min-h-[600px] flex flex-col justify-end relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)]"
          >
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-[2000ms] ease-out" 
              alt="Technology" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            <div className="relative z-10">
              <div className="bg-emerald-500 px-5 py-2 rounded-full text-white text-[11px] font-black w-fit mb-8 tracking-[0.2em] shadow-xl shadow-emerald-500/40">CORE PROTOCOL</div>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">Precision <br className="hidden md:block"/>Diagnostics</h3>
              <p className="text-slate-300 max-w-lg text-lg md:text-xl leading-relaxed font-medium">Our neural network analyzes over 2,000 biometrics in real-time to detect anomalies before they manifest as physical symptoms.</p>
            </div>
          </motion.div>
          
          {/* Rating Card */}
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-6 lg:col-span-4 bg-emerald-50 rounded-[4rem] p-10 md:p-14 flex flex-col gap-10 shadow-xl border border-emerald-100/50 relative overflow-hidden group"
          >
            <div className="bg-white p-6 rounded-[2rem] w-fit shadow-2xl shadow-emerald-900/10 group-hover:rotate-12 transition-transform duration-500">
              <Star className="w-12 h-12 text-emerald-500 fill-emerald-500" />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">Top-Rated Platform</h3>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">Voted #1 for digital health experiences for three consecutive years by HealthTech Review.</p>
            </div>
            <div className="mt-auto pt-10 border-t border-emerald-200/50">
              <div className="flex items-center gap-5">
                <div className="flex -space-x-5">
                  {[1, 2, 3, 4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i + 15}`} className="w-14 h-14 rounded-full border-4 border-white shadow-xl object-cover" alt="User" />
                  ))}
                  <div className="w-14 h-14 rounded-full border-4 border-white bg-emerald-600 flex items-center justify-center text-white text-[10px] font-black shadow-xl tracking-tighter">+12K</div>
                </div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest leading-tight">Verified <br/>Reviews</p>
              </div>
            </div>
          </motion.div>

          {/* Security Card */}
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-6 lg:col-span-5 bg-slate-50 rounded-[4rem] p-10 md:p-16 shadow-xl border border-slate-200 flex flex-col"
          >
            <div className="bg-white p-5 rounded-[1.5rem] w-fit shadow-xl mb-10">
              <Shield className="w-10 h-10 text-slate-900" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Biometric Vault</h3>
            <p className="text-slate-600 mb-10 leading-relaxed text-lg font-medium">Zero-knowledge encryption ensures that only you and your verified physician can ever access your data.</p>
            <div className="space-y-4 mt-auto">
              {['Military AES-256', 'HIPAA compliant', 'ISO 27001 Certified'].map(tag => (
                <div key={tag} className="flex items-center gap-4 text-sm font-black text-slate-500 uppercase tracking-widest">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Global Card */}
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-12 lg:col-span-7 bg-emerald-600 rounded-[4rem] p-10 md:p-16 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden group"
          >
            <div className="relative z-10 max-w-lg text-center md:text-left">
              <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">Global Passport</h3>
              <p className="text-emerald-50 text-xl opacity-90 leading-relaxed font-medium">Seamlessly share your medical records with specialists in over 120 countries, instantly translated and verified.</p>
              <button className="mt-10 px-10 py-4 bg-white text-emerald-700 rounded-full font-black text-sm shadow-2xl shadow-black/20 hover:bg-emerald-50 transition-all hover:scale-105 active:scale-95 uppercase tracking-widest">
                Get Passport
              </button>
            </div>
            <div className="hidden xl:block relative z-10">
               <div className="w-56 h-56 bg-white/20 rounded-full blur-[80px] animate-pulse"></div>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CTASection: React.FC = () => {
  return (
    <section className="py-24 px-4 overflow-hidden relative">
      <div className="max-w-6xl mx-auto relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-[4rem] md:rounded-[6rem] blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-1000"></div>
        <div className="relative bg-slate-900 rounded-[4rem] md:rounded-[6rem] p-12 md:p-24 overflow-hidden shadow-[0_50px_100px_-15px_rgba(0,0,0,0.5)] border border-white/5">
          <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl md:text-8xl font-black text-white mb-10 leading-[0.9] tracking-tighter">
                Evolve your <br /><span className="text-emerald-400">Wellness.</span>
              </h2>
              <p className="text-slate-400 text-xl md:text-2xl mb-14 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                The world is changing. Your health platform should too. Stop reacting and start optimizing your life.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
                <button className="bg-emerald-500 text-white px-12 py-7 rounded-full font-black text-xl hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(16,185,129,0.3)] uppercase tracking-widest">
                  Start Free Trial
                </button>
                <button className="bg-white/5 text-white border border-white/10 backdrop-blur-2xl px-12 py-7 rounded-full font-black text-xl hover:bg-white/10 transition-all uppercase tracking-widest">
                  Book Demo
                </button>
              </div>
            </div>
            <div className="relative hidden lg:block group">
              <div className="aspect-square bg-emerald-500/10 rounded-full absolute -top-10 -right-10 blur-[150px] animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80" 
                className="rounded-[5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative z-10 border border-white/10 rotate-3 group-hover:rotate-0 transition-all duration-[1500ms] ease-out object-cover" 
                alt="Interface Preview" 
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
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900 relative overflow-x-hidden bg-[#fdfdfd]">
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