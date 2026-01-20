
import React from 'react';

const Footer2: React.FC = () => {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/20 blur-[100px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tighter">
          Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">legendary.</span>
        </h2>
        
        <nav className="flex flex-wrap justify-center gap-8 mb-12">
          <a href="#" className="text-slate-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">Work</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">Services</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">Blog</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">Contact</a>
        </nav>

        <div className="flex justify-center gap-4 mb-12">
          {['LinkedIn', 'Dribbble', 'GitHub', 'Behance'].map((social) => (
            <a 
              key={social} 
              href="#" 
              className="px-6 py-2 border border-slate-700 rounded-full text-slate-400 hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300 font-medium text-sm"
            >
              {social}
            </a>
          ))}
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">© 2024 Soban Raheel Digital Architecture</p>
          <div className="flex gap-6 text-slate-500 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
