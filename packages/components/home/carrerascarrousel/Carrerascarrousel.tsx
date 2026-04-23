"use client";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

import { CarreraCard, type CarreraCardProps } from "@/packages/components";

interface CarreraCarouselProps {
  cards: Omit<CarreraCardProps, "expanded" | "onExpandChange">[];
}

function getCardsVisible(isMobile: boolean, isTablet: boolean): number {
  if (isMobile) return 1;
  if (isTablet) return 2;
  return 4;
}

export default function CarreraCarousel({ cards }: CarreraCarouselProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  const cardsVisible = getCardsVisible(isMobile, isTablet);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [openCard, setOpenCard] = useState<number | null>(null);

  const totalPages = Math.ceil(cards.length / cardsVisible);
  const currentPage = Math.floor(currentIndex / cardsVisible);

  const safeIndex =
    currentPage >= totalPages ? (totalPages - 1) * cardsVisible : currentIndex;

  const handleDotClick = (pageIndex: number) => {
    setCurrentIndex(pageIndex * cardsVisible);
  };

  const visibleCards = cards.slice(safeIndex, safeIndex + cardsVisible);

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(${cardsVisible}, 1fr)`,
          gap: 2,
          minHeight: 368,
        }}
      >
        {visibleCards.map((card, i) => {
          const globalIndex = safeIndex + i;
          return (
            <CarreraCard
              key={`${card.title}-${globalIndex}`}
              {...card}
              expanded={openCard === globalIndex}
              onExpandChange={(_, isExpanded) =>
                setOpenCard(isExpanded ? globalIndex : null)
              }
            />
          );
        })}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1.5,
          mt: 3,
        }}
      >
        {Array.from({ length: totalPages }, (_, i) => i).map((pageNum) => (
          <Box
            key={`dot-page-${pageNum}`}
            onClick={() => handleDotClick(pageNum)}
            sx={{
              width: pageNum === currentPage ? 28 : 8,
              height: 8,
              borderRadius: "999px",
              backgroundColor:
                pageNum === currentPage
                  ? "var(--navyBlue)"
                  : "rgba(0,0,0,0.18)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor:
                  pageNum === currentPage ? "var(--blue)" : "rgba(0,0,0,0.35)",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
