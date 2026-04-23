"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";

interface FooterLink {
  id: string;
  label: string;
  href: string;
}

interface FooterProps {
  year?: number;
  institutionName?: string;
  links?: FooterLink[];
}

export default function Footer({
  year = 2026,
  institutionName = "Institución Educativa",
  links = [
    { id: "ayuda", label: "Ayuda", href: "#" },
    { id: "contacto", label: "Contacto", href: "#" },
    { id: "privacidad", label: "Privacidad", href: "#" },
  ],
}: FooterProps) {
  return (
    <footer>
      <Box sx={{ background: "#373A3A", py: "2rem" }}>
        <Container maxWidth="xl" disableGutters sx={{ px: 3 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              alignItems: "center",
              mb: "2rem",
            }}
          >
            <Box
              sx={{
                gridColumn: "1 / 3",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Image
                src="/assets/logos/sicytBco.png"
                alt="SICYT"
                width={180}
                height={60}
                style={{ objectFit: "contain", maxHeight: 60 }}
              />
            </Box>
            <Box
              sx={{
                gridColumn: "3 / 5",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src="/assets/logos/tsjBco.png"
                alt="Tecnológico Superior de Jalisco"
                width={180}
                height={60}
                style={{ objectFit: "contain", maxHeight: 60 }}
              />
            </Box>
            <Box
              sx={{
                gridColumn: "5 / 7",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Image
                src="/assets/logos/jaliscoBco.png"
                alt="Jalisco Gobierno del Estado"
                width={180}
                height={60}
                style={{ objectFit: "contain", maxHeight: 60 }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                gridColumn: "2 / 3",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src="/assets/logos/educacionBco.png"
                alt="Secretaría de Educación Pública"
                width={180}
                height={60}
                style={{ objectFit: "contain", maxHeight: 60 }}
              />
            </Box>

            <Box
              sx={{
                gridColumn: "5 / 6",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src="/assets/logos/tecnmBco.png"
                alt="Tecnológico Nacional de México"
                width={180}
                height={60}
                style={{ objectFit: "contain", maxHeight: 60 }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          background: "#f7f7f7",
          borderTop: "1px solid #e5e5e5",
          py: "1.25rem",
          px: "2rem",
          textAlign: "center",
          zIndex: 10,
        }}
      >
        <Box
          component="p"
          sx={{
            m: 0,
            fontSize: "0.8rem",
            color: "#666",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
            fontFamily: "var(--font-madani-regular)",
          }}
        >
          <Box component="span">
            © {year} {institutionName}. Todos los derechos reservados.
          </Box>
          <Box component="span" sx={{ color: "#ccc" }}>
            |
          </Box>
          {links.map((link, i) => (
            <Box
              component="span"
              key={link.id}
              sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <Box
                component="a"
                href={link.href}
                sx={{
                  color: "#555",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-madani-regular)",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {link.label}
              </Box>
              {i !== links.length - 1 && (
                <Box component="span" sx={{ color: "#ccc" }}>
                  ·
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </footer>
  );
}
