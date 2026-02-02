import { useUsers } from "../hooks/useUsers.jsx";
import UserList from "../components/UserList.jsx";
import UserDetail from "../components/UserDetail.jsx";
import Loading from "../components/Loading.jsx";
import EmptyState from "../components/EmptyState.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import CreateUser from "../components/CreateUserModal";
import EditUser from "../components/EditUserModal.jsx";


function Dashboard() {
  const {
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
    editingUser,
    openEdit,
    closeEdit,
    handleUpdateUser,
  } = useUsers();


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
      <h1 className="text-blue-600 text-2xl font-bold mb-4">
        Admin Dashboard
      </h1>
      <input
        type="text"
        placeholder="Search Name/Phone..."
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

      <button onClick={openCreate}>
        + Add User
      </button>

      {isCreateOpen && (
        <CreateUser
          onCreate={handleCreateUser}
          onClose={closeCreate} 
        />
      )}
      <hr />
      
      {filteredUsers.length === 0 ? (
        <EmptyState message="No users match your search" />
      ) : (
        <UserList 
          users={filteredUsers} 
          viewDetail={openSelectedUser} 
        />
      )}
      <hr />

      {selectedUser && <UserDetail 
      user={selectedUser} 
      onClose={closeSelectedUser} 
      deleteUser={handleDeleteUser}
      editUser={openEdit}
      />}

      {editingUser && (
        <EditUser 
          user={editingUser}
          onUpdate={handleUpdateUser}
          onClose={closeEdit}
        />
      )}
    </div>
  );
}

export default Dashboard;
