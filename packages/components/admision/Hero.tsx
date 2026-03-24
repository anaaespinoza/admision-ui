"use client";

interface HeroProps {
    title?: string;
    subtitle?: string;
    backgroundImage?: string;
}

export default function Hero({
    title = "Aquí comienza tu futuro profesional.",
    subtitle = "Únete a nuestra comunidad.\nDa el primer paso hacia el éxito.",
    backgroundImage = "/assets/hero-bg.jpg",
}: HeroProps) {
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "absolute",
                inset: 0,
                zIndex: 0,
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.35)",
                    zIndex: 1,
                }}
            />
            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    maxWidth: "460px",
                    padding: "0 2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    height: "100%",
                    paddingBottom: "4rem",
                }}
            >
                <h1
                    style={{
                        color: "#fff",
                        fontSize: "2.6rem",
                        lineHeight: 1.15,
                        marginBottom: "1rem",
                        fontFamily: "var(--font-madani-bold)",
                    }}
                >
                    {title}
                </h1>
                <p
                    style={{
                        color: "rgba(255,255,255,0.88)",
                        fontSize: "1.05rem",
                        lineHeight: 1.6,
                        whiteSpace: "pre-line",
                        fontStyle: "italic",
                        fontFamily: "var(--font-madani-light)",
                    }}
                >
                    {subtitle}
                </p>
            </div>
        </div>
    );
}