"use client";

import { PersonAddOutlined, SearchOutlined } from "@mui/icons-material";
import { useState } from "react";

import { getCurp } from "@/packages/utils/getCurp";

interface RegisterFormProps {
    onSubmit?: (data: {
        curp: string;
        nombreCompleto: string;
        correo: string;
        celular: string;
    }) => void;
    onCurpSearch?: (curp: string) => void;
}

export default function RegisterForm({
    onSubmit,
    onCurpSearch,
}: RegisterFormProps) {
    const [curp, setCurp] = useState("");
    const [nombreCompleto, setNombreCompleto] = useState("");
    const [correo, setCorreo] = useState("");
    const [celular, setCelular] = useState("");
    const [curpLoading, setCurpLoading] = useState(false);
    const [curpError, setCurpError] = useState("");
    const [nombreVisible, setNombreVisible] = useState(false);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onSubmit?.({ curp, nombreCompleto, correo, celular });
    };

    const handleCurpSearch = async () => {
        if (!curp || curp.length < 18) {
            setCurpError("Ingresa una CURP válida de 18 caracteres");
            return;
        }

        setCurpLoading(true);
        setCurpError("");
        setNombreVisible(false);

        try {
            const data = await getCurp(curp);
            const nombre = [data.name, data.firstName, data.secondName]
                .filter(Boolean)
                .join(" ");
            setNombreCompleto(nombre);
            setNombreVisible(true);
            onCurpSearch?.(curp);
        } catch (err: unknown) {
            console.error("getCurp error:", err);
            const error = err as { msn?: string };
            setCurpError(error?.msn ?? "Error al consultar la CURP");
            setNombreCompleto("");
        } finally {
            setCurpLoading(false);
        }
    };

    return (
        <>
            <style>{`
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                @keyframes fadeSlideIn {
                    from { opacity: 0; transform: translateY(-6px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50%       { transform: scale(0.94); }
                }
                .search-btn {
                    background: #111;
                    border: none;
                    border-radius: 6px;
                    width: 40px;
                    min-width: 40px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    transition: background 0.2s, transform 0.15s;
                }
                .search-btn:hover:not(:disabled) {
                    background: #333;
                    transform: scale(1.06);
                }
                .search-btn:active:not(:disabled) {
                    animation: pulse 0.2s ease;
                }
                .search-btn:disabled {
                    background: #555;
                    cursor: not-allowed;
                }
                .search-btn .spinner {
                    animation: spin 0.7s linear infinite;
                    display: flex;
                }
                .nombre-field {
                    animation: fadeSlideIn 0.35s ease forwards;
                }
                .submit-btn {
                    width: 100%;
                    padding: 0.85rem;
                    background: #111;
                    color: #fff;
                    border: none;
                    border-radius: 8px;
                    font-size: 1rem;
                    cursor: pointer;
                    font-family: var(--font-madani-regular);
                    transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
                }
                .submit-btn:hover {
                    background: #333;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 14px rgba(0,0,0,0.25);
                }
                .submit-btn:active {
                    transform: translateY(0px);
                    box-shadow: none;
                }
            `}</style>

            <div
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "2rem",
                    width: "100%",
                    maxWidth: "380px",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
                    <span><PersonAddOutlined /></span>
                    <h2 style={{ margin: 0, fontSize: "1.5rem", color: "#111", fontFamily: "var(--font-madani-bold)" }}>
                        Nuevo Aspirante
                    </h2>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label style={labelStyle}>CURP</label>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                        <input
                            type="text"
                            value={curp}
                            onChange={(e) => {
                                setCurp(e.target.value.toUpperCase());
                                setCurpError("");
                            }}
                            placeholder="AAAA000000XXXXXX00"
                            maxLength={18}
                            style={inputStyle}
                        />
                        <button
                            onClick={handleCurpSearch}
                            disabled={curpLoading}
                            className="search-btn"
                            title="Buscar CURP"
                        >
                            <span className={curpLoading ? "spinner" : ""}>
                                <SearchOutlined sx={{ fontSize: 18 }} />
                            </span>
                        </button>
                    </div>
                    {curpError && (
                        <p style={{ margin: "0.3rem 0 0", fontSize: "0.75rem", color: "#d32f2f", fontFamily: "var(--font-madani-regular)" }}>
                            {curpError}
                        </p>
                    )}
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label style={labelStyle}>Nombre Completo</label>
                    <input
                        key={nombreCompleto}
                        type="text"
                        value={nombreCompleto}
                        placeholder="Nombre(s) Apellido Paterno Apellido Materno"
                        disabled
                        className={nombreVisible ? "nombre-field" : ""}
                        style={{ ...inputStyle, ...inputDisabledStyle }}
                    />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label style={labelStyle}>Correo Electrónico</label>
                    <input
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        placeholder="ejemplo@correo.com"
                        style={inputStyle}
                    />
                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                    <label style={labelStyle}>Número de Celular</label>
                    <input
                        type="tel"
                        value={celular}
                        onChange={(e) => setCelular(e.target.value)}
                        placeholder="55 1234 5678"
                        style={inputStyle}
                    />
                </div>
                <button onClick={handleSubmit} className="submit-btn">
                    Registrarte
                </button>
                <p style={{ marginTop: "1rem", fontSize: "0.72rem", color: "#888", textAlign: "center", lineHeight: 1.5, fontFamily: "var(--font-madani-regular)" }}>
                    Al hacer clic en &quot;Registrarte&quot;, aceptas nuestros{" "}
                    <a href="#" style={{ color: "#111", fontFamily: "var(--font-madani-bold)" }}>Términos y Condiciones</a>{" "}
                    y nuestra{" "}
                    <a href="#" style={{ color: "#111", fontFamily: "var(--font-madani-bold)" }}>Política de Privacidad</a>.
                </p>
            </div>
        </>
    );
}

const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.6rem 0.75rem",
    border: "none",
    borderRadius: "6px",
    background: "#f0f0f0",
    fontSize: "0.875rem",
    color: "#333",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "var(--font-madani-light)",
};

const inputDisabledStyle: React.CSSProperties = {
    background: "#e8e8e8",
    color: "#aaa",
    cursor: "not-allowed",
};

const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.875rem",
    color: "#333",
    marginBottom: "0.4rem",
    fontFamily: "var(--font-madani-regular)",
};