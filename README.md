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

- **User List** – Display users fetched from API
- **Search** – Search users by name
- **User Detail Modal** – View user details in a popup/modal
- **Loading State** – Show loading indicator while fetching data
- **Error Handling** – Graceful UI for API errors and failed requests
- **UseUsers.jsx** - Create Custom Hook to seperate logic and UI from Dashboard.jsx
- **Loading.jsx** - set loading that can be use for any components 
- **Filter** – Filter users based on conditions
- **UseCard.jsx** - seperate UserList(Loop Data) and UserCard (Show Specific User Detail)
- **MockUsers.js** - Create Mock Api (data users)
- **EmptyState.jsx** - if the data users is empty
- **ErrorMessage.jsx** - add error message UI

 🚧 In Progress

-**add Create, Read, Update, and Delete logic** - CRUD 


 📝 Planned

- **Tailwind Styling** - Add Tailwind CSS and refactor style for all the UI 
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
 │  --api/
 │      > users.js        # Axios API layer
 |  --mocks/
 |      > MockUsers.js    # Mock data (development)
 |--components/
 │      > UserList.jsx    # List & Detail button
 │      > UserCard.jsx    # 
 │      > UserDetail.jsx  # Modal (popup View detail Users)
 |--pages/
 │      > Dashboard.jsx   # Parent here
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
* Backend is simulated using a public API / mock data(data is changeable in useUsers.jsx).
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
