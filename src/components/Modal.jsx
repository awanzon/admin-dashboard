function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      ></div>

      {/* modal box */}
      <div className="relative z-10 w-full max-w-lg rounded-xl bg-zinc-900 p-6 text-white shadow-xl">
        {children}
      </div>
    </div>
  );
}

export default Modal;
