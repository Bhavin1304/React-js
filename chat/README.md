
# 📘 React Chat Application

A fully functional React-based chat application featuring user authentication, routing, and global state management with **Redux Toolkit**.

---

## 🚀 Features

* 🔐 **Authentication** – Sign In & Sign Up pages
* 🏠 **User Dashboard** – Home page after login
* 💬 **Chat Page** – Dedicated chat UI
* 🌐 **React Router v6** – Client-side navigation
* 🟦 **Redux Toolkit** – Centralized state management
* 🎨 **Modular Component Structure**

---

## 📁 Project Structure

```
src/
 ├── App.jsx
 ├── index.css
 ├── index.jsx
 ├── store/
 │     └── store.js
 ├── components/
 │     ├── Chat/ChatPage.jsx
 │     ├── HomePage/UserHomePage.jsx
 │     ├── SignIn/SignIn.jsx
 │     └── SignUp/SignUp.jsx
 └── App.css
```

---

## 🧩 Entry Point (index.jsx)

Your app is wrapped with:

* **BrowserRouter** → For routing
* **Provider** → For Redux global state
* **StrictMode** → Development checks

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from "./store/store.js"
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
```

---

## 🛣 App Routes (App.jsx)

```jsx
<Routes>
  <Route path="/" element={<SignIn />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/home" element={<UserHomePage />} />
  <Route path="/chat" element={<ChatPage />} />
</Routes>
```

---

## ▶️ Getting Started

### 1. Clone the repository

```
git clone <your-repo-url>
```

### 2. Install dependencies

```
npm install
```

### 3. Start development server

```
npm run dev
```

### 4. Open in your browser

Visit: **[http://localhost:5173](http://localhost:5173)**

---

## 📜 Available Commands

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start the dev server     |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |

---

## 🧰 Technologies Used

* ⚛ **React 18**
* 🟦 **Redux Toolkit**
* 🌐 **React Router v6**
* 🧩 **Vite**
* 🎨 CSS Modules / Global CSS

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
## video








https://github.com/user-attachments/assets/2cfbfeba-8d73-40ba-a2e3-eea30ba1a13a



