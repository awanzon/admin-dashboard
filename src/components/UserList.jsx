function UserList({ users, onViewUser }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} style={{ marginBottom: "10px" }}>
          {user.name}
          <button
            onClick={() => {
              onViewUser(user);
            }}
            style={{ marginleft: "10px", cursor: "pointer" }}
          >
            View Detail
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
