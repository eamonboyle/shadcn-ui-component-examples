import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "NextJS shadcn-ui Component Library",
    description: "A display of what is possible with shadcn-ui and NextJS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex items-center justify-between px-20 pt-5">
                    <div className="header-left">
                        <Link href="/">
                            <h2 className="text-2xl font-semibold">Testing Design to Code</h2>
                        </Link>
                    </div>
                    <div className="header-right">
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="max-w-md mx-auto mt-20 flex items-center text-primary gap-4">
                    <Link href="/register-screens">Variation 1</Link>
                    <Link href="/register-screens/second">Variation 2</Link>
                </div>
                {children}
            </body>
        </html>
    );
}
