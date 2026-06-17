🧭 Admin Dashboard – User Management

// 📌 Overview

This project simulates an **internal admin dashboard** used by support or operations teams to manage user data.
It focuses on **real-world frontend workflows** such as data fetching, state management, CRUD operations, and clean component architecture.

The goal of this project is to demonstrate my readiness as a **junior frontend developer**, using patterns and practices commonly found in startup and production React applications.

---

// 🎯 Project Goals

* Practice real-world frontend architecture
* Separate UI concerns from business and data logic
* Implement common admin features used in real products
* Write clean, readable, and maintainable React code
* Prepare a portfolio-ready project aligned with job market needs

---

// ✨ Features

✅ Implemented

> Core CRUD Functionality

* **Create User** – Add new users via modal form
* **Read User** – Display user list and detailed user view (modal)
* **Update User** – Edit user information via modal
* **Delete User** – Delete user with confirmation dialog
* **Bulk Delete** – Bulk Delete with Checkbox selection

> Data & State Management

* **Mock API (`MockUsers.ts`)** – Simulates backend user data
* **Custom Hook (`useUsers.ts`)** – Centralized logic for data fetching, CRUD, loading, and error states
* **Axios API Layer** – Abstracted API calls for better separation of concerns(used for real API)

> UI & UX

* **User List & User Card** – Clear separation between data looping and presentation
* **User Detail Modal** – View detailed user information
* **Search & Filter** – Search users by name, phone, or email
* **Loading State** – Reusable loading component
* **Loading Overlay** – Reusable for after Confirmation Changing data
* **Error Handling** – Graceful error UI for failed requests
* **Empty State** – Clear feedback when no data matches the search
* **Toast Notification** – Toast Notifications CRUD
* **Pagination** – Pagination Userlist
* **Checkbox & Bulk Delete** – Selected Checkbox with Bulk Delete 
* **Tailwind CSS Integration** – Refactoring UI styles using Tailwind for scalability and consistency

----------

🚧 In Progress

- Migration to Typescript // Done
- 


Problem need to fix

----------

📝 Planned

-

* File-based routing
* SEO improvements
* Server-side rendering (SSR)
* Production-ready setup
* Pagination ✅
* Retry button on API errors
* Accessibility improvements
* Basic unit testing

----------

🛠 Tech Stack

* React
* Vite
* JavaScript (ES6+)
* Axios (API handling)
* CSS / Tailwind CSS
* Git & GitHub (conventional commits)
* Typescript

---

📁 Project Structure

```
src/
|--data/
│   -- api/
│      > users.ts              # Axios API layer
│   -- mocks/
│      > MockUsers.ts          # Mock user data
│
|--components/
│   > UserList.tsx             # Loop and render users
│   > UserCard.tsx             # Individual user display
│   > UserDetail.tsx           # User detail modal
│   > CreateUserModal.tsx      # Create user modal
│   > DeleteUserModal.tsx      # Delete Confirmation UI
│   > EditUserModal.tsx        # Update user modal
│   > Modal.tsx                # Reusable Modal Confirmation UI
│   > Loading.tsx              # Reusable loading UI
│   > LoadingOverlay.tsx       # loading UI after Confirmation
│   > ErrorMessage.tsx         # Error UI
│   > EmptyState.tsx           # Empty state UI
│   > ConfirmAction.tsx        # Reusable Confirmation UI
│
|--hooks/
│   > useUsers.tsx             # Centralized user logic
│
|--pages/
│   > Dashboard.tsx            # Main dashboard UI
```

---

🧠 Key Concepts Demonstrated

* Separation of concerns (API, hooks, UI)
* Custom React Hooks for reusable logic
* Conditional rendering
* Controlled components and forms
* State management with `useState`
* Side effects with `useEffect`
* Modal handling and UI state control
* Clean commit history using **conventional commits**

---

🚀 Getting Started

```bash
npm install
npm run dev
```

---

📌 Notes

* This project focuses on **frontend logic and UI behavior**
* Backend behavior is simulated using mock data
* Styling is intentionally minimal to prioritize structure and logic
* All data changes occur on the client side

---

👤 Author

-> Awan (Sidiq Hikmawan)
Junior Frontend Developer

---

> This project is built for portfolio and learning purposes, following real-world frontend development practices.
