import UserCard from "./UserCard.js";
import type { User } from "../types/user.js";

interface UserListProps {
  users: User[];
  viewDetail: (user: User) => void;
  selectedIds: string[];
  onToggleSelect: (id: string) => void;
  onToggleSelectedAll: () => void;
}

//Loop data
function UserList({ users, viewDetail, selectedIds, onToggleSelect, onToggleSelectedAll }: UserListProps) {
  const isAllSelected = users.length > 0 && selectedIds.length === users.length;
  return (
    <div>
      <div className="flex items-center gap-3 px-4 py-2 border-b border-zinc-800">
      <input 
      type="checkbox" 
      checked={isAllSelected}
      onChange={onToggleSelectedAll}
      className="w-4 h-4 accent-red-600 cursor-pointer"
      />
      <span className="text-sm text-gray-400">Select All</span>
      </div>
    
      <ul className="divide-y">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onView={viewDetail}
            isSelected={selectedIds.includes(user.id)}
            onToggleSelect={onToggleSelect}
          />
        ))}
      </ul>
    </div>
  );
}

export default UserList;
