"use client";
import { Box, Typography, Container, Button, Chip } from "@mui/material";
import Image from "next/image";

import type { HeroProps } from "../types/Hero";

export default function Hero({
  title,
  subtitle,
  image,
  chipLabel,
  buttonText,
  buttonHref,
  overlay = true,
}: HeroProps) {
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Image
        src={image}
        alt="Hero image"
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          height: "90vh",
          objectFit: "cover",
        }}
      />

      {overlay && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4))",
          }}
        />
      )}

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <Container maxWidth="xl" disableGutters sx={{ px: 3 }}>
          {chipLabel && (
            <Chip
              label={chipLabel}
              sx={{
                mb: 2,
                backgroundColor: "rgba(255,255,255,0.9)",
                color: "black",
                fontWeight: 500,
              }}
            />
          )}

          <Typography variant="h2" fontWeight="bold" mb={2}>
            {title}
          </Typography>

          {subtitle && (
            <Typography variant="body1" mb={4} sx={{ maxWidth: 500 }}>
              {subtitle}
            </Typography>
          )}

          {buttonText && (
            <Button
              variant="contained"
              size="large"
              href={buttonHref}
              sx={{
                backgroundColor: "white",
                color: "black",
                width: "fit-content",
                "&:hover": { backgroundColor: "grey.200" },
              }}
            >
              {buttonText}
            </Button>
          )}
        </Container>
      </Box>
    </Box>
  );
}
