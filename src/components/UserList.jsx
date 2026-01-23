import UserCard from "./UserCard";

function UserList({ users, onViewUser }) {
  return (
    <ul className="divide-y">
      {users.map((user) => (
        <UserCard key={user.id} user={user} onView={onViewUser} />
      ))}
    </ul>
  );
}

export default UserList;
