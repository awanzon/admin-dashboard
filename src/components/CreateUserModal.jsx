import { useState } from "react";

function CreateUser({ onCreate, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert("Please fill the required form!");
      return;
    }

    const newUser = {
      id: crypto.randomUUID(),
      name,
      email,
      phone,
      username: name.toLowerCase().replace(/\s/g, ""),
      address,
      active: true,
      role: "user",
    };

    onCreate(newUser);
    onClose();
  }

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h3>Create User</h3>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Phone*"
            value={phone}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                setPhone(value);
              }
            }}
          />
          <input
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <div style={{ marginTop: "12px" }}>
            <button type="submit">Create</button>
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
    background: "rgba(0,0,0,0.3)",
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

export default CreateUser;
