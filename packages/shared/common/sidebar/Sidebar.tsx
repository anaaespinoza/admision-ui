"use client";

import { LogoutOutlined, PersonOutline, ExpandMore } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Tooltip,
  Divider,
  Stack,
  Collapse,
  Typography,
} from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

import { getNavByRole, type NavSection } from "@/packages/lib/Navigation";

const RAIL_CLOSED = 80;
const RAIL_OPEN = 250;

type Props = {
  children: React.ReactNode;
};

export default function Sidebar({ children }: Props) {
  const Panel = "Mi perfil";
  const sections = getNavByRole("aspirante");
  const router = useRouter();
  const pathname = usePathname();

  const [expanded, setExpanded] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const handleSectionClick = (section: NavSection) => {
    if (!expanded) {
      setExpanded(true);
      setOpenSection(section.key);
      return;
    }
    setOpenSection(openSection === section.key ? null : section.key);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Box
        sx={{
          width: expanded ? RAIL_OPEN : RAIL_CLOSED,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: expanded ? "flex-start" : "center",
          py: 1.5,
          borderRight: "1px solid",
          borderColor: "divider",
          position: "fixed",
          left: 0,
          top: "80px",
          height: "calc(100vh - 80px)",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "background.paper",
          transition: "width 0.25s ease",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <Box
          onClick={() => setExpanded(!expanded)}
          sx={{
            width: expanded ? RAIL_OPEN : RAIL_CLOSED,
            display: "flex",
            justifyContent: expanded ? "flex-start" : "center",
            px: expanded ? 1.5 : 0,
            mb: 1,
            cursor: "pointer",
          }}
        >
          <Box
            component="img"
            src={
              expanded
                ? "/assets/logos/tsjColor.png"
                : "/assets/logos/IsotipoTSJ-BJcRq50-.svg"
            }
            alt="Logo"
            sx={{
              width: expanded ? 200 : 40,
              height: "auto",
              maxHeight: 80,
              objectFit: "contain",
              objectPosition: "left",
              transition: "width 0.25s ease",
            }}
          />
        </Box>

        <Stack spacing={0.5} sx={{ width: "100%" }}>
          {sections.map((section) => {
            const isOpen = openSection === section.key;
            const hasActiveItem = section.items.some(
              (item) => pathname === item.path,
            );

            return (
              <Box key={section.key}>
                <Tooltip
                  title={!expanded ? section.label : ""}
                  placement="right"
                >
                  <IconButton
                    onClick={() => handleSectionClick(section)}
                    sx={{
                      width: "100%",
                      borderRadius: 2,
                      justifyContent: expanded ? "flex-start" : "center",
                      px: expanded ? 1.5 : 0,
                      py: 1,
                      gap: 1.5,
                      color:
                        hasActiveItem || isOpen
                          ? "primary.main"
                          : "text.secondary",
                      backgroundColor:
                        hasActiveItem || isOpen ? "primary.50" : "transparent",
                      "&:hover": {
                        backgroundColor: isOpen
                          ? "primary.100"
                          : "action.hover",
                      },
                      transition: "all 0.15s ease",
                    }}
                  >
                    <section.Icon sx={{ fontSize: 30, flexShrink: 0 }} />
                    {expanded && (
                      <>
                        <Typography
                          variant="body2"
                          sx={{
                            flex: 1,
                            textAlign: "left",
                            fontSize: "0.9rem",
                            fontWeight: isOpen ? 600 : 400,
                          }}
                        >
                          {section.label}
                        </Typography>
                        {isOpen && (
                          <ExpandMore
                            sx={{
                              fontSize: 20,
                              transform: isOpen ? "rotate(180deg)" : "none",
                              transition: "transform 0.2s ease",
                            }}
                          />
                        )}
                      </>
                    )}
                  </IconButton>
                </Tooltip>

                {expanded && (
                  <Collapse in={isOpen}>
                    <Stack
                      sx={{
                        pl: 1,
                        py: 1,
                        ml: 3,
                      }}
                    >
                      {section.items.map((item) => {
                        const isActiveItem = pathname === item.path;
                        return (
                          <Box
                            key={item.path}
                            onClick={() => router.push(item.path)}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              position: "relative",
                              pl: 3,
                              py: 0.75,
                              cursor: "pointer",
                              color: isActiveItem
                                ? "primary.main"
                                : "text.secondary",

                              "&::after": {
                                content: '""',
                                position: "absolute",
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: "1px",
                                backgroundColor: "divider",
                              },
                              "&:last-child::after": {
                                bottom: "50%",
                              },
                              "&::before": {
                                content: '""',
                                position: "absolute",
                                left: 0,
                                top: "50%",
                                width: "12px",
                                height: "1px",
                                backgroundColor: "divider",
                              },

                              "&:hover": { backgroundColor: "action.hover" },
                              transition: "all 0.15s ease",
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                fontSize: "0.78rem",
                                fontWeight: isActiveItem ? 600 : 400,
                              }}
                            >
                              {item.label}
                            </Typography>
                          </Box>
                        );
                      })}
                    </Stack>
                  </Collapse>
                )}
              </Box>
            );
          })}
        </Stack>

        <Box sx={{ flex: 1 }} />
        <Divider sx={{ width: "80%", mb: 1, alignSelf: "center" }} />

        <Stack
          spacing={0.5}
          alignItems={expanded ? "flex-start" : "center"}
          sx={{ width: "100%", px: expanded ? 1 : 0 }}
        >
          <Tooltip title={!expanded ? "Mi Perfil" : ""} placement="right">
            <IconButton
              sx={{
                width: expanded ? "100%" : 40,
                height: 40,
                justifyContent: expanded ? "flex-start" : "center",
                gap: 1,
                px: expanded ? 1.5 : 0,
                color: "text.secondary",
                borderRadius: 2,
              }}
              onClick={() => router.push("/perfil")}
            >
              <PersonOutline sx={{ fontSize: 30, flexShrink: 0 }} />
              {expanded && (
                <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                  {Panel}
                </Typography>
              )}
            </IconButton>
          </Tooltip>

          <Tooltip title={!expanded ? "Cerrar sesión" : ""} placement="right">
            <IconButton
              sx={{
                width: expanded ? "100%" : 40,
                height: 40,
                justifyContent: expanded ? "flex-start" : "center",
                gap: 1,
                px: expanded ? 1.5 : 0,
                color: "text.secondary",
                borderRadius: 2,
              }}
              onClick={() => router.push("/login")}
            >
              <LogoutOutlined sx={{ fontSize: 30, flexShrink: 0 }} />
              {expanded && (
                <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                  Cerrar sesión
                </Typography>
              )}
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: `${expanded ? RAIL_OPEN : RAIL_CLOSED}px`,
          transition: "margin-left 0.25s ease",
          overflow: "auto",
          height: "100vh",
          backgroundColor: "background.default",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
