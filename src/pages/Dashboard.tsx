import { useUsers } from "../hooks/useUsers.js";
import UserList from "../components/UserList.js";
import UserDetail from "../components/UserDetail.js";
import Loading from "../components/Loading.js";
import EmptyState from "../components/EmptyState.js";
import ErrorMessage from "../components/ErrorMessage.js";
import CreateUser from "../components/CreateUserModal.js";
import EditUser from "../components/EditUserModal.js";
import DeleteUserModal from "../components/DeleteUserModal.js";
import type { FilterType } from "../utils/filter";

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
  } = useUsers();

  if (loading) {
    return <Loading text="Please wait..." />;
  }

  if (error) {
    return (
      <ErrorMessage
        title="Something went wrong"
        message={error}
        onRetry={() => window.location.reload()}
      />
    );
  }

  return (
    <div
      className="min-h-screen bg-black"
      style={{
        backgroundImage: "url('/spiderman-abstrak-vibe.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="min-h-screen bg-black/80 backdrop-blur-sm p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2 tracking-wide flex items-center justify-between">
            Admin Dashboard
          </h1>
          <p className="text-sm text-gray-400 mb-8">
            Manage users, roles, and system data
          </p>
          <input
            type="text"
            placeholder="Search Name/Phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 mb-6 rounded-lg bg-neutral-900 border border-neutral-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-700"
          />

          <select
            value={filterType}
            className="bg-zinc-900 text-white border border-zinc-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            onChange={(e) => setFilterType(e.target.value as FilterType)}
          >
            <option value="all">All Users</option>
            <option value="idSmall">User ID ≤ 5</option>
            <option value="startWithA">Name start with A</option>
          </select>

          <button
            onClick={openCreate}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg transition"
          >
            + Add User
          </button>

          {isCreateOpen && (
            <CreateUser onCreate={handleCreateUser} onClose={closeCreate} />
          )}
        </div>
        {filteredUsers.length === 0 ? (
          <EmptyState
            title="No users match your search"
            description="Try changing your search or filter criteria."
          />
        ) : (
          <div className="bg-neutral-900 rounded-xl p-4 shadow-lg border border-neutral-800">
            <UserList users={filteredUsers} viewDetail={openSelectedUser} />
          </div>
        )}

        {selectedUser && (
          <UserDetail
            user={selectedUser}
            onClose={async () => closeSelectedUser()}
            deleteUser={openDeleteModal}
            editUser={openEdit}
          />
        )}
        {userToDelete && (
          <DeleteUserModal
            user={{ ...userToDelete, id: String(userToDelete.id) }}
            onDelete={(id: string) => handleDeleteUser(id)}
            onClose={closeDeleteModal}
          />
        )}

        {editingUser && (
          <EditUser
            user={editingUser}
            onUpdate={handleUpdateUser}
            onClose={closeEdit}
          />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
