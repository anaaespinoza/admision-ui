"use client";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Typography, TextField, MenuItem } from "@mui/material";
import { Fragment, useState } from "react";

import type { Question } from "../types/question";

type Props = {
  question: Question;
  index: number;
  total: number;
  showIndicator?: boolean;
  indicatorColor?: string;
  showIcon?: boolean;
};

export default function QuestionCard({
  question,
  index,
  total,
  showIndicator,
  indicatorColor,
  showIcon = true,
}: Props) {
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(
    {},
  );

  const renderComponents = () => {
    const getColumns = () => {
      const hasOther = question.components.some(
        (c) => c.type === "select" && c.allowOther,
      );
      const effectiveLength = question.components.length + (hasOther ? 1 : 0);

      if (effectiveLength === 1) return "minmax(0, 1fr)";
      if (effectiveLength === 2) return "repeat(2, minmax(0, 1fr))";
      return "repeat(3, minmax(0, 1fr))";
    };
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: getColumns(),
          },
          gap: 2,
          alignItems: "end",
        }}
      >
        {question.components.map((comp) => {
          switch (comp.type) {
            case "text":
              return (
                <Box key={`${question.id}-${comp.id}`} sx={{ width: "100%" }}>
                  {comp.label && (
                    <Typography sx={{ mb: 0.5, fontWeight: 500 }}>
                      {comp.label}
                    </Typography>
                  )}
                  <TextField
                    fullWidth
                    size="small"
                    placeholder={comp.placeholder}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "18px",
                      },
                    }}
                  />
                </Box>
              );

            case "select":
              return (
                <Fragment key={`${question.id}-${comp.id}`}>
                  <Box sx={{ width: "100%" }}>
                    {comp.label && (
                      <Typography sx={{ mb: 0.5, fontWeight: 500 }}>
                        {comp.label}
                      </Typography>
                    )}
                    <TextField
                      select
                      fullWidth
                      size="small"
                      value={selectedValues[comp.id] ?? ""}
                      onChange={(e) =>
                        setSelectedValues((prev) => ({
                          ...prev,
                          [comp.id]: e.target.value,
                        }))
                      }
                      SelectProps={{
                        IconComponent: KeyboardArrowDownIcon,
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px",
                        },
                      }}
                    >
                      {comp.options?.map((opt) => (
                        <MenuItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>

                  {comp.allowOther && (
                    <Box sx={{ width: "100%" }}>
                      <Typography
                        sx={{ mb: 0.5, fontWeight: 500, visibility: "hidden" }}
                      >
                        placeholder
                      </Typography>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="Especifica..."
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "12px",
                          },
                        }}
                      />
                    </Box>
                  )}
                </Fragment>
              );

            case "radio":
              return (
                <Box key={`${question.id}-${comp.id}`} sx={{ width: "100%" }}>
                  {comp.label && (
                    <Typography sx={{ mb: 1, fontWeight: 500 }}>
                      {comp.label}
                    </Typography>
                  )}

                  {comp.options.map((opt) => {
                    const isSelected = selectedValues[comp.id] === opt.value;

                    return (
                      <Box
                        key={opt.value}
                        onClick={() =>
                          setSelectedValues((prev) => ({
                            ...prev,
                            [comp.id]: opt.value,
                          }))
                        }
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          px: 1,
                          py: 1,
                          mb: 1,
                          borderRadius: "8px",
                          backgroundColor: "transparent",
                          border: "none",
                          cursor: "pointer",
                          "&:hover": {
                            backgroundColor: "#F9FAFB",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 20,
                            height: 20,
                            borderRadius: "50%",
                            backgroundColor: isSelected
                              ? indicatorColor || "#3B82F6"
                              : "transparent",
                            border: isSelected ? "none" : "2px solid #D1D5DB",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          {isSelected && (
                            <Box
                              sx={{
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                backgroundColor: "#FFFFFF",
                              }}
                            />
                          )}
                        </Box>
                        <Typography>{opt.label}</Typography>
                      </Box>
                    );
                  })}

                  {selectedValues[comp.id] === "si" && (
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="Especifica por favor..."
                      sx={{
                        mt: 1,
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px",
                        },
                      }}
                    />
                  )}
                </Box>
              );

            default:
              return null;
          }
        })}
      </Box>
    );
  };
  return (
    <Box
      sx={{
        position: "relative",
        border: "1px solid #E0E0E0",
        borderRadius: 3,
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.08)",
        p: 3,
        mb: 2,

        ...(showIndicator && {
          "&::before": {
            content: '""',
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: "6px",
            backgroundColor: indicatorColor || "#16A34A",
            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px",
          },
        }),
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        {showIcon && question.icon && (
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: "16px",
              backgroundColor: question.iconColor
                ? `color-mix(in srgb, ${question.iconColor} 15%, white)`
                : "#EEF2F6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 2,
            }}
          >
            <Box sx={{ color: "#3B82F6", fontSize: 28, lineHeight: 0 }}>
              {question.icon}
            </Box>
          </Box>
        )}

        <Box>
          <Typography variant="caption" color="text.secondary">
            Pregunta {index + 1} de {total}
          </Typography>

          <Typography variant="h6" fontWeight="bold">
            {question.title}
          </Typography>
        </Box>
      </Box>

      {renderComponents()}
    </Box>
  );
}
