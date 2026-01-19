import { getUsers } from "../services/api.js";
import { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    console.log("Dashboard mounted");
    
    getUsers().then((data) => {
      console.log(data);
    });
  }, []);

  return <h1>Admin Dashboard</h1>
}

export default Dashboard;
