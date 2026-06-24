const SafetyBadge = ({ value }) => {
  const isSafe = Number(value) === 1;

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${
        isSafe
          ? 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/40'
          : 'bg-red-500/20 text-red-300 ring-1 ring-red-400/40'
      }`}
    >
      {isSafe ? 'Safe' : 'Unsafe'}
    </span>
  );
};

export default SafetyBadge;
