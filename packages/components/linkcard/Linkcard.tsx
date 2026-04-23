"use client";
import { LockOutlined, OpenInNew } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import type { LinkCardProps } from "@/packages/shared/common/types/Linkcard";

export default function LinkCard({
  icon,
  title,
  description,
  buttonText,
  buttonHref,
  buttonTarget = "_blank",
  secureLabel = "Enlace Seguro",
  backgroundColor,
  buttonColor,
  buttonHoverColor,
  borderColor = "rgba(0,0,0,0.15)",
}: LinkCardProps) {
  return (
    <Box
      sx={{
        backgroundColor,
        borderRadius: 4,
        px: 4,
        py: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        maxWidth: 640,
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        minHeight: 420,

        gap: 2,
        border: `2px dashed ${borderColor}`,
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "50%",
          width: 72,
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 1,
        }}
      >
        {icon}
      </Box>

      <Typography variant="h5" fontWeight="bold" color="text.primary">
        {title}
      </Typography>

      {description && (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ maxWidth: 260, lineHeight: 1.5 }}
        >
          {description}
        </Typography>
      )}

      <Button
        variant="contained"
        href={buttonHref}
        target={buttonTarget}
        rel={buttonTarget === "_blank" ? "noopener noreferrer" : undefined}
        endIcon={<OpenInNew />}
        fullWidth
        sx={{
          mt: 1,
          py: 1.5,
          borderRadius: 2,
          backgroundColor: buttonColor,
          fontSize: "1rem",
          fontWeight: 600,
          textTransform: "none",
          "&:hover": { backgroundColor: buttonHoverColor },
          width: "100%",
          alignSelf: "stretch",
        }}
      >
        {buttonText}
      </Button>

      {secureLabel && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.75,
            color: "text.secondary",
          }}
        >
          <LockOutlined sx={{ fontSize: 16 }} />
          <Typography variant="caption" fontWeight={500}>
            {secureLabel}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
