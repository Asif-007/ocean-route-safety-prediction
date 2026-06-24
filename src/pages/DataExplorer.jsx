import { useMemo, useState } from 'react';
import SafetyBadge from '../components/SafetyBadge';
import { withLabels } from '../data/mockData';

const ROWS_PER_PAGE = 10;

const DataExplorer = () => {
  const [minDepth, setMinDepth] = useState('');
  const [maxDepth, setMaxDepth] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [page, setPage] = useState(1);

  const filteredData = useMemo(() => {
    const min = minDepth === '' ? -Infinity : Number(minDepth);
    const max = maxDepth === '' ? Infinity : Number(maxDepth);

    return withLabels.filter((row) => {
      const depthMatch = row.Depthm >= min && row.Depthm <= max;
      const statusMatch = statusFilter === 'all' || Number(statusFilter) === row.SafeRoute;
      return depthMatch && statusMatch;
    });
  }, [maxDepth, minDepth, statusFilter]);

  const pageCount = Math.max(1, Math.ceil(filteredData.length / ROWS_PER_PAGE));
  const currentPage = Math.min(page, pageCount);
  const paginated = filteredData.slice((currentPage - 1) * ROWS_PER_PAGE, currentPage * ROWS_PER_PAGE);

  return (
    <section className="space-y-5">
      <div className="grid gap-3 rounded-2xl border border-white/10 bg-navy/40 p-4 md:grid-cols-4">
        <div>
          <label className="mb-1 block text-xs text-slate-300">Min Depth (m)</label>
          <input
            type="number"
            value={minDepth}
            onChange={(e) => {
              setMinDepth(e.target.value);
              setPage(1);
            }}
            className="w-full rounded-lg border border-white/20 bg-card px-3 py-2 text-sm outline-none focus:border-accent"
            placeholder="0"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-300">Max Depth (m)</label>
          <input
            type="number"
            value={maxDepth}
            onChange={(e) => {
              setMaxDepth(e.target.value);
              setPage(1);
            }}
            className="w-full rounded-lg border border-white/20 bg-card px-3 py-2 text-sm outline-none focus:border-accent"
            placeholder="5000"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-300">Safety Status</label>
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setPage(1);
            }}
            className="w-full rounded-lg border border-white/20 bg-card px-3 py-2 text-sm outline-none focus:border-accent"
          >
            <option value="all">All</option>
            <option value="1">Safe</option>
            <option value="0">Unsafe</option>
          </select>
        </div>
        <div className="flex items-end text-xs text-slate-300">
          Showing {filteredData.length} records
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-navy/40">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-card/80 text-xs uppercase tracking-wider text-slate-300">
            <tr>
              <th className="px-3 py-3">Depthm</th>
              <th className="px-3 py-3">T_degC</th>
              <th className="px-3 py-3">Salnty</th>
              <th className="px-3 py-3">O2ml_L</th>
              <th className="px-3 py-3">WaterCondition</th>
              <th className="px-3 py-3">DensityIndex</th>
              <th className="px-3 py-3">VisibilityRisk</th>
              <th className="px-3 py-3">SafeRoute</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((row, idx) => (
              <tr key={`${row.Depthm}-${idx}`} className="border-t border-white/10 text-slate-200">
                <td className="px-3 py-2">{row.Depthm}</td>
                <td className="px-3 py-2">{row.T_degC.toFixed(2)}</td>
                <td className="px-3 py-2">{row.Salnty.toFixed(2)}</td>
                <td className="px-3 py-2">{row.O2ml_L.toFixed(2)}</td>
                <td className="px-3 py-2">{row.WaterConditionLabel}</td>
                <td className="px-3 py-2">{row.DensityIndex.toFixed(2)}</td>
                <td className="px-3 py-2">{row.VisibilityRiskLabel}</td>
                <td className="px-3 py-2">
                  <SafetyBadge value={row.SafeRoute} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between rounded-xl bg-navy/40 px-4 py-3 text-sm text-slate-300">
        <p>
          Page {currentPage} of {pageCount}
        </p>
        <div className="space-x-2">
          <button
            type="button"
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            className="rounded-lg border border-white/20 px-3 py-1.5 disabled:opacity-40"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() => setPage((prev) => Math.min(pageCount, prev + 1))}
            className="rounded-lg border border-accent/50 bg-accent/20 px-3 py-1.5 text-accent disabled:opacity-40"
            disabled={currentPage === pageCount}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default DataExplorer;
