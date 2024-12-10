import {createBrowserRouter } from "react-router-dom";

export const createRouter = () =>
  createBrowserRouter(
    [
      {
        path: "/",
        lazy: async () => {
          const { PostRoute } = await import("./Routerpage")
          return { Component: PostRoute }
        },
      },
    ],
    {
      basename: import.meta.env.BASE_URL,
    }
  );
