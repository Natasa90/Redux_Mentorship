# Redux_Mentorship - Basic Redux Counter App

This project was created to help explain the basic usage of Redux, particularly how to integrate it into a simple Next.js app. It provides a step-by-step guide on setting up Redux, creating slices, managing global state, and using Redux in Next.js components.

The goal of this project is to serve as a learning resource for those who are new to Redux and need a simple example to understand how Redux can be used for state management in Next.js apps.

## Purpose

The main purpose of this app is to demonstrate:

- How to set up Redux in a Next.js project.
- How to create slices with Redux Toolkit.
- How to use `useSelector` and `useDispatch` hooks to read and update state.
- How to manage a global state (in this case, a simple counter) across the app.

This app serves as a mentorship tool to guide others through the process of integrating Redux in a basic but effective way.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Yarn (or npm)

### Installation

Clone the repository to your local machine:

```bash

git clone https://github.com/yourusername/Redux_Mentorship.git
cd Redux_Mentorship

Install the dependencies:

yarn install  # or npm install
Running the App
To start the app in development mode, run:

yarn dev  # or npm run dev
This will launch the app in your browser at http://localhost:3000.

```

APP OVERVIEW

This is a simple counter app built using Next.js and Redux. It demonstrates how to:

- Configure the Redux store.
- Create a counter slice that manages the state.
- Use the useSelector hook to access state in Next.js components.
- Use the useDispatch hook to dispatch actions that modify the state.

How Redux Works in This App

Redux Store: The store is created using configureStore from Redux Toolkit, and the counter reducer is added to it.
Counter Slice: A slice is defined to handle the counter logic, including increment and decrement actions.
Next.js Components: The CounterComponent uses useSelector to read the current counter value from the Redux store and useDispatch to dispatch actions when buttons are clicked to update the counter.

Technologies Used

1. Next.js: A React framework for building static and dynamic web applications.
2. Redux Toolkit: A set of tools for efficiently managing Redux state.
3. React-Redux: Bindings to integrate Redux with React (used in Next.js components).
4. TypeScript: For type safety and better development experience.

   
How to Contribute

If you'd like to contribute to this project, feel free to fork the repo, make changes, and submit a pull request. We welcome improvements and suggestions!

License

MIT License
