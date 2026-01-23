function UserCard({ user, onView }) {
  return (
    <li>
      <span>{user.name}</span>
      <button
        onClick={() => onView(user)}
        className="text-sm text-blue-600 hover:underline cursor-pointer"
      >
        View Detail
      </button>
    </li>
  );
}

export default UserCard;
