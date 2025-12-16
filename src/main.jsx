import React from "react";
import { ClerkProvider } from "@clerk/clerk-react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home";
import "./index.css";
import { createRoot } from "react-dom/client";
import Dashboard from "./routes/Dashboard";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

//Routes configurations
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router={router} />
  </ClerkProvider>
);
