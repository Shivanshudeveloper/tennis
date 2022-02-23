import { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Box, Button, Divider, Drawer, ListItem, Typography, useMediaQuery } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { ChartBar as ChartBarIcon } from "../icons/chart-bar";
import { Cog as CogIcon } from "../icons/cog";
import { Lock as LockIcon } from "../icons/lock";
import { Selector as SelectorIcon } from "../icons/selector";
import { ShoppingBag as ShoppingBagIcon } from "../icons/shopping-bag";
import { User as UserIcon } from "../icons/user";
import { UserAdd as UserAddIcon } from "../icons/user-add";
import { Users as UsersIcon } from "../icons/users";
import { XCircle as XCircleIcon } from "../icons/x-circle";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { Logo } from "./logo";
import { NavItem } from "./nav-item";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const items = [
  {
    href: "/reservations",
    icon: <CalendarTodayIcon fontSize="small" />,
    title: "Calendar",
  },
  {
    href: "/",
    icon: <ChartBarIcon fontSize="small" />,
    title: "Dashboard",
  },
  {
    href: "/customers",
    icon: <UsersIcon fontSize="small" />,
    title: "Members",
  },
  {
    href: "/analytics",
    icon: <AnalyticsIcon fontSize="small" />,
    title: "Analytics",
  },
  // {
  //   href: "/account",
  //   icon: <CogIcon fontSize="small" />,
  //   title: "Settings",
  // },
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  const [settOpen, setSettOpen] = useState(false);

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const openSubSetting = () => {
    const subSettingElement = document.getElementById("SubSetts");
    subSettingElement && subSettingElement.classList.toggle("SubSetting");
    setSettOpen(true);
  };

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink href="/" passHref>
              <a>
                <Logo
                  sx={{
                    height: 42,
                    width: 42,
                  }}
                />
              </a>
            </NextLink>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
          ))}
          <ListItem
            disableGutters
            sx={{
              display: "flex",
              mb: 0.5,
              py: 0,
              px: 2,
            }}
            onClick={() => {
              openSubSetting();
              setSettOpen(!settOpen);
            }}
          >
            <Button
              component="a"
              startIcon={<CogIcon fontSize="small" />}
              disableRipple
              sx={{
                backgroundColor: settOpen && "rgba(255,255,255, 0.08)",
                borderRadius: 1,
                color: settOpen ? "secondary.main" : "neutral.300",
                fontWeight: settOpen && "fontWeightBold",
                justifyContent: "flex-start",
                px: 3,
                textAlign: "left",
                textTransform: "none",
                width: "100%",
                "& .MuiButton-startIcon": {
                  color: settOpen ? "secondary.main" : "neutral.400",
                },
                "&:hover": {
                  backgroundColor: "rgba(255,255,255, 0.08)",
                },
              }}
            >
              <Box sx={{ flexGrow: 1 }}>Settings</Box>
              {settOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </Button>
          </ListItem>

          <div className="SubSetting" id="SubSetts">
            <NavItem
              key={"CourtSettings"}
              icon={<ArrowRightAltIcon fontSize="small" />}
              href={"/courtSettings"}
              title={"Court Settings"}
            />
            <NavItem
              key={"ClubSettings"}
              icon={<ArrowRightAltIcon fontSize="small" />}
              href={"/clubSettings"}
              title={"Club Settings"}
            />
            <NavItem
              key={"Payments"}
              icon={<ArrowRightAltIcon fontSize="small" />}
              href={"/paymentsSettings"}
              title={"Payments"}
            />
          </div>
        </Box>
        <Divider sx={{ borderColor: "#2D3748" }} />
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
