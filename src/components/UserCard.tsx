import type { User } from "../types/user.js";

interface UserCardProps {
  user: User;
  onView: (user: User) => void;
  isSelected: boolean;
  onToggleSelect: (id: string) => void;
}

// Show Users & button
function UserCard({ user, onView, isSelected, onToggleSelect }: UserCardProps) {
  return (
    <li className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 hover:border-red-600 hover:bg-zinc-800 transition cursor-pointer"
    >
      <input 
        type="checkbox"
        checked={isSelected}
        onChange={() => onToggleSelect(user.id)}
        onClick={(e) => e.stopPropagation()}
        className="w-4 h-4 accent-red-600 cursor-pointer"
      />
      <span className="text-white font-medium flex-1 ml-3">{user.name}</span>
      <button
        onClick={() => onView(user)}
        className="text-sm text-white hover:underline cursor-pointer hover:text-red-500 font-semibold transition"
      >
        View Detail
      </button>
    </li>
  );
}

export default UserCard;
