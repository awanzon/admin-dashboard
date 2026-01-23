import { useUsers } from "../hooks/useUsers.jsx";
import UserList from "../components/UserList.jsx";
import UserDetail from "../components/UserDetail.jsx";
import Loading from "../components/Loading.jsx";

function Dashboard() {
  const {
    users: filteredUsers,
    loading,
    error,
    search,
    setSearch,
    filterType,
    setFilterType,
    selectedUser,
    setSelectedUser,
  } = useUsers();

  function openModal(user) {
    setSelectedUser(user);
  }

  function closeModal() {
    setSelectedUser(null);
  }

  if (loading) {
    return <Loading text="Please wait..." />;
  }

  if (error) {
    return <h2 style={{ color: "red" }}>{error}</h2>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <input
        type="text"
        placeholder="Search User..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="all">All Users</option>
        <option value="idSmall">User ID ≤ 5</option>
        <option value="startsWithA">Name starts with A</option>
      </select>
      <hr />
      <UserList users={filteredUsers} onViewUser={openModal} />
      <hr />

      {selectedUser && <UserDetail user={selectedUser} onClose={closeModal} />}
    </div>
  );
}

export default Dashboard;
