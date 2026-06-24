import { Anchor, BarChart3, Home, Radar, Table2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Dashboard', icon: Home },
  { to: '/explorer', label: 'Data Explorer', icon: Table2 },
  { to: '/predictor', label: 'Route Predictor', icon: Radar },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 }
];

const Sidebar = () => {
  return (
    <aside className="w-full rounded-3xl border border-accent/20 bg-card/80 p-4 md:w-72">
      <div className="mb-8 flex items-center gap-3 rounded-2xl bg-navy/70 p-3">
        <div className="rounded-xl bg-accent/20 p-2">
          <Anchor className="h-5 w-5 text-accent" />
        </div>
        <div>
          <p className="font-display text-sm text-slate-200">ORSPS</p>
          <p className="text-xs text-slate-400">Marine Intelligence</p>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-300 ${
                isActive
                  ? 'bg-accent/20 text-accent ring-1 ring-accent/40'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`
            }
          >
            <Icon className="h-4 w-4" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
