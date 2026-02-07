function Loading({ text = "Loading..." }) {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        min-h-screen
        text-center
      "
    >
      {/* Spinner */}
      <div
        className="
          w-10 h-10
          border-4 border-red-900/40
          border-t-red-500
          rounded-full
          animate-spin
          mb-4
        "
      />

      {/* Text */}
      <p className="text-red-300 text-sm tracking-wide">{text}</p>
    </div>
  );
}

export default Loading;
