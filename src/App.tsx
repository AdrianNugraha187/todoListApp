import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HeroSection from "./pages/HeroSection";
import About from "./pages/About";
import TodoPage from "./features/todos/components/TodoPage";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: HeroSection,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "todolist",
        Component: TodoPage,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
