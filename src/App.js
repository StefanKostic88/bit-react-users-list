import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import HomePage from "./Pages/HomePage";
import CardOverview from "./Pages/CardOverview";

const dataFils = require("./assets/usersData/usersData.json");

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <HomePage data={dataFils.results} /> },
        {
          path: "/cardoverview",
          element: <CardOverview data={dataFils.results} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
