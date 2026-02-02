// Admin Dashboard – User Management

// 📌 Overview

This project simulates an **internal admin dashboard** used by support or operations teams to manage user data. The focus is on **real-world frontend workflows**, including data fetching, UI state handling, and reusable component structure.

The project is built as part of my journey to become a **job-ready junior frontend developer**, following patterns commonly used in startups and production React applications.

---

// 🎯 Project Goals

* Practice real-world frontend architecture
* Separate UI logic from data-fetching logic
* Implement common admin features used in actual products
* Write clean, readable, and maintainable React code

---

// ✨ Features

 ✅ Implemented

- **MockUsers.js** - Create Mock Api (data users)
- **add Create, Read, Update, and Delete logic** - CRUD
- **User Detail Modal** – View user details in a popup/modal (Read)
- **Create User Modal** - add Create User modal & logic
- **Update User Modal** - add Update user
- **Delete user** - add Delete user logic

- **User List** – Display users fetched from API
- **Search** – Search users by name, phone, or email
- **Loading State** – Show loading indicator while fetching data
- **Error Handling** – Graceful UI for API errors and failed requests
- **UseUsers.jsx** - Create Custom Hook to seperate logic and UI from Dashboard.jsx

- **Loading UI** - set loading that can be use for any components 
- **Filter** – Filter users based on conditions
- **UseCard.jsx** - seperate UserList.jsx (Loop Data) and UserCard.jsx (Show Specific User Detail)
- **EmptyState.jsx** - if the data users is empty, show "no data found"
- **ErrorMessage.jsx** - add error message UI


 🚧 In Progress

- **Tailwind Styling** - Add Tailwind CSS and refactor style for all the UI 


 📝 Planned

- **Next js Upgrade** - Upgrade to Next.js (Routing, SEO, SSR, Production Setup) 
  

---

// 🛠 Tech Stack

* React
* Vite
* JavaScript (ES6+)
* Axios (API handling)
* CSS / Tailwind (UI styling)
* Git & GitHub

-------

// 📁 Project Structure

```
src/
 |--data/
 │   -api/
 │      > users.js              # Axios API layer
 |   -mocks/
 |      > MockUsers.js          # Mock data (development)
 |--components/
 │      > UserList.jsx          # Loop data user to display
 │      > UserCard.jsx          # Display List & Detail button
 │      > UserDetail.jsx        # Modal (popup View detail Users)
 │      > Loading.jsx           # Loading UI
 │      > ErrorMessage.jsx      # Error Message
 │      > EmptyState.jsx        # Show no data found
 │      > CreateUserModal.jsx   # Create new User
 │      > EditUserModal.jsx     # Update user 
 |--pages/
 │      > Dashboard.jsx         # Parent UI here
 |--hooks/
 │      > useUsers.jsx          # Parent Logic here
 │   
```

---

 🧠 Key Concepts Demonstrated

* Separation of concerns (API layer vs UI)
* Conditional rendering
* Reusable React components
* Controlled state with `useState`
* Side effects with `useEffect`
* Clean commit history using conventional commits

---

// 🚀 Getting Started

```bash
npm install
npm run dev
```

---

// 📌 Notes

* This project focuses on **frontend logic and UI behavior**.
* Backend is simulated using a Mock data / public API (data is changeable in useUsers.jsx).
* Styling is intentionally kept simple to prioritize functionality and structure.

---

// 📈 Future Improvements

* Add pagination
* Add retry button on API error
* Improve accessibility
* Add unit tests

---

// 👤 Author

**Awan(Sidiq Hikmawan)**
Junior Frontend Developer

---

> This project is intended for portfolio purposes.
