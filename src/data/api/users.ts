import axios from "axios";
import type { User } from "../../types/user";

// Public API
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

//GET all users
export async function getUsers(): Promise<User[]> {
  try {
    const response = await api.get("/users");
    return response.data as User[];
  } catch (error) {
    console.error("API Error - getUsers:", error);
    throw error;
  }
}

//POST create user
export async function createUser(user: User): Promise<User> {
  try {
    const response = await api.post("/users", user);
    return response.data as User;
  } catch (error) {
    console.error("API Error - createUser:", error);
    throw error;
  }
}

// PUT update user
export async function updateUser(user: User): Promise<User> {
  try {
    const response = await api.put(`/users/${user.id}`, user);
    return response.data as User;
  } catch (error) {
    console.error("API Error - updateUser:", error);
    throw error;
  }
}

// DELETE single user
export async function deleteUser(id: string): Promise<void> {
  try {
    await api.delete(`/users/${id}`);
  } catch (error) {
    console.error("API Error - deleteUser:", error);
    throw error;
  }
}

// DELETE bulk users
export async function bulkDeleteUsers(ids: string[]): Promise<void> {
  try {
    await Promise.all(ids.map((id) => api.delete(`/users/${id}`)));
  } catch (error) {
    console.error("API Error - bulkDeleteUsers:", error);
    throw error;
  }
}
