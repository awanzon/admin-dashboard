import type { Toast } from "../types/toast";

const toastStyle = {
  success: "bg-green-600",
  error: "bg-red-600",
  warning: "bg-yellow-500",
};

const toastIcons = {
  success: "✅",
  error: "❌",
  warning: "⚠️",
};

function ToastItem({
  toast,
  onRemove,
}: {
  toast: Toast;
  onRemove: (id: string) => void;
}) {
  return (
    <div className={`flex items-center justify-between gap-3 px-4 py-3 rounded-lg text-white shadow-lg min-w-64 ${toastStyle[toast.type]}`}>
      <span>{toastIcons[toast.type]} {toast.message}</span>
      <button
        onClick={() => onRemove(toast.id)}
        className="text-white opacity-70 hover:opacity-100 font-bold"
      >
        X
      </button>
    </div>
  );
}

export default ToastItem;
