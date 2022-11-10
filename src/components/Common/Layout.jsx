import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Menu from "../Header/Menu";

const Layout = () => (
  <main>
    <Header />
    <Menu />
    <Outlet />
  </main>
);

export default Layout;
