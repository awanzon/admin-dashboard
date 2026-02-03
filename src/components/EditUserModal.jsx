import { useState } from "react";
import Modal from "./Modal";

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
      address,
    };

    onUpdate(updatedUser);
    onClose();
  }

  return (
    <Modal onClose={onClose}>
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="mt-0 w-15 rounded-lg bg-gray-500 py-1 font-semibold hover:bg-gray-700"
        >
          Close
        </button>
      </div>
      <div onClick={(e) => e.stopPropagation()}>
        <h3 className="mb-4 text-xl font-bold text-red-500 flex justify-center">
          Edit User
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            value={name}
            className="w-full rounded bg-zinc-800 p-2"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            value={email}
            className="w-full rounded bg-zinc-800 p-2"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            value={phone}
            className="w-full rounded bg-zinc-800 p-2"
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            value={address}
            className="w-full rounded bg-zinc-800 p-2"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          />

          <div className="mt-4">
            <button
              type="submit"
              className="w-40 rounded bg-red-600 py-2 font-semibold hover:bg-red-800"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default EditUser;
