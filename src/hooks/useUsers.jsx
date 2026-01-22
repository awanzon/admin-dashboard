import { useEffect, useState } from "react";
import { getUsers } from "../api/users";

function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");

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

  const searchValue = search.toLowerCase();
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchValue) ||
      user.email.toLowerCase().includes(searchValue) ||
      user.phone.includes(searchValue);

    if (!matchesSearch) return false;
    
    if (filterType === "idSmall") return user.id <= 5;
    if (filterType === "startsWithA")
      return user.name.toLowerCase().startsWith("a");
    return true;
  });

  return {
    users: filteredUsers,
    loading,
    error,
    search,
    setSearch,
    filterType,
    setFilterType,
    selectedUser,
    setSelectedUser,
  };
}

export { useUsers };
