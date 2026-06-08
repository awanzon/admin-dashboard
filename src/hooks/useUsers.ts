import { useEffect, useState } from "react";
// import { getUsers } from "../data/api/users"; //external data(API)
import mockUsers from "../data/mocks/mockUsers"; //internal data(mock)
import type { User } from "../types/user";
import type { FilterType } from "../utils/filter";

function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [search, setSearch] = useState<string>("");
  const [filterType, setFilterType] = useState<FilterType>("all");
  const [isCreateOpen, setIsCreateOpen] = useState<boolean>(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isUpdating, setIsUpdating] = useState<boolean>(false); //saklar on/off
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [isDeleting, setIsDeleting] = useState<boolean>(false); //saklar on/off

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
  const isSmallId = filterType === "idSmall";
  const isStartWithA = filterType === "startWithA";
  const filteredUsers: User[] = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchValue) ||
      user.email.toLowerCase().includes(searchValue) ||
      user.phone.includes(searchValue);

    if (!matchesSearch) return false;
    if (isSmallId) return user.no <= 5;
    if (isStartWithA) return user.name.toLowerCase().startsWith("a");
    return true;
  });

  //view selected user
  function openSelectedUser(user: User) {
    setSelectedUser(user);
  }

  function closeSelectedUser() {
    setSelectedUser(null);
  }

  //Create new user
  function openCreate() {
    setIsCreateOpen(true);
  }

  function closeCreate() {
    setIsCreateOpen(false);
  }

  function handleCreateUser(newUser: User) {
    setUsers((prevUsers) => [newUser, ...prevUsers]);
  }

  //Delete user
  function openDeleteModal(user: User) {
    setUserToDelete(user);
    setSelectedUser(null);
  }

  function closeDeleteModal() {
    setUserToDelete(null);
  }

  async function handleDeleteUser(userId: string) {
    console.log("DELETE ID:", userId);
    try {
      setIsDeleting(true);

      // simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // setUsers((prev) => prev.filter((u) => u.id !== userId));
      setUsers((prev) => {
        console.log(
          "BEFORE:",
          prev.map((u) => u.id),
        );

        const filtered = prev.filter((u) => u.id !== userId);

        console.log(
          "AFTER:",
          filtered.map((u) => u.id),
        );

        return filtered;
      });
    } catch (err) {
      setError("Failed to delete user");
    } finally {
      setIsDeleting(false);
    }
  }

  //Update user
  function openEdit(user: User) {
    setEditingUser(user);
    setSelectedUser(null);
  }
  function closeEdit() {
    setEditingUser(null);
  }

  async function handleUpdateUser(updatedUser: User) {
    try {
      setIsUpdating(true);

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === updatedUser.id ? updatedUser : user,
        ),
      );
    } catch (err) {
      setError("Failed to Update the Data");
    } finally {
      setEditingUser(null);
      setIsUpdating(false);
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
    isUpdating,
    openEdit,
    closeEdit,
    handleUpdateUser,
  };
}

export { useUsers };
