import { useState } from "react";

function EditUser({ user, onUpdate, onClose }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);

  function handleSubmit(e) {
    e.preventDefault();

    const updatedUser = {
      ...user,
      name,
      email,
      phone,
    };

    onUpdate(updatedUser);
    onClose();
  }

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h3>Edit User</h3>

        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            value={address}
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          />

          <div style={{ marginTop: "12px" }}>
            <button type="submit">Update</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(19, 56, 71, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "#fff",
    padding: "20px",
    width: "300px",
  },
};

export default EditUser;
