import UserCard from "./UserCard";

function UserList({ users, onViewUser, onDeleteUser }) {
  return (
    <ul className="divide-y">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onView={onViewUser}
          deleteUser={onDeleteUser}
        />
      ))}
    </ul>
  );
}

export default UserList;
