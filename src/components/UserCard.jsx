// Show Users & button
function UserCard({ user, onView }) {
  return (
    <li className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 hover:border-red-600 hover:bg-zinc-800 transition cursor-pointer"
    >
      <span className="text-white font-medium">{user.name}</span>
      <button
        onClick={() => onView(user)}
        className="text-sm text-white hover:underline cursor-pointer hover:text-red-400 font-semibold transition"
      >
        View Detail
      </button>
    </li>
  );
}

export default UserCard;
