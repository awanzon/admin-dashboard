function UserDetail({ user, onClose, deleteUser, editUser }) {
  if (!user) return null;
  const ad = user.address;

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <h2>User Detail</h2>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        {user.website && <p>Website: {user.website}</p>}
        {user.role && <p>Role: {user.role}</p>}
        {user.active && (
          <p>Status: {user.active !== false ? "Active" : "Nonactive"}</p>
        )}
        
        {ad && (
          <p>
            Address: {ad?.street || "-"} {ad?.city || ""} {ad?.zipcode || ""} {ad}
          </p>
        )}

        <button onClick={onClose}>Close</button>
        <button 
        onClick={() => deleteUser(user.id)}
        style={{ color: "red" }}
        >
          Delete
        </button>
        <button onClick={() => editUser(user)}>
          Edit
        </button>
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
