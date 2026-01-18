
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              SMART HEALTH PLATFORM
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              Your Health, <br />
              <span className="text-emerald-600">Perfected.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              Experience a new era of proactive healthcare. VitalPoint combines advanced AI diagnostics with world-class medical expertise to optimize your life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl active:scale-95 group">
                Join VitalPoint
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all active:scale-95">
                <div className="bg-emerald-100 p-1.5 rounded-full">
                  <Play className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                </div>
                How it works
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2 text-slate-500 font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                No hidden fees
              </div>
              <div className="flex items-center gap-2 text-slate-500 font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                24/7 Specialist Access
              </div>
              <div className="flex items-center gap-2 text-slate-500 font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                HIPAA Compliant
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl animate-float">
              <img 
                src="https://picsum.photos/seed/health1/800/1000" 
                alt="Healthcare Professional" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
            </div>
            
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass-card p-6 rounded-2xl shadow-xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Vitals Status</p>
                  <p className="text-lg font-bold text-slate-900">Optimal</p>
                </div>
              </div>
              <div className="h-2 w-32 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-blue-500 rounded-full"></div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 glass-card p-6 rounded-2xl shadow-xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/user${i}/40/40`} className="w-10 h-10 rounded-full border-2 border-white" alt="Doctor" />
                  ))}
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Specialists Online</p>
                  <p className="text-sm font-bold text-slate-900">+48 experts</p>
                </div>
              </div>
            </motion.div>

            {/* Background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-400 rounded-full blur-[120px] opacity-30 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
