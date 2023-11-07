import type { Metadata } from "next";
import TopBanner from "./components/top-banner";
import NavContainer from "./components/nav-container";

export const metadata: Metadata = {
    title: "NextJS shadcn-ui Component Library",
    description: "A display of what is possible with shadcn-ui and NextJS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <TopBanner />
            <NavContainer />

            {children}
        </div>
    );
}
