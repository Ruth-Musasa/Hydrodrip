import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import { routers } from "./routers";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: routers,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
