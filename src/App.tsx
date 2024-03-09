import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import MainPage from "./components/MainPage";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import Layout from "./components/Layout";

const routes = [
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

const routers = createBrowserRouter([
  {
    element: <Layout />,
    children: routes,
  },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
