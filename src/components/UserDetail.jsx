import Modal from "./Modal";

function UserDetail({ user, onClose, deleteUser, editUser }) {
  if (!user) return null;
  const ad = user.address;

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
      <div onClick={(e) => e.stopPropagation()} className="">
        <h2 className="mb-4 text-xl font-bold text-red-500 p-4 flex justify-center">User Detail</h2>
        <div className="space-y-2 text-sm">
          <p>
            <span className="text-zinc-400">ID:</span> {user.id}
          </p>
          <p>
            <span className="text-zinc-400">Name:</span> {user.name}
          </p>
          <p>
            <span className="text-zinc-400">Username:</span> {user.username}
          </p>
          <p>
            <span className="text-zinc-400">Email:</span> {user.email}
          </p>
          <p>
            <span className="text-zinc-400">Phone:</span> {user.phone}
          </p>
          {user.website && (
            <p>
              <span className="text-zinc-400">Website:</span> {user.website}
            </p>
          )}
          {user.role && (
            <p>
              <span className="text-zinc-400">Role:</span> {user.role}
            </p>
          )}
          {user.active && (
            <p>
              <span className="text-zinc-400">Status:</span>{" "}
              {user.active !== false ? "Active" : "Nonactive"}
            </p>
          )}

          {ad && (
            <p>
              <span className="text-zinc-400">Address:</span>{" "}
              {ad?.street || "-"} {ad?.city || ""} {ad?.zipcode || ""} {ad}
            </p>
          )}
        </div>

        <button
          onClick={() => deleteUser(user.id)}
          className="mt-6 w-full rounded-lg bg-zinc-500 py-2 font-semibold hover:bg-zinc-700"
        >
          Delete
        </button>
        <button
          onClick={() => editUser(user)}
          className="mt-6 w-full rounded-lg bg-gray-600 py-2 font-semibold hover:bg-gray-700"
        >
          Edit
        </button>
      </div>
    </Modal>
  );
}

export default UserDetail;
