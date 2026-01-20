
import React from 'react';

const Footer1: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-slate-900">Soban Raheel</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            Leading the way in innovative digital solutions and high-end software architecture. Building the future, one line of code at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-slate-900 mb-4">Platform</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Overview</a></li>
            <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Features</a></li>
            <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Solutions</a></li>
            <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Integrations</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-slate-900 mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Documentation</a></li>
            <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">API Reference</a></li>
            <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Community</a></li>
            <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Support Center</a></li>
          </ul>
        </div>

        {/* Social & Legal */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-all">
                <span className="text-xs">Li</span>
              </a>
              <a href="#" className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-all">
                <span className="text-xs">Tw</span>
              </a>
              <a href="#" className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-all">
                <span className="text-xs">Gh</span>
              </a>
            </div>
          </div>
          <div className="pt-4 border-t border-slate-100">
            <p className="text-xs text-slate-400">© 2024 Soban Raheel. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
