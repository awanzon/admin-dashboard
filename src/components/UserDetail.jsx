function UserDetail({ user, onClose }) {
  if (!user) return null;

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <h2>User Detail</h2>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default UserDetail;

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(19, 56, 71, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modalStyle = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "8px",
  width: "300px",
};
