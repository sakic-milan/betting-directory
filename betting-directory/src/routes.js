import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import Categories from "./Components/Categories";

export const ROUTES = {
  public: [
    {
      name: "Home",
      component: Home,
      path: "/",
      icon: "Home",
      inDrawer: true,
    },
    {
      name: "Categories",
      component: Categories,
      path: "/categories",
      icon: "Categories",
      inDrawer: true,
    },
    {
      name: "Home",
      component: Home,
      path: "/2",
      icon: "Home",
      inDrawer: true,
    },
    {
      name: "NotFound",
      component: NotFound,
      path: "*",
      icon: "NotFound",
      inDrawer: false,
    },
  ],
};
