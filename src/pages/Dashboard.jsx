import { getUsers } from "../services/api.js";
import { useEffect } from "react";
import { useState } from "react";
import UserList from "../components/UserList.jsx";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h2>Loading Users...</h2>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <UserList users={users} />
    </div>
  );
}

export default Dashboard;
