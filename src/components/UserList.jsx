import UserCard from "./UserCard";

function UserList({ users, viewDetail }) {
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
