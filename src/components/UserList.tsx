import UserCard from "./UserCard.js";

interface UserListProps {
  users: User[];
  viewDetail: (user: User) => void;
}

//Loop data
function UserList({ users, viewDetail }: UserListProps) {
  return (
    <ul className="divide-y">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onView={viewDetail}
        />
      ))}
    </ul>
  );
}

export default UserList;
