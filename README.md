# Proper Role-Based UI

A React application that demonstrates authentication, role-based access control, and protected routes using React Router and Ant Design.

## Features

- Login flow for student, teacher, and principal users
- Protected routes that restrict pages by role
- Access-denied page for unauthorized users
- Persistent login state using `localStorage`
- Navigation links that are available after login
- Logout support

## Role Permissions

| Role      | Accessible pages            |
| --------- | --------------------------- |
| Student   | Student                     |
| Teacher   | Student, Teacher            |
| Principal | Student, Teacher, Principal |

## Demo Credentials

All demo users use the password `123`:

| Username    | Password | Role      |
| ----------- | -------- | --------- |
| `student`   | `123`    | Student   |
| `teacher`   | `123`    | Teacher   |
| `principal` | `123`    | Principal |

> These credentials are intended for demonstration only. This project does not implement production authentication or secure password storage.

## Tech Stack

- React
- React Router
- Ant Design
- Create React App

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

```bash
npm install
```

### Run the app

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command         | Description                           |
| --------------- | ------------------------------------- |
| `npm start`     | Starts the development server         |
| `npm test`      | Runs the test suite                   |
| `npm run build` | Creates an optimized production build |

## Project Structure

```text
src/
├── components/       # Login, role pages, and protected route logic
├── context/           # Authentication context and session state
├── App.js             # Routes and application layout
└── index.js           # Application entry point
```

## Purpose

This project is intended as a learning example for implementing role-based UI access in a React application. For a production system, authentication and authorization should be handled by a secure backend rather than by client-side demo logic.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
