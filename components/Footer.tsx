import React from 'react';
import { Heart, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-emerald-500 p-2.5 rounded-xl shadow-lg shadow-emerald-500/20">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="text-2xl font-black tracking-tight">VitalPoint</span>
            </div>
            <p className="text-slate-400 max-w-xs mb-8 leading-relaxed">
              Leading the transition from reactive care to proactive personal wellness through AI and human-centric design.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-slate-800/50 border border-white/5 rounded-xl hover:bg-emerald-600 transition-all hover:scale-110"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-slate-800/50 border border-white/5 rounded-xl hover:bg-emerald-600 transition-all hover:scale-110"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-slate-800/50 border border-white/5 rounded-xl hover:bg-emerald-600 transition-all hover:scale-110"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-slate-800/50 border border-white/5 rounded-xl hover:bg-emerald-600 transition-all hover:scale-110"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-100 mb-6 uppercase tracking-wider text-xs">Platform</h4>
            <ul className="space-y-4 text-slate-400 font-medium text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Our Approach</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Mobile App</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Integration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-100 mb-6 uppercase tracking-wider text-xs">Ecosystem</h4>
            <ul className="space-y-4 text-slate-400 font-medium text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Doctors</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Diagnostics</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Pharmacies</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Enterprise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-100 mb-6 uppercase tracking-wider text-xs">Legal</h4>
            <ul className="space-y-4 text-slate-400 font-medium text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">HIPAA Compliance</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Trust Center</a></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-bold text-slate-100 mb-6 uppercase tracking-wider text-xs">Newsletter</h4>
            <p className="text-slate-400 text-xs mb-4">Wellness insights delivered weekly.</p>
            <div className="flex bg-slate-800/50 p-1 rounded-2xl border border-white/5">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-transparent border-none px-4 py-2 text-xs w-full focus:outline-none"
              />
              <button className="bg-emerald-600 px-4 py-2 rounded-xl font-bold text-xs hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/20">OK</button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-sm font-medium">© {new Date().getFullYear()} VitalPoint Health Inc. Empowering humans through data.</p>
          
          <div className="flex flex-col items-center md:items-end group">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-slate-400 text-sm font-bold tracking-tight">Powered by</span>
              <a 
                href="https://www.nexaforgetech.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-emerald-500 hover:text-emerald-400 transition-all font-black text-sm tracking-tighter decoration-2"
              >
                Nexaforge Technologies
              </a>
            </div>
            <a 
              href="https://www.nexaforgetech.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[10px] text-slate-500 font-black tracking-[0.2em] hover:text-emerald-400 transition-colors uppercase"
            >
              www.nexaforgetech.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;