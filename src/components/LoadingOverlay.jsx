import Loading from "./Loading";

function LoadingOverlay({ text = "Processing..." }) {
  return (
    <div className="
      absolute inset-0
      bg-black/60
      flex items-center justify-center
      rounded-xl
      z-50
    ">
      <Loading text={text} />
    </div>
  );
}

export default LoadingOverlay;
