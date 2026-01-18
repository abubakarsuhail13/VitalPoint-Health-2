
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AIChat from './components/AIChat';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { Heart, Shield, Zap } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    { label: 'Active Users', value: '50k+', icon: <Heart className="text-rose-500" /> },
    { label: 'Specialists', value: '450+', icon: <Zap className="text-amber-500" /> },
    { label: 'Satisfaction', value: '99.9%', icon: <Shield className="text-emerald-500" /> },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-30">
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 rounded-3xl shadow-xl flex items-center gap-6 border border-emerald-50/50"
          >
            <div className="bg-white p-3 rounded-2xl shadow-sm">
              {stat.icon}
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900">{stat.value}</p>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-8 lg:p-20 relative">
        <div className="relative z-10 text-center lg:text-left grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to take control of your health?
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Join thousands of others who have transformed their lives with VitalPoint's intelligent wellness system.
            </p>
            <button className="bg-emerald-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20">
              Get Started Now
            </button>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/healthapp/600/400" 
                alt="App Preview" 
                className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
                <p className="text-slate-900 font-bold">New Report Available</p>
                <p className="text-slate-500 text-xs">Biometrics Updated</p>
              </div>
            </div>
          </div>
        </div>
        {/* Background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsSection />
      <Features />
      
      {/* Visual Break */}
      <section className="py-24 bg-emerald-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-square bg-white rounded-[4rem] shadow-inner flex items-center justify-center p-8">
                  <img src="https://picsum.photos/seed/doc/600/600" className="rounded-[3rem] shadow-2xl" alt="Medical Technology" />
                </div>
                {/* Floating tags */}
                <div className="absolute -top-6 -right-6 bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-xl font-bold">
                  AI Integration
                </div>
                <div className="absolute bottom-10 -left-10 bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-xl font-bold">
                  99% Accuracy
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                Healthcare that <br /> 
                <span className="text-emerald-600">thinks like you.</span>
              </h2>
              <div className="space-y-8">
                {[
                  { title: "Intelligent Triage", desc: "Our AI systems quickly categorize and prioritize your health needs." },
                  { title: "Personalized Roadmap", desc: "Get a custom health plan that adapts to your daily progress." },
                  { title: "Direct Lab Integration", desc: "View results and expert interpretations within minutes." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md text-emerald-600 font-bold text-lg">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <AIChat />
      <Footer />
    </div>
  );
};

export default App;
