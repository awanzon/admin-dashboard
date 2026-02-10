import { useState } from "react";
import Modal from "./Modal";
import ConfirmAction from "./ConfirmAction";
import LoadingOverlay from "./LoadingOverlay";

function DeleteUserModal({ user, onDelete, onClose }) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleConfirmDelete() {
    setIsLoading(true);
    await onDelete(user.id); // async delete
    setIsLoading(false);
    onClose();
  }

  return (
    <Modal onClose={onClose}>
      <div className="relative">
        {isLoading && <LoadingOverlay text="Deleting user..." />}

        <ConfirmAction
          title="Delete User?"
          description={`This will permanently delete ${user.name}.`}
          confirmText="Delete"
          danger
          onCancel={onClose}
          onConfirm={handleConfirmDelete}
        />
      </div>
    </Modal>
  );
}

export default DeleteUserModal;
