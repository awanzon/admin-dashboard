function Loading({ text = "Loading..." }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.spinner}></div>
      <p>{text}</p>
    </div>
  );
}

export default Loading;

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px"
  },
  spinner: {
    width: "32px",
    height: "32px",
    border: "4px solid #ddd"
    borderTop: "4px solid #333",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};
