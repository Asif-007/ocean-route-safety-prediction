const StatCard = ({ title, value, subtext, icon: Icon }) => {
  return (
    <div className="rounded-2xl bg-card/90 p-5 shadow-glow backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm tracking-wide text-slate-300">{title}</p>
        <Icon className="h-5 w-5 text-accent" />
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="mt-1 text-xs text-slate-400">{subtext}</p>
    </div>
  );
};

export default StatCard;
