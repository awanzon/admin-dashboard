import { useEffect, useState } from "react";
import { getUsers } from "../api/users";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
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

  return { users, loading, error };
}
