import { getUsers } from "../api/users.js";
import { useEffect } from "react";
import { useState } from "react";
import UserList from "../components/UserList.jsx";
import UserDetail from "../components/UserDetail.jsx";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load users");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function openModal(user) {
    setSelectedUser(user);
  }

  function closeModal() {
    setSelectedUser(null);
  }

  if (loading) {
    return <h2>Loading Users...</h2>;
  }
  
  if (error) {
    return <h2 style={{ color: "red" }}>{error}</h2>;
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <input
        type="text"
        placeholder="Search User..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <hr />

      <UserList users={filteredUsers} onViewUser={openModal} />
      <hr />

      {selectedUser && <UserDetail user={selectedUser} onClose={closeModal} />}
    </div>
  );
}

export default Dashboard;
