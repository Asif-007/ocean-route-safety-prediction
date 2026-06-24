import { Activity, Database, ShieldAlert, ShieldCheck } from 'lucide-react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis
} from 'recharts';
import StatCard from '../components/StatCard';
import { withLabels } from '../data/mockData';

const Dashboard = () => {
  const total = withLabels.length;
  const safeCount = withLabels.filter((item) => item.SafeRoute === 1).length;
  const unsafeCount = total - safeCount;
  const avgDepth = withLabels.reduce((sum, row) => sum + row.Depthm, 0) / total;

  const safeData = withLabels.filter((item) => item.SafeRoute === 1);
  const unsafeData = withLabels.filter((item) => item.SafeRoute === 0);

  return (
    <section className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total Records Analyzed" value={total} subtext="Ocean sensor records" icon={Database} />
        <StatCard
          title="Safe Routes (%)"
          value={`${((safeCount / total) * 100).toFixed(1)}%`}
          subtext={`${safeCount} routes classified safe`}
          icon={ShieldCheck}
        />
        <StatCard
          title="Unsafe Routes (%)"
          value={`${((unsafeCount / total) * 100).toFixed(1)}%`}
          subtext={`${unsafeCount} routes classified unsafe`}
          icon={ShieldAlert}
        />
        <StatCard
          title="Average Ocean Depth (m)"
          value={avgDepth.toFixed(1)}
          subtext="Mean depth from sample data"
          icon={Activity}
        />
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-navy/40 p-4">
          <h2 className="mb-4 font-display text-lg text-slate-100">Temperature vs Depth</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={withLabels}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.2)" />
                <XAxis dataKey="Depthm" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ background: '#112240', border: '1px solid rgba(0,212,255,0.3)' }} />
                <Line type="monotone" dataKey="T_degC" stroke="#00d4ff" strokeWidth={3} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="rounded-2xl border border-white/10 bg-navy/40 p-4">
          <h2 className="mb-4 font-display text-lg text-slate-100">Salinity vs Oxygen (SafeRoute Color-Coded)</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.2)" />
                <XAxis dataKey="Salnty" name="Salinity" stroke="#94a3b8" />
                <YAxis dataKey="O2ml_L" name="Oxygen" stroke="#94a3b8" />
                <ZAxis range={[60]} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ background: '#112240', border: '1px solid rgba(0,212,255,0.3)' }} />
                <Scatter name="Safe" data={safeData} fill="#22c55e" />
                <Scatter name="Unsafe" data={unsafeData} fill="#ef4444" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Dashboard;
