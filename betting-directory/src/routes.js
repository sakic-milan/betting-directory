import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import Categories from "./Components/Categories";
import Contact from "./Components/Contact";
import SubmitWebsite from "./Components/SubmitWebsite";
import About from "./Components/About";
import ExclusiveBonuses from "./Components/ExclusiveBonuses";
import Blog from "./Components/Blog";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import FolderIcon from "@material-ui/icons/Folder";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import AddBoxIcon from "@material-ui/icons/AddBox";
import InfoIcon from "@material-ui/icons/Info";
import DescriptionIcon from "@material-ui/icons/Description";

export const ROUTES = {
  public: [
    {
      name: "Home",
      component: Home,
      path: "/",
      icon: HomeIcon,
      inDrawer: true,
    },
    {
      name: "Categories",
      component: Categories,
      path: "/categories",
      icon: FolderIcon,
      inDrawer: true,
    },
    {
      name: "Exclusive Bonuses",
      component: ExclusiveBonuses,
      path: "/exclusive-bonuses",
      icon: LocalOfferIcon,
      inDrawer: true,
    },
    {
      name: "Blog",
      component: Blog,
      path: "/blog",
      icon: DescriptionIcon,
      inDrawer: true,
    },

    {
      name: "Contact",
      component: Contact,
      path: "/contact",
      icon: MailIcon,
      inDrawerFooter: true,
    },
    {
      name: "Submit website",
      component: SubmitWebsite,
      path: "/submit",
      icon: AddBoxIcon,
      inDrawerFooter: true,
    },
    {
      name: "About",
      component: About,
      path: "/about",
      icon: InfoIcon,
      inDrawerFooter: true,
    },
  ],
};
