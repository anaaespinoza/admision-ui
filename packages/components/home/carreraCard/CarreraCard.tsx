"use client";
import {
  ArrowBackIosNewOutlined,
  FileDownloadOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export interface CarreraCardProps {
  title: string;
  text: string;
  modalidad: "Presencial" | "En línea";
  turno: string;
  image: string;
  unidades?: string[];
  expanded?: boolean;
  onExpandChange?: (event: React.SyntheticEvent, expanded: boolean) => void;
}

export default function CarreraCard({
  title,
  text,
  modalidad,
  turno,
  image,
  unidades = [],
}: CarreraCardProps) {
  const [showUnidades, setShowUnidades] = useState(false);

  return (
    <Card
      sx={{
        boxShadow: 3,
        borderRadius: 5,
        width: "100%",
        minHeight: 368,
        position: "relative",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: showUnidades
            ? "rgba(0, 0, 0, 0.72)"
            : "rgba(0, 0, 0, 0.6)",
          zIndex: 0,
          transition: "background-color 0.3s ease",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "368px",
          p: "16px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {!showUnidades ? (
          <>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              <Chip
                label={modalidad}
                size="small"
                sx={
                  modalidad === "En línea"
                    ? {
                        backgroundColor: "var(--green)",
                        color: "#fff",
                        fontWeight: "bold",
                        border: "none",
                      }
                    : {
                        backgroundColor: "var(--red)",
                        color: "#fff",
                        fontWeight: "bold",
                        border: "none",
                      }
                }
              />
              {turno !== "Flexible" && (
                <Chip
                  label={turno}
                  size="small"
                  sx={{
                    backgroundColor: "var(--orange)",
                    color: "#fff",
                    fontWeight: "bold",
                    border: "none",
                  }}
                />
              )}
            </Box>

            <Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                mb={1}
                sx={{ color: "white" }}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                mb={1}
                sx={{
                  minHeight: "3rem",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                {text}
              </Typography>

              {unidades.length > 0 && (
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<LocationOnOutlined fontSize="small" />}
                  onClick={() => setShowUnidades(true)}
                  sx={{
                    mb: 2,
                    textTransform: "none",
                    borderRadius: "20px",
                    borderColor: "rgba(255,255,255,0.35)",
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "0.7rem",
                    "&:hover": {
                      borderColor: "white",
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  Unidades Académicas
                </Button>
              )}

              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <FileDownloadOutlined fontSize="small" sx={{ color: "#fff" }} />
                <Typography
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  Folleto
                </Typography>
              </Box>
            </Box>
          </>
        ) : (
          <>
            {/* Header vista unidades */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: "white" }}
              >
                {title}
              </Typography>
              <Button
                size="small"
                variant="text"
                onClick={() => setShowUnidades(false)}
                sx={{
                  minWidth: "auto",
                  p: 0.5,
                  color: "#fff",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                }}
              >
                <ArrowBackIosNewOutlined sx={{ fontSize: 16 }} />
              </Button>
            </Box>

            <Typography
              variant="caption"
              fontWeight="bold"
              sx={{
                textTransform: "uppercase",
                mb: 1.5,
                letterSpacing: "0.08em",
                color: "#FFFFFF",
                display: "block",
              }}
            >
              Unidades académicas
            </Typography>

            <List dense disablePadding sx={{ overflowY: "auto", flexGrow: 1 }}>
              {unidades.map((unidad) => (
                <ListItem
                  key={unidad}
                  disablePadding
                  sx={{
                    mb: 1,
                    px: 1.5,
                    py: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    background: "#373A3A",
                    borderRadius: 3,
                    transition: "background 0.2s ease",
                  }}
                >
                  <LocationOnOutlined
                    sx={{
                      fontSize: 15,
                      flexShrink: 0,
                      color: "#FFFFFF",
                    }}
                  />
                  <ListItemText
                    primary={unidad}
                    primaryTypographyProps={{
                      variant: "body2",
                      sx: {
                        color: "rgba(255,255,255,0.92)",
                        fontWeight: 400,
                        lineHeight: 1.3,
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>

            <Divider
              sx={{ mt: 1, mb: 1.5, borderColor: "rgba(255,255,255,0.15)" }}
            />

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <FileDownloadOutlined fontSize="small" sx={{ color: "#fff" }} />
              <Typography
                variant="body2"
                sx={{ cursor: "pointer", fontWeight: "bold", color: "#fff" }}
              >
                Folleto
              </Typography>
            </Box>
          </>
        )}
      </Box>
    </Card>
  );
}
