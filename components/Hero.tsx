
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  // Explicitly typing variants to resolve "ease" string vs literal type inference issues.
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative pt-32 pb-24 lg:pt-56 lg:pb-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-black mb-8 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span className="tracking-[0.1em] uppercase">The Future of Digital Medicine</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-6xl lg:text-[5.5rem] font-[900] text-slate-900 leading-[0.95] mb-8 tracking-tighter">
              Health, <br />
              <span className="text-gradient">Redefined.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-slate-500 mb-12 leading-relaxed max-w-xl font-medium">
              VitalPoint is the first proactive health ecosystem that uses neural biometrics to predict wellness outcomes before you even feel them.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
              <button className="flex items-center justify-center gap-2 bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-slate-900/20 group">
                Reserve Early Access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-50 transition-all active:scale-95">
                Watch Demo
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-16 flex items-center gap-8 border-t border-slate-100 pt-8">
              <div>
                <p className="text-3xl font-black text-slate-900 tracking-tight">12.5k</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Reviews</p>
              </div>
              <div className="h-10 w-[1px] bg-slate-100"></div>
              <div>
                <p className="text-3xl font-black text-slate-900 tracking-tight">4.9/5</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Average Rating</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10">
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white"
              >
                <img 
                  src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=800&q=80" 
                  alt="Doctor with tablet" 
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
              </motion.div>

              {/* Floating Dashboard Card */}
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -right-8 lg:-right-16 glass-card p-6 rounded-[2.5rem] shadow-2xl z-20 border border-white"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-emerald-500 p-3 rounded-2xl shadow-lg shadow-emerald-500/30">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Health Score</p>
                    <p className="text-2xl font-black text-slate-900 tracking-tight">98/100</p>
                  </div>
                </div>
                <div className="flex gap-1 h-1.5 w-32">
                   {[1,2,3,4,5,6].map(i => <div key={i} className={`flex-1 rounded-full ${i < 6 ? 'bg-emerald-500' : 'bg-slate-100'}`}></div>)}
                </div>
              </motion.div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
