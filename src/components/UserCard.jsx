function UserCard({ user, onView, deleteUser }) {
  return (
    <li>
      <span>{user.name}</span>
      <button
        onClick={() => onView(user)}
        className="text-sm text-blue-600 hover:underline cursor-pointer"
      >
        View Detail
      </button>
      <button 
        onClick={() => deleteUser(user.id)}
        style={{ color: "red" }}
      >
        Delete
      </button>
    </li>
  );
}

export default UserCard;
