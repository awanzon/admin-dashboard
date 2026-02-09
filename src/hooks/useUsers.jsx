import { useEffect, useState } from "react";
// import { getUsers } from "../data/api/users"; //external data(API)
import mockUsers from "../data/mocks/mockUsers"; //internal data(mock)

function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false); //saklar on/off
  const [userToDelete, setUserToDelete] = useState(null);

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
  function openDeleteModal(user) {
    setUserToDelete(user);
    setSelectedUser(false);
  }

  function closeDeleteModal() {
    setUserToDelete(null);
  }

  async function handleDeleteUser(userId) {
    try {
      setIsDeleting(true);

      // simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setUsers((prev) => prev.filter((u) => u.id !== userId));
    } catch (err) {
      setError("Failed to delete user");
    } finally {
      setIsDeleting(false);
    }
  }

  //Update user handler
  function openEdit(user) {
    setEditingUser(user);
    setSelectedUser(null);
  }
  function closeEdit() {
    setEditingUser(null);
  }

  async function handleUpdateUser(updatedUser) {
    setEditingUser(true);

    try {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === updatedUser.id ? updatedUser : user,
        ),
      );
    } catch (err) {
      setError("Failed to Update the Data");
    } finally {
      setEditingUser(false);
    }
  }

  return {
    users: filteredUsers,
    loading,
    error,
    search,
    setSearch,
    filterType,
    setFilterType,
    selectedUser,
    openSelectedUser,
    closeSelectedUser,
    isCreateOpen,
    openCreate,
    closeCreate,
    handleCreateUser,
    isDeleting,
    userToDelete,
    setUserToDelete,
    openDeleteModal,
    closeDeleteModal,
    handleDeleteUser,
    editingUser,
    openEdit,
    closeEdit,
    handleUpdateUser,
  };
}

export { useUsers };

// function handleDeleteUser(userId) {
//     const confirmed = window.confirm("Are you sure to delete this user?");
//     if (!confirmed) return;
