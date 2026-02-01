import { useEffect, useState } from "react";
import { getUsers } from "../data/api/users"; //external data(API)
import mockUsers from "../data/mocks/mockUsers"; //internal data(mock)

function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  //Fetch users when dashboard is mounted
  useEffect(() => {
    async function fetchUsers() {
      try {
        // setUsers(await getUsers()); //external data(API)
        setUsers(mockUsers); //internal data(mock)
        setError(null);
      } catch (error) {
        console.error(error);
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  //Filtering users by search value
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

//view selected user
  function openSelectedUser(user) {
    setSelectedUser(user);
  }

  function closeSelectedUser() {
    setSelectedUser(null);
  }

//add new user
  function openCreate() {
    setIsCreateOpen(true);
  }

  function closeCreate() {
    setIsCreateOpen(false);
  }

  function handleCreateUser(newUser) {
    setUsers((prevUsers) => [newUser, ...prevUsers]);
  }

//delete user
  function handleDeleteUser(userId) {
    const confirmed = window.confirm("Are you sure to delete this user?");
    if (!confirmed) return;

    //getting updated users after delete confirm or cancel
    setUsers((prevUsers) => {
      const updated = prevUsers.filter((u) => u.id !== userId);
      if (selectedUser?.id === userId) {setSelectedUser(null)}
      return updated;
    });
  }

  return {
    users: filteredUsers,
    loading,
    error,
    search,
    setSearch,
    isCreateOpen,
    filterType,
    setFilterType,
    selectedUser,
    openSelectedUser,
    closeSelectedUser,
    openCreate,
    closeCreate,
    handleCreateUser,
    handleDeleteUser,
  };
}

export { useUsers };
