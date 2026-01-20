
import React from 'react';

const Footer3: React.FC = () => {
  return (
    <footer className="bg-[#fafafa] py-8 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-6">
          <span className="text-sm font-bold text-slate-900">SR.</span>
          <p className="text-sm text-slate-400">Crafting code with precision.</p>
        </div>

        <div className="flex items-center space-x-8">
          <a href="#" className="text-sm text-slate-600 hover:text-black transition-colors">GitHub</a>
          <a href="#" className="text-sm text-slate-600 hover:text-black transition-colors">LinkedIn</a>
          <a href="#" className="text-sm text-slate-600 hover:text-black transition-colors">Twitter</a>
        </div>

        <div>
          <p className="text-xs text-slate-400">© 2024 Soban Raheel Studio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;
