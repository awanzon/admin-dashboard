import { useState } from "react";
import Modal from "./Modal.js";
import type { User } from "../types/user";
import LoadingOverlay from "./LoadingOverlay.js";

function CreateUser({ onCreate, onClose }: /* CreateUserProps */{ onCreate: (user: User) => void; onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert("Please fill the required form!");
      return;
    }

    setLoading(true);
    const newUser: User = {
      id: crypto.randomUUID(),
      no: Date.now(),
      name,
      email,
      phone,
      username: name.toLowerCase().replace(/\s/g, ""),
      address,
      website: "",
      active: true,
      role: "user",
    };

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await onCreate(newUser);
    } catch (error) {
      console.error("Update failed:",error);
    } finally {
      setLoading(false);
      onClose();
    }
  }

  return (
    <Modal onClose={onClose}>
      <div className="flex justify-end">
        {loading && <LoadingOverlay text="Creating User..." />}
        <button
          onClick={onClose}
          className="mt-0 w-15 rounded-lg bg-zinc-600 py-1 font-semibold hover:bg-zinc-800"
        >
          Cancel
        </button>
      </div>
      <div onClick={(e) => e.stopPropagation()}>
        <h3 className="mb-4 text-xl font-bold text-red-500 flex justify-center">Create User</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            placeholder="Name*"
            value={name}
            className="w-full rounded bg-zinc-800 p-2"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Email*"
            value={email}
            className="w-full rounded bg-zinc-800 p-2"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Phone*"
            value={phone}
            className="w-full rounded bg-zinc-800 p-2"
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
            className="w-full rounded bg-zinc-800 p-2"
            onChange={(e) => setAddress(e.target.value)}
          />

          <div className="mt-4">
            <button
              type="submit"
              className="w-full rounded bg-red-600 py-2 font-semibold hover:bg-red-800"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default CreateUser;
