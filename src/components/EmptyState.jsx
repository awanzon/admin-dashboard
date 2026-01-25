function EmptyState({ message = "No data found" }) {
  return (
    <div style={style.container}>
      <p style={style.text}>{message}</p>
    </div>
  );
}

const style = {
  container: {
    padding: "40px",
    textAlign: "center",
    color: "#666",
  },

  text: {
    fontSize: "16px",
  },
};

export default EmptyState;