import App from "@/App";
import MainLayout from "@/components/layouts/MainLayout";
import PaymentsManager from "@/components/Payments/PaymentsMeneger";

import AboutPostsPage from "@/pages/posts/AboutPostsPage";
import HomePostsPage from "@/pages/posts/HomePostsPage";
import MainPosts from "@/pages/posts/MainPosts";
import PaginationInfinite from "@/pages/posts/PaginationInfinitePage";
import PostFormPage from "@/pages/posts/PostFormPage";
import SolutionPage from "@/pages/SolutionPage";

import { Component } from "react";
import { createBrowserRouter } from "react-router-dom";

export const routers = [
  {
    Component: MainLayout,
    path: "/",
    children: [
      {
        Component: PaymentsManager,
        path: "manager",
        handler: {
          title: "managerMoney",
        },
      },
      {
        Component: MainPosts,
        path: "posts",
        handler: {
          title: "Posts + Pagination",
        },
        children: [
          {
            Component: AboutPostsPage,
            path: "about",
            handler: {
              title: "About",
            },
          },
          {
            Component: HomePostsPage,
            // index: true,
            path: "",
            handler: {
              title: "Posts",
            },
          },

          {
            Component: PostFormPage,
            path: "form",
            handler: {
              title: "Post Form",
            },
          },
          {
            Component: PaginationInfinite,
            path: "posts-infinite-scroll",
            handler: {
              title: "Pagination + Infinite Scroll",
            },
          },
        ],
      },
      {
        Component: SolutionPage,
        path: "",
        handler: {
          title: "Task",
        },
      },
    ],
  },
];

const router = createBrowserRouter(routers);
export default router;
