import ToastItem from "./Toast.js";
import type { Toast as ToastType } from "../types/toast";

function ToastContainer({
  toasts,
  onRemove,
}: {
  toasts: ToastType[];
  onRemove: (id: string) => void;
}) {
  return (
    <div className="fixed top-4 right-4 flex flex-col gap-2 z-50">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </div>
  ); 
}

export default ToastContainer;