"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import type { InstructionsCardProps } from "@/packages/shared/common/types/Instructionscard";

export default function InstructionsCard({
  icon,
  title,
  subtitle,
  items,
}: InstructionsCardProps) {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: 4,
        p: 5,
        maxWidth: 640,
        width: "100%",
        height: "100%",
        minHeight: 420,
        border: "1px solid #eee",
        boxShadow: "0px 8px 24px rgba(0,0,0,0.06)",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, mb: 4 }}>
        <Box
          sx={{
            backgroundColor: "#f0f0ff",
            borderRadius: 2,
            width: 56,
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </Box>

        <Box>
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
        {items.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 2.5,
              backgroundColor: "#f7f8fa",
              borderRadius: 3,
              p: 2.5,
              border: "1px solid #eee",
            }}
          >
            <Box
              sx={{
                backgroundColor: item.iconColor,
                borderRadius: "50%",
                width: 52,
                height: 52,
                minWidth: 52,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </Box>

            <Box>
              <Typography variant="body1" fontWeight="bold">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
