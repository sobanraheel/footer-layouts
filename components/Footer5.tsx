
import React from 'react';

const Footer5: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 border-b border-slate-800 pb-16">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center">
              <span className="text-indigo-500 mr-2">/</span> Soban Raheel
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Engineering high-scale distributed systems and beautiful user experiences. Committed to the open-source community and technical excellence.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-white">Main Office</p>
              <p className="text-sm text-slate-500">Suite 404, Tech Plaza, Silicon Hub, Global City</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-6">Expertise</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Full-Stack Dev</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Cloud Architecture</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">UI/UX Strategy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Performance Ops</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-6">Explore</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Open Source</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Career Journal</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact Hub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-6">Stay Tuned</h4>
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-sm bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-md text-center transition-colors">
                Follow on GitHub
              </a>
              <a href="#" className="text-sm border border-slate-700 hover:border-indigo-500 px-4 py-2 rounded-md text-center transition-colors">
                Weekly Tech News
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© 2024 Soban Raheel Systems. Built with Next.js & Tailwind CSS.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white underline decoration-indigo-500 underline-offset-4">Legal</a>
            <a href="#" className="hover:text-white underline decoration-indigo-500 underline-offset-4">Privacy</a>
            <a href="#" className="hover:text-white underline decoration-indigo-500 underline-offset-4">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer5;
