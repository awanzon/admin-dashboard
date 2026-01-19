import { getUsers } from "../services/api.js";
import { useEffect } from "react";
import { useState } from "react";

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

  return <h1>Admin Dashboard</h1>;
}

export default Dashboard;
