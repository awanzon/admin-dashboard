function UserList({ users, onSelectUser }) {
  return (
    <ul>
      {users.map((user) => (
        <li
          key={user.id}
          onClick={() => onSelectUser(user)}
          style={{ cursor: "pointer" }}
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
}

export default UserList;
