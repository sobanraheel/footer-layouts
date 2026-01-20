
import React, { useState } from 'react';
import Footer1 from './components/Footer1';
import Footer2 from './components/Footer2';
import Footer3 from './components/Footer3';
import Footer4 from './components/Footer4';
import Footer5 from './components/Footer5';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const footers = [
    { name: "Modern Corporate", component: <Footer1 /> },
    { name: "Creative Gradient", component: <Footer2 /> },
    { name: "Clean Minimalist", component: <Footer3 /> },
    { name: "SaaS & Newsletter", component: <Footer4 /> },
    { name: "Dark Tech Professional", component: <Footer5 /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Navigation for the showcase */}
      <div className="bg-white border-b sticky top-0 z-50 px-4 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Soban Raheel <span className="text-blue-600">Footer Gallery</span>
          </h1>
          <div className="flex flex-wrap gap-2">
            {footers.map((f, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  activeTab === idx
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Layout {idx + 1}: {f.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 space-y-12">
        <div className="text-center max-w-2xl mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
            Footer {activeTab + 1}: {footers[activeTab].name}
          </h2>
          <p className="text-slate-500">
            Previewing the responsive layout below. All footers are built using Tailwind utility classes and are fully optimized for mobile, tablet, and desktop views.
          </p>
        </div>

        {/* Selected Footer Preview Container */}
        <div className="w-full border rounded-xl shadow-2xl overflow-hidden bg-white">
          <div className="bg-slate-50 border-b p-4 text-xs font-mono text-slate-400 flex justify-between items-center">
            <span>PREVIEW_WINDOW</span>
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
          </div>
          <div className="w-full">
            {footers[activeTab].component}
          </div>
        </div>

        {/* Option to see all footers stacked */}
        <div className="pt-12 w-full max-w-7xl mx-auto space-y-24">
          <div className="border-t pt-12 text-center">
            <h3 className="text-xl font-semibold text-slate-400 uppercase tracking-widest mb-12">All Layouts Stacked</h3>
            {footers.map((f, idx) => (
              <div key={idx} className="mb-24 last:mb-0 border-b pb-24 last:border-0 last:pb-0">
                 <h4 className="text-sm font-mono text-slate-400 mb-6 uppercase">Layout {idx + 1}</h4>
                 <div className="rounded-lg shadow-lg overflow-hidden border">
                    {f.component}
                 </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
