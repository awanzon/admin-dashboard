function ErrorMessage({ title, message, onRetry }) {
  return (
    <div
      className="min-h-screen bg-black"
      style={{
        backgroundImage: "url('/spiderman-abstrak-vibe.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="min-h-screen bg-black/80 backdrop-blur-sm p-6">
        <div className="flex flex-col items-center justify-center text-center bg-neutral-900 rounded-xl p-20 shadow-lg border border-neutral-800">
          <h3 className="text-xl font-semibold text-red-400 mb-2">
            ⚠️ {title}
          </h3>
          {message && <p className="text-red-300 max-w-md">{message}</p>}
          {onRetry && (
            <button
              className="mt-4 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm cursor-pointer"
              onClick={onRetry}
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ErrorMessage;
