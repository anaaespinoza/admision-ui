"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
  activeTab: string;
  onChange: (tab: string) => void;
};

const TAB_COLORS: Record<string, string> = {
  Todos: "var(--navyBlue)",
  Presenciales: "var(--red)",
  "En Línea": "var(--green)",
  Maestrías: "var(--orange)",
};
export default function CategoryTabs({ activeTab, onChange }: Props) {
  const tabs = ["Todos", "Presenciales", "En Línea", "Maestrías"];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        mb: 6,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 0.5, md: 4 },
          px: { xs: 1, md: 2 },
          py: 1.5,
          borderRadius: "999px",
          backgroundColor: "#ffffff",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.05)",
        }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <Box
              key={tab}
              onClick={() => onChange(tab)}
              sx={{
                px: { xs: 1.5, md: 4 },
                py: 1.2,
                borderRadius: "999px",
                cursor: "pointer",
                transition: "all 0.25s ease",
                backgroundColor: isActive ? TAB_COLORS[tab] : "transparent",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "0.8rem", md: "1rem" },
                  color: isActive ? "#fff" : "#5b6573",
                  whiteSpace: "nowrap",
                }}
              >
                {tab}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
