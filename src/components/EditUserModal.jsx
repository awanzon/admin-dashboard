import { useState } from "react";
import Modal from "./Modal";
import ConfirmAction from "./ConfirmAction";
import LoadingOverlay from "./LoadingOverlay";

function EditUser({ user, onUpdate, onClose }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setShowConfirm(true);
  }

  async function handleConfirmUpdate() {
    setShowConfirm(false);
    setIsLoading(true); //Show Loading overlay

    const updatedUser = {
      ...user,
      name,
      email,
      phone,
      address,
    };

    try {
      await new Promise(r => setTimeout(r, 1000)); // key to show loading overlay
      await onUpdate(updatedUser);
    } catch (error) {
      console.error("Update failed:",error);
    } finally {
      setIsLoading(false);
      onClose();
    }
  }

  return (
    <Modal onClose={onClose}>
      <div className="relative">
        {isLoading && <LoadingOverlay text="Updating DATA..." />}

        {showConfirm ? (
          <ConfirmAction
            title="Confirm Update"
            description={`Save changes for ${name}?`}
            confirmText="Save"
            danger
            onCancel={() => setShowConfirm(false)}
            onConfirm={handleConfirmUpdate}
          />
        ) : (
          <>
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

                <div className="flex justify-between mt-4">
                  <button
                    type="submit"
                    className="w-40 rounded bg-red-600 py-2 font-semibold hover:bg-red-800"
                  >
                    Update
                  </button>
                  <button
                    onClick={onClose}
                    className="w-40 rounded bg-gray-500 py-2 font-semibold hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}

export default EditUser;
