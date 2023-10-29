"use client";

import { Calendar, Cross, FileClock, Home, MessageSquare } from "lucide-react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"],
});

const routes = [
    {
        label: "Dashboard",
        icon: Home,
        href: "/health-app",
        color: "text-sky-500",
    },
    {
        label: "Consult a Doctor",
        icon: MessageSquare,
        href: "/health-app/consult",
        color: "text-violet-700",
    },
    {
        label: "Appointments",
        icon: Calendar,
        href: "/health-app/appointments",
        color: "text-pink-700",
    },
    {
        label: "Medical History",
        icon: FileClock,
        href: "/health-app/history",
        color: "text-orange-700",
    },
    {
        label: "My Hospitals",
        icon: Cross,
        href: "/health-app/hospitals",
        color: "text-emerald-500",
    },
];

const Sidebar = () => {
    const pathName = usePathname();

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#FCFCFC] border-r-2">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-8">
                    <div className="relative w-8 h-8 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6">
                            <rect width={256} height={256} fill="none" />
                            <line
                                x1={208}
                                y1={128}
                                x2={128}
                                y2={208}
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={16}
                            />
                            <line
                                x1={192}
                                y1={40}
                                x2={40}
                                y2={192}
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={16}
                            />
                        </svg>
                    </div>
                    <h1 className={cn("text-2xl font-bold", montserrat.className)}>Health App</h1>
                </Link>

                <div className="space-y-2">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-[#FFECE5] rounded-lg transition",
                                route.href === pathName ? "bg-[#FFECE5]" : "text-[#101928]"
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon
                                    className={cn(
                                        "h-5 w-5 mr-3 group-hover:text-[#EB5017] transition",
                                        route.href === pathName ? "text-[#EB5017]" : "text-[#667185]"
                                    )}
                                />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
