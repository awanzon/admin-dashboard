 🧭 Admin Dashboard – User Management

 📌 Overview

This project simulates an **internal admin dashboard** used by support or operations teams to manage user data.
It focuses on **real-world frontend workflows** such as data fetching, state management, CRUD operations, and clean component architecture.

The goal of this project is to demonstrate my readiness as a **junior frontend developer**, using patterns and practices commonly found in startup and production React applications.

---

 🎯 Project Goals

- Practice real-world frontend architecture
- Separate UI concerns from business and data logic
- Implement common admin features used in real products
- Write clean, readable, and maintainable React + TypeScript code
- Prepare a portfolio-ready project aligned with job market needs

---

 ✨ Features

 Core CRUD Functionality
- **Create User** – Add new users via modal form
- **Read User** – Display user list and detailed user view
- **Update User** – Edit user information via modal with confirmation
- **Delete User** – Delete user with confirmation dialog
- **Bulk Delete** – Multi-select checkbox with bulk delete confirmation

 Data & State Management
- **Real API** – Fetches live data from [JSONPlaceholder](https://jsonplaceholder.typicode.com)
- **Mock Data (`mockUsers.ts`)** – Simulates backend data for offline development
- **Custom Hooks** – Centralized logic for data fetching, CRUD, loading, and error states
- **Axios API Layer** – Abstracted API calls for clean separation of concerns
- **Search Debounce** – Delays search filtering until user stops typing

 UI & UX
- **Search & Filter** – Search by name, phone, or email; filter by ID or name initial
- **Pagination** – Client-side pagination with Prev/Next and page numbers
- **Toast Notification** – Success/error feedback for all CRUD operations
- **Loading State** – Reusable loading spinner component
- **Loading Overlay** – Overlay shown during async operations after confirmation
- **Empty State** – Clear feedback when no results match search/filter
- **Error Handling** – Graceful error UI for failed API requests
- **Tailwind CSS** – Utility-first styling for scalable and consistent UI

---

 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| React | UI library |
| TypeScript | Type safety |
| Vite | Build tool & dev server |
| Axios | HTTP client for API calls |
| Tailwind CSS | Utility-first styling |
| Git & GitHub | Version control with conventional commits |

---

 📁 Project Structure

```
src/
├── data/
│   ├── api/
│   │   └── users.ts           # Axios API layer (CRUD operations)
│   └── mocks/
│       └── mockUsers.ts       # Mock user data for offline development
│
├── components/
│   ├── BulkDeleteModal.tsx    # Confirmation modal for bulk delete
│   ├── ConfirmAction.tsx      # Reusable confirmation UI
│   ├── CreateUserModal.tsx    # Create user form modal
│   ├── DeleteUserModal.tsx    # Delete confirmation modal
│   ├── EditUserModal.tsx      # Edit user form modal
│   ├── EmptyState.tsx         # Empty state UI
│   ├── ErrorMessage.tsx       # Error state UI
│   ├── Loading.tsx            # Reusable loading spinner
│   ├── LoadingOverlay.tsx     # Overlay during async operations
│   ├── Modal.tsx              # Reusable modal wrapper
│   ├── Pagination.tsx         # Pagination controls
│   ├── Toasts.tsx             # Individual toast notification
│   ├── ToastContainer.tsx     # Toast notification container
│   ├── UserCard.tsx           # Individual user row display
│   ├── UserDetail.tsx         # User detail modal
│   └── UserList.tsx           # User list renderer
│
├── hooks/
│   ├── useDebounce.ts         # Generic debounce hook
│   ├── useToast.ts            # Toast state and logic
│   └── useUsers.ts            # Centralized user data and CRUD logic
│
├── pages/
│   └── Dashboard.tsx          # Main dashboard page
│
├── types/
│   ├── toast.ts               # Toast type definitions
│   └── user.ts                # User and Address interface definitions
│
└── utils/
    └── filter.ts              # FilterType definitions
```

---

 🧠 Key Concepts Demonstrated

- Separation of concerns (API layer, hooks, UI components)
- Custom React Hooks for reusable and centralized logic
- TypeScript interfaces and type safety across all layers
- Controlled components and form handling
- State management with `useState` and `useEffect`
- Async operations with loading and error states
- Modal and UI state management
- Debounced search for performance optimization
- Clean commit history using **Conventional Commits**

---

 🚀 Getting Started

```bash
npm install
npm run dev
```

---

 📌 Notes

- This project focuses on **frontend logic and UI behavior**
- Data is fetched from JSONPlaceholder (fake REST API) — changes are simulated client-side only
- Mock data (`mockUsers.ts`) is available as a fallback for offline development
- Styling prioritizes structure and logic over visual polish

---

 📝 Planned

- File-based routing
- Form validation improvements
- Retry button on API errors
- Accessibility improvements
- Basic unit testing
- SSR / production-ready setup

---

 👤 Author

**Awan (Sidiq Hikmawan)**
Junior Frontend Developer

> This project is built for portfolio and learning purposes, following real-world frontend development practices.