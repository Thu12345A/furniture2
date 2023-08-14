import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home/Home";
import Single from "./component/Single Product/Single";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/Single Product/:id",
    element: <Single />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
