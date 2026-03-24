"use client";

import {
    HelpOutline,
    LockOutlined,
    MailOutline,
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";
import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    OutlinedInput,
    Tooltip,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ROUTES_WITH_LOGIN = ["/", "/admision"];

export default function NavbarLoginFields() {
    const pathname = usePathname();
    const [showPassword, setShowPassword] = useState(false);

    if (!ROUTES_WITH_LOGIN.includes(pathname)) return null;

    return (
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <OutlinedInput
                placeholder="Correo Electrónico"
                size="small"
                type="email"
                startAdornment={
                    <InputAdornment position="start">
                        <MailOutline sx={{ fontSize: 18, color: "rgba(255,255,255,0.6)" }} />
                    </InputAdornment>
                }
                sx={inputSx}
            />
            <OutlinedInput
                placeholder="Contraseña"
                size="small"
                type={showPassword ? "text" : "password"}
                startAdornment={
                    <InputAdornment position="start">
                        <LockOutlined sx={{ fontSize: 18, color: "rgba(255,255,255,0.6)" }} />
                    </InputAdornment>
                }
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={() => setShowPassword((prev) => !prev)}
                            edge="end"
                            size="small"
                            sx={{ color: "rgba(255,255,255,0.6)" }}
                        >
                            {showPassword
                                ? <VisibilityOff sx={{ fontSize: 18 }} />
                                : <Visibility sx={{ fontSize: 18 }} />
                            }
                        </IconButton>
                    </InputAdornment>
                }
                sx={inputSx}
            />
            <Tooltip title="Recuperar Contraseña" arrow>
                <IconButton
                    component={Link}
                    href="/recuperar-cuenta"
                    sx={{ color: "rgba(255,255,255,0.7)", "&:hover": { color: "#fff" } }}
                >
                    <HelpOutline sx={{ fontSize: 20 }} />
                </IconButton>
            </Tooltip>
            <Button
                variant="outlined"
                sx={{
                    color: "#fff",
                    borderColor: "#fff",
                    fontFamily: "var(--font-madani-regular)",
                    whiteSpace: "nowrap",
                    textTransform: "none",
                    height: "40px",
                    transition: "transform 0.15s ease, background-color 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                        borderColor: "#fff",
                        backgroundColor: "rgba(255,255,255,0.1)",
                        transform: "translateY(-1px)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                    },
                    "&:active": {
                        transform: "translateY(0px)",
                        boxShadow: "none",
                    },
                }}
            >
                Iniciar Sesión
            </Button>
        </Box>
    );
}

const inputSx = {
    color: "#fff",
    fontFamily: "var(--font-madani-regular)",
    height: "40px",
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(255,255,255,0.25)",
        borderRadius: "8px",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(255,255,255,0.6)",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#fff",
    },
    "& input": {
        fontFamily: "var(--font-madani-regular)",
        color: "#fff",
        fontSize: "0.875rem",
        "&::placeholder": {
            color: "rgba(255,255,255,0.5)",
            opacity: 1,
        },
    },
};