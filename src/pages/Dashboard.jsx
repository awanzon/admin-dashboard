import { useUsers } from "../hooks/useUsers.jsx";
import UserList from "../components/UserList.jsx";
import UserDetail from "../components/UserDetail.jsx";
import Loading from "../components/Loading.jsx";
import EmptyState from "../components/EmptyState.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";

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
    return (
      <ErrorMessage 
      message={error} 
      onRetry={() => window.location.reload()} 
      />
    );
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
      
      {filteredUsers.length === 0 ? (
        <EmptyState message="No users match your search" />
      ) : (
        <UserList users={filteredUsers} onViewUser={openModal} />
      )}
      <hr />

      {selectedUser && <UserDetail user={selectedUser} onClose={closeModal} />}
    </div>
  );
}

export default Dashboard;
