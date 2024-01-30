import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Link,
  ListItemIcon,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import SportsTennisOutlinedIcon from "@mui/icons-material/SportsTennisOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import logo from "../../assets/logo.jpeg";

const MENU_ITEMS = [
  { name: "Dashboard", path: "/", icon: <HomeOutlinedIcon /> },
  { name: "Students", path: "/students", icon: <SchoolOutlinedIcon /> },
  { name: "Coaches", path: "/coaches", icon: <GroupsOutlinedIcon /> },
  {
    name: "Lessons & Classes",
    path: "/lessons-classes",
    icon: <SportsTennisOutlinedIcon />,
  },
  {
    name: "Events & Tournaments",
    path: "/events-tournaments",
    icon: <EventOutlinedIcon />,
  },
];

const OPERATIONAL_MENU_ITEMS = [
  { name: "Inventory", path: "/inventory", icon: <Inventory2OutlinedIcon /> },
  { name: "Finance", path: "/finance", icon: <AccountBalanceOutlinedIcon /> },
  {
    name: "Reporting & Analytics",
    path: "/reporting-analytics",
    icon: <AssessmentOutlinedIcon />,
  },
  {
    name: "Registration & Enrollment",
    path: "/registration-enrollment",
    icon: <PersonAddOutlinedIcon />,
  },
];

function NavigationDrawer({ windowWidth, openDrawer, handleDrawerToggle }) {
  const drawerWidth = windowWidth > 1194 ? "18%" : 300;
  const contentWidth = "95%";
  const location = useLocation();
  return (
    <Drawer
      anchor="left"
      variant={windowWidth > 1194 ? "permanent" : "temporary"}
      open={windowWidth > 1194 ? true : openDrawer}
      onClose={handleDrawerToggle}
      PaperProps={{
        sx: { width: drawerWidth, alignItems: "center" },
      }}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Box
        marginTop={2}
        marginBottom={3}
        component={"img"}
        src={logo}
        width={"60%"}
      />
      <List>
        {MENU_ITEMS.map((item) => (
          <Link
            key={item.path}
            component={RouterLink}
            to={item.path}
            underline="none"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ListItem
              sx={{
                width: contentWidth,
                height: 45,
                borderRadius: 2,
                backgroundColor:
                  location.pathname === item.path ? "#6D31EDFF" : "#FFFFFF",
                color:
                  location.pathname === item.path ? "#FFFFFF" : "#565D6DFF",
                marginBottom: 1,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#D3C1FAFF", // Light purple on hover
                },
                "&.Mui-selected": {
                  backgroundColor: "#6D31EDFF", // Darker purple when selected
                  color: "#FFFFFF", // White font color when selected
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color:
                    location.pathname === item.path ? "#FFFFFF" : "#565D6DFF",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={item.name}
                sx={{
                  fontWeight:
                    location.pathname === item.path ? "bold" : "normal",
                }}
              />
            </ListItem>
          </Link>
        ))}
        <Divider sx={{ borderBottomWidth: 2 }}></Divider>
      </List>
      <Typography
        fontWeight="bold"
        textAlign="left"
        marginTop={2}
        marginBottom={1}
        marginLeft={2}
        width={"80%"}
      >
        Operational Management
      </Typography>
      <List>
        {OPERATIONAL_MENU_ITEMS.map((item) => (
          <Link
            key={item.path}
            component={RouterLink}
            to={item.path}
            underline="none"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ListItem
              sx={{
                width: contentWidth,
                height: 45,
                borderRadius: 2,
                backgroundColor:
                  location.pathname === item.path ? "#6D31EDFF" : "#FFFFFF",
                color:
                  location.pathname === item.path ? "#FFFFFF" : "#565D6DFF",
                marginBottom: 1,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#D3C1FAFF", // Light purple on hover
                },
                "&.Mui-selected": {
                  backgroundColor: "#6D31EDFF", // Darker purple when selected
                  color: "#FFFFFF", // White font color when selected
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color:
                    location.pathname === item.path ? "#FFFFFF" : "#565D6DFF",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={item.name}
                sx={{
                  fontWeight:
                    location.pathname === item.path ? "bold" : "normal",
                }}
              />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
}

export default NavigationDrawer;
