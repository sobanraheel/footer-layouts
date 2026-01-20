
import React from 'react';

const Footer4: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 px-6 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Main Info */}
          <div className="lg:col-span-4">
            <h3 className="text-xl font-bold mb-4 text-slate-900">Soban Raheel</h3>
            <p className="text-slate-500 mb-6 text-sm leading-relaxed">
              Stay ahead of the curve. Subscribe to our technical newsletter for the latest insights in web development and cloud engineering.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="you@email.com" 
                className="bg-white border border-slate-200 px-4 py-2.5 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
                Join
              </button>
            </form>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><a href="#" className="hover:text-blue-600">Features</a></li>
                <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-600">Changelog</a></li>
                <li><a href="#" className="hover:text-blue-600">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><a href="#" className="hover:text-blue-600">About</a></li>
                <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact</a></li>
                <li><a href="#" className="hover:text-blue-600">Partners</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><a href="#" className="hover:text-blue-600">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-600">Terms</a></li>
                <li><a href="#" className="hover:text-blue-600">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-blue-600">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Support</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-600">Community</a></li>
                <li><a href="#" className="hover:text-blue-600">Status</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 font-medium">© 2024 SR Labs International.</p>
          <div className="flex gap-4">
             {/* Simple rounded icons (mock) */}
             <div className="w-6 h-6 rounded bg-slate-200"></div>
             <div className="w-6 h-6 rounded bg-slate-200"></div>
             <div className="w-6 h-6 rounded bg-slate-200"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer4;
