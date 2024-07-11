import Home from "./pages/Home";



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

];


export const routers: Router[] = navigations.map((navigation) => ({
  path: navigation.path,
  element: navigation.element,
  children: navigation.children,
}))