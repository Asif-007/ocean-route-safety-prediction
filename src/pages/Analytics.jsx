import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { withLabels } from '../data/mockData';

const Analytics = () => {
  const waterConditionAverages = ['Stable', 'Unstable'].map((condition) => {
    const subset = withLabels.filter((row) => row.WaterConditionLabel === condition);
    const avgTemp = subset.reduce((sum, row) => sum + row.T_degC, 0) / subset.length;
    return { condition, avgTemp: Number(avgTemp.toFixed(2)) };
  });

  const oxygenHistogram = [
    { bucket: '0-2', count: 0 },
    { bucket: '2-4', count: 0 },
    { bucket: '4-6', count: 0 },
    { bucket: '6-8', count: 0 },
    { bucket: '8-10', count: 0 }
  ];

  withLabels.forEach((row) => {
    const val = row.O2ml_L;
    if (val < 2) oxygenHistogram[0].count += 1;
    else if (val < 4) oxygenHistogram[1].count += 1;
    else if (val < 6) oxygenHistogram[2].count += 1;
    else if (val < 8) oxygenHistogram[3].count += 1;
    else oxygenHistogram[4].count += 1;
  });

  const safe = withLabels.filter((row) => row.SafeRoute === 1).length;
  const unsafe = withLabels.length - safe;
  const pieData = [
    { name: 'Safe', value: safe, color: '#22c55e' },
    { name: 'Unsafe', value: unsafe, color: '#ef4444' }
  ];

  return (
    <section className="space-y-6">
      <div className="grid gap-4 xl:grid-cols-3">
        <article className="rounded-2xl border border-white/10 bg-navy/40 p-4 xl:col-span-1">
          <h2 className="mb-4 font-display text-lg">Avg Temperature by WaterCondition</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={waterConditionAverages}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.2)" />
                <XAxis dataKey="condition" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ background: '#112240', border: '1px solid rgba(0,212,255,0.3)' }} />
                <Bar dataKey="avgTemp" fill="#00d4ff" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="rounded-2xl border border-white/10 bg-navy/40 p-4 xl:col-span-1">
          <h2 className="mb-4 font-display text-lg">Oxygen Level Distribution</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={oxygenHistogram}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.2)" />
                <XAxis dataKey="bucket" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ background: '#112240', border: '1px solid rgba(0,212,255,0.3)' }} />
                <Bar dataKey="count" fill="#2dd4bf" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="rounded-2xl border border-white/10 bg-navy/40 p-4 xl:col-span-1">
          <h2 className="mb-4 font-display text-lg">Safe vs Unsafe Percentage</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label>
                  {pieData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: '#112240', border: '1px solid rgba(0,212,255,0.3)' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </article>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-card/60 p-4 text-slate-200">
          <p className="font-display text-base text-accent">Depth and Temperature</p>
          <p className="mt-2 text-sm">Depth up leads to lower temperature, indicating a negative correlation.</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-card/60 p-4 text-slate-200">
          <p className="font-display text-base text-accent">Salinity and Density Index</p>
          <p className="mt-2 text-sm">Higher salinity generally increases density index across records.</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-card/60 p-4 text-slate-200">
          <p className="font-display text-base text-accent">Oxygen and Visibility Risk</p>
          <p className="mt-2 text-sm">Low oxygen values map to higher visibility risk classes.</p>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
