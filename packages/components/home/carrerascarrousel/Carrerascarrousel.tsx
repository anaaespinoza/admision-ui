"use client";

import Box from "@mui/material/Box";
import { useState } from "react";

import { CarreraCard, type CarreraCardProps } from "@/packages/components";

interface CarreraCarouselProps {
  cards: Omit<CarreraCardProps, "expanded" | "onExpandChange">[];
}

const CARDS_VISIBLE = 4;

export default function CarreraCarousel({ cards }: CarreraCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openCard, setOpenCard] = useState<number | null>(null);

  const totalPages = Math.ceil(cards.length / CARDS_VISIBLE);
  const currentPage = Math.floor(currentIndex / CARDS_VISIBLE);

  const handleDotClick = (pageIndex: number) => {
    setCurrentIndex(pageIndex * CARDS_VISIBLE);
  };

  const visibleCards = cards.slice(currentIndex, currentIndex + CARDS_VISIBLE);

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(${CARDS_VISIBLE}, 1fr)`,
          gap: 2,
          minHeight: 368,
        }}
      >
        {visibleCards.map((card, i) => {
          const globalIndex = currentIndex + i;
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
                pageNum === currentPage ? "#F59E0B" : "rgba(0,0,0,0.18)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor:
                  pageNum === currentPage ? "#D97706" : "rgba(0,0,0,0.35)",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
