import { useMemo, useState } from 'react';

const RoutePredictor = () => {
  const [form, setForm] = useState({
    Depthm: 1200,
    T_degC: 8,
    Salnty: 34.5,
    O2ml_L: 3.5
  });
  const [checked, setChecked] = useState(false);

  const indicators = useMemo(() => {
    const WaterCondition = form.T_degC > 5 && form.O2ml_L > 3 ? 'Stable' : 'Unstable';
    const DensityIndex = form.Salnty * 0.8 - form.T_degC * 0.3;
    const VisibilityRisk = form.T_degC < 5 || form.O2ml_L < 2 ? 'High' : 'Low';

    const safe =
      form.Depthm < 3000 &&
      form.T_degC >= 2 &&
      form.T_degC <= 25 &&
      form.Salnty >= 33 &&
      form.Salnty <= 37 &&
      form.O2ml_L > 2;

    return {
      WaterCondition,
      DensityIndex,
      VisibilityRisk,
      safe
    };
  }, [form]);

  const InputRow = ({ name, label, min, max, step = 0.1 }) => (
    <div className="space-y-2 rounded-xl border border-white/10 bg-navy/40 p-3">
      <div className="flex items-center justify-between text-sm">
        <label htmlFor={name} className="text-slate-200">
          {label}
        </label>
        <input
          id={name}
          type="number"
          min={min}
          max={max}
          step={step}
          value={form[name]}
          onChange={(e) => setForm((prev) => ({ ...prev, [name]: Number(e.target.value) }))}
          className="w-24 rounded-md border border-white/20 bg-card px-2 py-1 text-right text-slate-100"
        />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={form[name]}
        onChange={(e) => setForm((prev) => ({ ...prev, [name]: Number(e.target.value) }))}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-slate-400">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );

  return (
    <section className="grid gap-5 xl:grid-cols-2">
      <article className="rounded-2xl border border-white/10 bg-card/50 p-4">
        <h2 className="mb-4 font-display text-lg text-white">Route Safety Predictor</h2>

        <div className="space-y-3">
          <InputRow name="Depthm" label="Ocean Depth (meters)" min={0} max={5000} step={1} />
          <InputRow name="T_degC" label="Temperature (degC)" min={-2} max={30} step={0.1} />
          <InputRow name="Salnty" label="Salinity" min={30} max={40} step={0.01} />
          <InputRow name="O2ml_L" label="Oxygen Level (ml/L)" min={0} max={10} step={0.1} />
        </div>

        <button
          type="button"
          onClick={() => setChecked(true)}
          className="mt-4 w-full rounded-xl bg-accent px-4 py-3 font-semibold text-navy transition hover:brightness-110"
        >
          Check Route Safety
        </button>
      </article>

      <article className="rounded-2xl border border-white/10 bg-navy/40 p-4">
        <h2 className="mb-3 font-display text-lg text-white">Prediction Result</h2>

        {!checked ? (
          <p className="text-sm text-slate-300">Adjust parameters and click the button to evaluate route safety.</p>
        ) : (
          <div className="space-y-4">
            <div
              className={`rounded-xl p-4 text-center text-xl font-bold tracking-wide ${
                indicators.safe
                  ? 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-300/40'
                  : 'bg-red-500/20 text-red-300 ring-1 ring-red-300/40'
              }`}
            >
              {indicators.safe ? 'SAFE ROUTE' : 'UNSAFE ROUTE'}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-card/70 p-3">
                <p className="text-xs uppercase text-slate-400">WaterCondition</p>
                <p className="text-lg text-slate-100">{indicators.WaterCondition}</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-card/70 p-3">
                <p className="text-xs uppercase text-slate-400">DensityIndex</p>
                <p className="text-lg text-slate-100">{indicators.DensityIndex.toFixed(3)}</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-card/70 p-3 sm:col-span-2">
                <p className="text-xs uppercase text-slate-400">VisibilityRisk</p>
                <p className="text-lg text-slate-100">{indicators.VisibilityRisk}</p>
              </div>
            </div>

            <p className="text-xs text-slate-400">
              SafeRoute rule: Depth {'<'} 3000, Temperature 2-25, Salinity 33-37, Oxygen {'>'} 2.
            </p>
          </div>
        )}
      </article>
    </section>
  );
};

export default RoutePredictor;
