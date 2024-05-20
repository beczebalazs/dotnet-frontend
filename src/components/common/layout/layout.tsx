import { FC, ReactNode } from "react";

import LogoutIcon from "@mui/icons-material/Logout";
import { Button, Stack, Theme, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router";

import ApplicationBar from "./application-bar/application-bar";
import { styles } from "./layout.styles";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddCardIcon from "@mui/icons-material/AddCard";
import GroupIcon from "@mui/icons-material/Group";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import useGetCurrentUserQuery from "../../../hooks/user/useGetCurrentUserQuery";
import LoginIcon from "@mui/icons-material/Login";
import { useAppDispatch } from "../../../store/redux";
import { setUserId } from "../../../store/auth/slice";
import { useQueryClient } from "@tanstack/react-query";

type LayoutProps = {
  children: ReactNode;
  isScrollable?: boolean;
};

const clientMenuItems = [
  {
    key: "user-details",
    href: "/user-details",
    label: "Profile",
    icon: (
      <AccountBoxIcon sx={{ mr: { xs: 0, lg: 2 }, ml: { xs: 0, lg: 1 } }} />
    ),
  },
  {
    key: "buy-membership",
    href: "/buy-membership",
    label: "Buy membership",
    icon: <AddCardIcon sx={{ mr: { xs: 0, lg: 2 }, ml: { xs: 0, lg: 1 } }} />,
  },
];

const adminMenuItems = [
  {
    key: "clients",
    href: "/clients",
    label: "Clients",
    icon: <GroupIcon sx={{ mr: { xs: 0, lg: 2 }, ml: { xs: 0, lg: 1 } }} />,
  },
  {
    key: "gyms",
    href: "/gyms",
    label: "Gyms",
    icon: (
      <FitnessCenterIcon sx={{ mr: { xs: 0, lg: 2 }, ml: { xs: 0, lg: 1 } }} />
    ),
  },
  {
    key: "memberships",
    href: "/memberships",
    label: "Memberships",
    icon: (
      <CardMembershipIcon sx={{ mr: { xs: 0, lg: 2 }, ml: { xs: 0, lg: 1 } }} />
    ),
  },
];

const Layout: FC<LayoutProps> = ({ children, isScrollable = true }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isDownLg = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("lg")
  );

  const queryClient = useQueryClient();

  const user = useGetCurrentUserQuery();

  return (
    <Stack sx={{ height: "100vh" }}>
      <ApplicationBar />
      <Box sx={styles.layout}>
        {!isDownLg && (
          <Box sx={styles.sideBar}>
            <Box sx={styles.menuItems}>
              {user.data?.role === "client" &&
                clientMenuItems.map((item) => (
                  <Button
                    key={item.key}
                    onClick={() => {
                      if (typeof item.href === "string") {
                        navigate(item.href);
                      }
                    }}
                    startIcon={item.icon}
                    sx={styles.menuItem(`${location.pathname}` === item.href)}
                  >
                    {item.label}
                  </Button>
                ))}
              {user.data?.role === "admin" &&
                adminMenuItems.map((item: any) => (
                  <Button
                    key={item.key}
                    onClick={() => {
                      if (typeof item.href === "string") {
                        navigate(item.href);
                      }
                    }}
                    startIcon={item.icon}
                    sx={styles.menuItem(`${location.pathname}` === item.href)}
                  >
                    {item.label}
                  </Button>
                ))}
              {user.data?.role !== "client" && user.data?.role !== "admin" && (
                <Button
                  key={"login"}
                  onClick={() => {
                    navigate("/login");
                  }}
                  startIcon={<LoginIcon />}
                  sx={styles.menuItem()}
                >
                  Login
                </Button>
              )}
            </Box>
            <Button
              color="secondary"
              data-testid="side-bar__menu-items__logout"
              startIcon={
                <LogoutIcon
                  sx={{ mr: { xs: 0, lg: 2 }, ml: { xs: 0, lg: 1 } }}
                />
              }
              sx={{
                mt: "auto",
                mb: 2,
                width: "100%",
                ...styles.logout,
              }}
              onClick={async () => {
                dispatch(setUserId(undefined));
                navigate('/login')
                await queryClient.invalidateQueries({
                  queryKey: ["currentUser"],
                });
              }}
            >
              Log out
            </Button>
          </Box>
        )}
        <Box
          component="main"
          sx={{
            ...styles.main,
            overflowY: !isScrollable ? "hidden" : "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </Stack>
  );
};
export default Layout;
