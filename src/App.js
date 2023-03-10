import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import HomePage from "./Pages/HomePage";
import CardOverview from "./Pages/CardOverview";
import { useEffect, useState } from "react";

const dataFils = require("./assets/usersData/usersData.json");

function App() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    setUsersData(() => dataFils.results);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <HomePage data={usersData} /> },

        {
          path: "/cardoverview",
          element: <CardOverview data={usersData} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
