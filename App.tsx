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
  <section className="py-16 md:py-24 border-y border-slate-100 bg-white/50 overflow-hidden relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-emerald-50/30 blur-[100px] -z-10"></div>
    <div className="max-w-7xl mx-auto px-4">
      <p className="text-center text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-10 md:mb-16">
        Trusted by industry leaders & institutions
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out cursor-default">
        {['HealthLine', 'GlobalCare', 'MedTech', 'WellnessCo', 'BioSync'].map(brand => (
          <span key={brand} className="text-lg md:text-3xl font-black text-slate-900 tracking-tighter whitespace-nowrap">
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
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-0 md:-mt-24 relative z-30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: stat.delay, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="glass-card p-8 md:p-10 rounded-[2.5rem] shadow-xl md:shadow-2xl shadow-emerald-900/5 flex flex-col items-center md:items-start gap-4 border border-white ring-1 ring-slate-100"
          >
            <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner relative">
              {stat.icon}
            </div>
            <div className="text-center md:text-left">
              <p className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none mb-2">{stat.value}</p>
              <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const BentoSection: React.FC = () => {
  return (
    <section className="py-20 md:py-40 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-50/40 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 md:mb-28">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-600 font-black tracking-[0.4em] text-[10px] md:text-xs uppercase mb-4 block"
          >
            Advanced Bio-Systems
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tighter leading-tight"
          >
            Intelligence at every <br className="hidden md:block"/><span className="text-gradient">VitalPoint.</span>
          </motion.h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-semibold text-base md:text-xl leading-relaxed">
            Our multi-layered platform combines advanced sensors with neural processing to deliver healthcare that's always one step ahead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {/* Main Card */}
          <motion.div 
            whileHover={{ scale: 0.995 }}
            className="md:col-span-12 lg:col-span-8 bg-slate-900 rounded-[3rem] p-8 md:p-14 min-h-[450px] md:min-h-[550px] flex flex-col justify-end relative overflow-hidden group shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-[2000ms]" 
              alt="Technology" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
            <div className="relative z-10">
              <div className="bg-emerald-500 px-4 py-1.5 rounded-full text-white text-[10px] font-black w-fit mb-6 tracking-widest shadow-lg shadow-emerald-500/30">CORE PROTOCOL</div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">Precision <br className="hidden md:block"/>Diagnostics</h3>
              <p className="text-slate-300 max-w-lg text-base md:text-lg leading-relaxed font-medium">Our neural network analyzes over 2,000 biometrics in real-time to detect anomalies before they manifest.</p>
            </div>
          </motion.div>
          
          {/* Rating Card */}
          <motion.div 
            whileHover={{ scale: 0.995 }}
            className="md:col-span-6 lg:col-span-4 bg-emerald-50 rounded-[3rem] p-8 md:p-12 flex flex-col gap-8 shadow-xl border border-emerald-100/50 relative overflow-hidden group"
          >
            <div className="bg-white p-5 rounded-2xl w-fit shadow-xl group-hover:rotate-6 transition-transform">
              <Star className="w-10 h-10 text-emerald-500 fill-emerald-500" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight">Top-Rated Platform</h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">Voted #1 for digital health experiences for three consecutive years.</p>
            </div>
            <div className="mt-auto pt-8 border-t border-emerald-200/50 flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i + 15}`} className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover" alt="User" />
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-white bg-emerald-600 flex items-center justify-center text-white text-[10px] font-black shadow-md">+12K</div>
              </div>
            </div>
          </motion.div>

          {/* Security Card */}
          <motion.div 
            whileHover={{ scale: 0.995 }}
            className="md:col-span-6 lg:col-span-5 bg-slate-50 rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-200 flex flex-col"
          >
            <div className="bg-white p-4 rounded-xl w-fit shadow-md mb-8">
              <Shield className="w-8 h-8 text-slate-900" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight">Biometric Vault</h3>
            <p className="text-slate-600 mb-8 leading-relaxed font-medium">Military-grade encryption for your medical data.</p>
            <div className="space-y-3 mt-auto">
              {['Military AES-256', 'HIPAA compliant'].map(tag => (
                <div key={tag} className="flex items-center gap-3 text-xs font-black text-slate-500 uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {tag}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Global Card */}
          <motion.div 
            whileHover={{ scale: 0.995 }}
            className="md:col-span-12 lg:col-span-7 bg-emerald-600 rounded-[3rem] p-8 md:p-14 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden group"
          >
            <div className="relative z-10 max-w-lg text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Global Passport</h3>
              <p className="text-emerald-50 text-base md:text-lg opacity-90 leading-relaxed font-medium">Medical records shared with specialists in 120+ countries.</p>
              <button className="mt-8 px-8 py-3 bg-white text-emerald-700 rounded-full font-black text-xs shadow-xl hover:bg-emerald-50 transition-all uppercase tracking-widest">
                Learn More
              </button>
            </div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-32 px-4 overflow-hidden relative">
      <div className="max-w-6xl mx-auto relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-[2.5rem] md:rounded-[6rem] blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-1000"></div>
        
        <div className="relative bg-slate-900 rounded-[2.5rem] md:rounded-[6rem] p-8 sm:p-12 md:p-20 lg:p-24 overflow-hidden shadow-2xl border border-white/5">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            <div className="text-center lg:text-left">
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 md:mb-10 leading-[1.1] md:leading-[0.9] tracking-tighter">
                Evolve your <br /><span className="text-emerald-400">Wellness.</span>
              </h2>
              <p className="text-slate-400 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-14 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                The world is changing. Your health platform should too. Stop reacting and start optimizing your life today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                <button className="w-full sm:w-auto bg-emerald-500 text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-black text-base md:text-lg lg:text-xl hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-emerald-500/25 uppercase tracking-widest whitespace-nowrap">
                  Start Free Trial
                </button>
                <button className="w-full sm:w-auto bg-white/5 text-white border border-white/10 backdrop-blur-2xl px-8 md:px-12 py-4 md:py-6 rounded-full font-black text-base md:text-lg lg:text-xl hover:bg-white/10 transition-all uppercase tracking-widest whitespace-nowrap">
                  Book Demo
                </button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="aspect-square bg-emerald-500/10 rounded-full absolute -top-10 -right-10 blur-[120px] animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80" 
                className="rounded-[4rem] shadow-2xl relative z-10 border border-white/10 rotate-3 group-hover:rotate-0 transition-all duration-[1000ms] ease-out object-cover" 
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