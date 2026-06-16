import UserCard from "./UserCard.js";
import type { User } from "../types/user.js";

interface UserListProps {
  users: User[];
  viewDetail: (user: User) => void;
  selectedIds: string[];
  onToggleSelect: (id: string) => void;
}

//Loop data
function UserList({ users, viewDetail, selectedIds, onToggleSelect }: UserListProps) {
  return (
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
  );
}

export default UserList;
