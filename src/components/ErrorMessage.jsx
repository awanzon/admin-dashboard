function ErrorMessage({ message, onRetry }) {
  return (
    <div style={styles.container}>
      <h3 style={styles.text}>⚠️ {message}</h3>
      {onRetry && (
        <button style={styles.button} onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
  text: {
    color: "red",
    marginBottom: "12px",
  },
  button: {
    padding: "8px 16px",
    cursor: "pointer",
  },
};

export default ErrorMessage;
