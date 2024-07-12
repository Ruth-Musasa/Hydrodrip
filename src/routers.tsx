import Product from "./pages/ Products";
import AboutUs from "./pages/AboutUs.tsx";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import WaterCredit from "./pages/WaterCredit";



interface Router {
  element: JSX.Element;
  path: string;
  children?: Router[];
}

export const navigations: Router[] = [
  {
    path: "/",
    element:<Home/> ,
  },
  {
    path: "/products",
    element:<Product/> ,
  },
  {
    path: "/projects",
    element:<Projects/> ,
  },
  {
    path: "/water-credit",
    element:<WaterCredit/> ,
  },
  {
    path: "/about-us",
    element:<AboutUs/> ,
  },
  // {
  //   path: "/contacts",
  //   element:<Contacts/> ,
  // },

];



export const routers: Router[] = navigations.map((navigation) => ({
  path: navigation.path,
  element: navigation.element,
  children: navigation.children,
}))