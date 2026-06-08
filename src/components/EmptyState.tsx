function EmptyState({ title = "No data found", description }) {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        text-center
        py-16
        bg-zinc-900/80
        border border-zinc-800
        rounded-xl
      "
    >
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

      {description && <p className="text-zinc-400 max-w-md">{description}</p>}
    </div>
  );
}

export default EmptyState;
