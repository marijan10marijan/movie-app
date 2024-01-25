import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from "react";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies/:id",
    element: <MoviePage />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
