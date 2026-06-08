import { useState } from "react";
import Modal from "./Modal.js";
import ConfirmAction from "./ConfirmAction.js";
import LoadingOverlay from "./LoadingOverlay.js";

function DeleteUserModal({
  user,
  onDelete,
  onClose,
}: {
  user: { id: string; name: string };
  onDelete: (id: string) => Promise<void>;
  onClose: () => void;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleConfirmDelete() {
    console.log("MODAL USER ID:", user.id);
    
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
