import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      {/* this Outlet inside of <AppLayout/> which is parent component */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default SideBar;
