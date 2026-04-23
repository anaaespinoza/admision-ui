"use client";

import { Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const RIGHT_PANEL_WIDTH = 250;
const NAVBAR_HEIGHT = 80;

export default function RightPanel() {
  return (
    <Box
      sx={{
        position: "fixed",
        right: 0,
        top: `${NAVBAR_HEIGHT}px`,
        width: RIGHT_PANEL_WIDTH,
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        borderLeft: "1px solid",
        borderColor: "divider",
        bgcolor: "background.default",
        p: 2,
        overflowY: "auto",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          sx={{
            width: "100%",
            "& .MuiPickersCalendarHeader-root": {
              justifyContent: "center",
            },
          }}
        />
      </LocalizationProvider>
    </Box>
  );
}
