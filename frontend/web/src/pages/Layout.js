import { Outlet, useLocation } from "react-router-dom";
import NavigationDrawer from "../components/layout/NavigationDrawer";
import { Grid } from "@mui/material";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useEffect, useState } from "react";

const getPageName = (route) => {
  var pageName;
  switch (route) {
    case "/":
      pageName = "Dashboard";
      break;
    case "/students":
      pageName = "Students";
      break;
    default:
      pageName = "Dashboard";
      break;
  }
  return pageName;
};

function Layout() {
  const location = useLocation();
  const pageName = getPageName(location.pathname);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openDrawer, setOpenDrawer] = useState(false);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Grid container columns={16} sx={{ backgroundColor: "#FAFAFBFF" }}>
      <Grid item md={windowWidth > 1194 ? 3 : 0} sm={0} xs={0} lg={3}>
        <NavigationDrawer
          windowWidth={windowWidth}
          openDrawer={openDrawer}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Grid>
      <Grid item md={windowWidth > 1194 ? 13 : 16} sm={16} xs={16} lg={13}>
        <Grid container>
          <Grid item md={12} sm={12} xs={12} lg={12}>
            <Header
              pageName={pageName}
              windowWidth={windowWidth}
              handleDrawerToggle={handleDrawerToggle}
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12} lg={12}>
            <Outlet />
          </Grid>
          <Grid item md={12} sm={12} xs={12} lg={12}>
            <Footer />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Layout;
