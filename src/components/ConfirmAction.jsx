function ConfirmAction({
  title = "Are you sure?",
  description,
  onConfirm,
  onCancel,
  confirmText = "Confirm",
  danger = false,
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      {description && (
        <p className="text-sm text-zinc-400">
          {description}
        </p>
      )}

      <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={onCancel}
          className="px-4 py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600"
        >
          Cancel
        </button>

        <button
          onClick={onConfirm}
          className={`px-4 py-2 rounded-lg font-semibold text-white ${
            danger
              ? "bg-red-600 hover:bg-red-700"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {confirmText}
        </button>
      </div>
    </div>
  );
}

export default ConfirmAction;
