import Navbar from "@/components/health-app-components/navbar";
import Sidebar from "@/components/health-app-components/sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "NextJS shadcn-ui Component Library",
    description: "A display of what is possible with shadcn-ui and NextJS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-96 md:flex-col md:fixed md:inset-y-0 z-[80]">
                <Sidebar />
            </div>
            <main className="md:pl-96 bg-gray-100 h-full">
                <Navbar />
                <div className="p-4">{children}</div>
            </main>
        </div>
    );
}
