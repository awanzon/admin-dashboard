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

> Data & State Management

* **Mock API (`MockUsers.js`)** – Simulates backend user data
* **Custom Hook (`useUsers.jsx`)** – Centralized logic for data fetching, CRUD, loading, and error states
* **Axios API Layer** – Abstracted API calls for better separation of concerns

> UI & UX

* **User List & User Card** – Clear separation between data looping and presentation
* **User Detail Modal** – View detailed user information
* **Search & Filter** – Search users by name, phone, or email
* **Loading State** – Reusable loading component
* **Error Handling** – Graceful error UI for failed requests
* **Empty State** – Clear feedback when no data matches the search

----------

🚧 In Progress

* **Tailwind CSS Integration** – Refactoring UI styles using Tailwind for scalability and consistency

----------

### 📝 Planned

* **Next.js Migration**

  * File-based routing
  * SEO improvements
  * Server-side rendering (SSR)
  * Production-ready setup
* Pagination
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

---

📁 Project Structure

```
src/
|--data/
│   -- api/
│      > users.js              # Axios API layer
│   -- mocks/
│      > MockUsers.js          # Mock user data
│
|--components/
│   > UserList.jsx             # Loop and render users
│   > UserCard.jsx             # Individual user display
│   > UserDetail.jsx           # User detail modal
│   > CreateUserModal.jsx      # Create user modal
│   > EditUserModal.jsx        # Update user modal
│   > Loading.jsx              # Reusable loading UI
│   > ErrorMessage.jsx         # Error UI
│   > EmptyState.jsx           # Empty state UI
│
|--hooks/
│   > useUsers.jsx             # Centralized user logic
│
|--pages/
│   > Dashboard.jsx            # Main dashboard UI
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
