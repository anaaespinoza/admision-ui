import { AppBar, Box, Container, Toolbar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import NavbarLoginFields from "./NavbarLoginFields";

export default function Navbar() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#373A3A" }}>
      <Container maxWidth="xl" disableGutters sx={{ px: 3 }}>
        <Toolbar disableGutters sx={{ gap: 2, minHeight: "72px", alignItems: "center" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/">
              <Image
                src="/assets/logos/tsjBco.png"
                alt="TSJ Logo"
                height={80}
                width={140}
                style={{ objectFit: "contain", cursor: "pointer", display: "block" }}
              />
            </Link>
          </Box>
          <NavbarLoginFields />
        </Toolbar>
      </Container>
    </AppBar>
  );
}