import Product from "./pages/ Products";
import AboutUs from "./pages/AboutUs.tsx";
import FAQs from "./pages/FAQs.tsx";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SmartWaterMetter from "./pages/SmartWaterMeters.tsx";
import WaterCredit from "./pages/WaterCredit";
import ContactUs from "./pages/contactUs /index.tsx";



interface Router {
  element: JSX.Element;
  path: string;
  children?: Router[];
}

export const navigations: Router[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Product />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/water-credit",
    element: <WaterCredit />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/faqs",
    element: <FAQs/>,
  },
  {
    path: "/smart-water-metter",
    element: <SmartWaterMetter/>,
  },
  {
    path: "/faqs",
    element: <FAQs/>,
  },
];



export const routers: Router[] = navigations.map((navigation) => ({
  path: navigation.path,
  element: navigation.element,
  children: navigation.children,
}))