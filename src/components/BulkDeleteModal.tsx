import { useState } from "react";
import Modal from "./Modal.js";
import ConfirmAction from "./ConfirmAction.js";
import LoadingOverlay from "./LoadingOverlay.js";

function BulkDeleteModal({
  count,
  onDelete,
  onClose,
}: {
  count: number;
  onDelete: () => Promise<void>;
  onClose: () => void;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleConfirm() {
    setIsLoading(true);
    await onDelete();
    setIsLoading(false);
    onClose();
  }

  return (
    <Modal onClose={onClose}>
      <div className="relative">
        {isLoading && <LoadingOverlay text={`Deleting ${count} users...`} />}
        <ConfirmAction 
          title="Delete Selected Users?"
          description={`This will permanently delete ${count} selected users${count > 1 ? "s" : ""}.`}
          confirmText="Delete All"
          danger
          onCancel={onClose}
          onConfirm={handleConfirm}
        />
      </div>
    </Modal>
  );
}

export default BulkDeleteModal;