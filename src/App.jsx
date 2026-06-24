import { Anchor } from 'lucide-react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Analytics from './pages/Analytics';
import Dashboard from './pages/Dashboard';
import DataExplorer from './pages/DataExplorer';
import RoutePredictor from './pages/RoutePredictor';

const App = () => {
  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute -top-24 left-0 h-80 w-80 animate-drift rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 animate-drift rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-[1500px] flex-col gap-5 p-4 md:flex-row md:p-6">
        <Sidebar />

        <main className="min-h-[85vh] flex-1 rounded-3xl border border-accent/15 bg-card/60 p-5 shadow-glow backdrop-blur-sm animate-rise md:p-7">
          <header className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-accent/20 p-2">
                <Anchor className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h1 className="font-display text-xl text-white md:text-2xl">Ocean Route Safety Prediction</h1>
                <p className="text-sm text-slate-300">Data Engineering Dashboard</p>
              </div>
            </div>
          </header>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/explorer" element={<DataExplorer />} />
            <Route path="/predictor" element={<RoutePredictor />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
