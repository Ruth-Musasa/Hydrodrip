// import { Outlet } from "react-router-dom";

// export default function Root() {
//   return <Outlet />;
// }
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Root = () => {
  return (
    <div>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
