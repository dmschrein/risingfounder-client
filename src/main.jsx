import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { FormProvider } from "./context/FormContext";
import NicheQuiz from "./pages/NicheQuiz";
import Success from "./pages/Success";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import SingleBlog from "./pages/SingleBlog";

const baseApiUrl = "https://api.risingfounder.io"|| "http://localhost:3000";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/sucess",
        element: <Success />,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
        loader: async ({ params }) => {
          const response = await fetch(`${baseApiUrl}/blogs/${params.id}`)
          return response.json();
        },
      },
      {
        path: "/quiz",
        element: (
          <FormProvider>
            {" "}
            <NicheQuiz />{" "}
          </FormProvider>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);
