import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
// pages
import MainPage from "./components/MainPage";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
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

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <h1>Game Browser App</h1>
          <Nav />
        </header>

        <main>
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route key={index} path={route.path} element={route.element} />
              );
            })}
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
