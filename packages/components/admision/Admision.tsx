import { RegisterForm } from "@/packages/shared/common";

import Hero from "./Hero";

export default function Admision() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "calc(100vh - 60px)",
            }}
        >
            <main
                style={{
                    flex: 1,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    overflow: "hidden",
                }}
            >
                <Hero />
                <div
                    style={{
                        position: "relative",
                        zIndex: 10,
                        padding: "2rem",
                        marginRight: "4rem",
                    }}
                >
                    <RegisterForm />
                </div>
            </main>
        </div>
    );
}