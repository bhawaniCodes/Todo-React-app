# React + TypeScript + Vite

This template provides a minimal setup for getting started with React using Vite as the build tool, and TypeScript for type checking. It includes Hot Module Replacement (HMR) and some basic ESLint configuration.


## Features

- **React**: A powerful JavaScript library for building user interfaces, especially single-page applications.
- **TypeScript**: A typed superset of JavaScript that helps with catching errors early and improving code maintainability.
- **Vite**: A modern build tool offering fast builds and development server with HMR.
- **Tailwind CSS**: A utility-first CSS framework for designing responsive and modern user interfaces.
- **Componentization**: A structured approach to building reusable and maintainable components.
- **State Management with `useReducer`**: Simplifies state management with a more predictable and scalable approach than `useState`.
- **Performance Optimization**:
  - **`React.memo`**: Prevents unnecessary re-renders of components by memoizing them.
  - **`useMemo`**: Memoizes expensive calculations to avoid redundant computations.
  - **`useCallback`**: Memoizes callback functions to prevent their recreation on every render.
- **Simple Counter**: Includes a basic counter component that is integrated into the header for demonstration purposes.


## Additional things 
- **Bundler**: Vite uses Rollup for bundling in production.
- **Compiler**: Vite uses esbuild for transpiling JavaScript and TypeScript.

## Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Uses [SWC](https://swc.rs/) for Fast Refresh.


## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository

   npm install # Install dependencies
   npm run dev # Start/run the project


