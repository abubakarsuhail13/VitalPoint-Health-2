
import React from 'react';
import { Heart, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-emerald-500 p-2 rounded-xl">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">VitalPoint</span>
            </div>
            <p className="text-slate-400 max-w-xs mb-8">
              Pioneering the future of personal wellness through technology and empathy.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-emerald-600 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-emerald-600 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-emerald-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-emerald-600 transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-emerald-400">About</a></li>
              <li><a href="#" className="hover:text-emerald-400">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-400">Mobile App</a></li>
              <li><a href="#" className="hover:text-emerald-400">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-emerald-400">Telehealth</a></li>
              <li><a href="#" className="hover:text-emerald-400">Diagnostics</a></li>
              <li><a href="#" className="hover:text-emerald-400">Mental Health</a></li>
              <li><a href="#" className="hover:text-emerald-400">Pharmacy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Help</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-emerald-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-emerald-400">FAQ</a></li>
              <li><a href="#" className="hover:text-emerald-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400">Terms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Stay Healthy</h4>
            <p className="text-slate-400 text-sm mb-4">Get the latest wellness insights directly to your inbox.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-slate-800 border-none rounded-l-xl px-4 py-2 w-full focus:ring-1 focus:ring-emerald-500"
              />
              <button className="bg-emerald-600 px-4 py-2 rounded-r-xl font-bold">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} VitalPoint Health Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
