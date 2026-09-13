# 🛠️ Technology Stack Manager

A modern and responsive **Technology Stack Manager** built with React and TypeScript. Users can explore different technologies, add their favorite technologies to a personal stack, and easily remove individual technologies or clear the entire stack.

## 🚀 Technologies Used

* ⚛️ React
* 🔷 TypeScript
* 🎨 Tailwind CSS
* ⚡ Vite
* 🔔 React Toastify
* ⭐ React Icons

## ✨ Features

### 1. 🔍 Explore Technologies

Browse different technologies with useful information such as their name, category, icon, and other details.

### 2. ➕ Add Technologies to Stack

Add your favorite technologies to your personal stack with a single click. The interface prevents duplicate technologies from being added.

### 3. 🗑️ Manage Your Stack

Easily remove individual technologies from your stack or use **Remove All** to clear the entire stack.

## 📱 Responsive Design

The project is fully responsive and works smoothly across:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

## 🎯 Project Goal

The main goal of this project is to practice **React state management, component communication, TypeScript, conditional rendering, and responsive UI development** while building a practical application.

---

### 👨‍💻 Built with ❤️ using React + TypeScript


## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript/TypeScript. React uses JSX to make UI code easier to read and build.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.
**State** is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets us create and update state in a React component. I used it to store the selected technologies in my stack and update them when technologies are added or removed.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders. I used it to fetch and load technology data from the JSON file when the component starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item in a list. It allows React to efficiently update the correct item when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

For example, I showed an empty stack message when no technology was selected:

```tsx
{selectTechnologies.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <StackCard />
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using **props**. A child can send data back by calling a function that the parent passes as a prop.

For example, the parent can pass `setSelectedTechnologies` to the child, and the child can call it to update the parent's state.
