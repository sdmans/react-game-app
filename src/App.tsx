import Main from "./components/Main";
import {
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
