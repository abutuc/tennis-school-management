import { Typography, Box, Grid, IconButton, Avatar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MenuIcon from "@mui/icons-material/Menu";

import avatar from "../../assets/avatar.png";

function Header({ pageName, windowWidth, handleDrawerToggle }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: 100,
      }}
    >
      <Grid container>
        <Grid
          item
          sm={4}
          md={4}
          xs={4}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 100,
          }}
        >
          {windowWidth <= 1194 && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ paddingLeft: 5, paddingRight: 3 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h4" fontWeight={"bold"}>
            {pageName}
          </Typography>
        </Grid>
        <Grid
          item
          sm={8}
          md={8}
          xs={8}
          lg={8}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            height: 100,
            paddingRight: 2,
          }}
        >
          <IconButton color="inherit">
            <NotificationsOutlinedIcon />
          </IconButton>
          <Avatar alt="Avatar" src={avatar} />
          {windowWidth > 450 && (
            <Typography variant="body1" sx={{ marginLeft: 1, marginRight: 1 }}>
              Amanda Smith
            </Typography>
          )}
          <IconButton color="inherit">
            <ArrowDropDownIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
