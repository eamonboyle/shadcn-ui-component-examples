// DashboardHeader.tsx
import { Calendar } from "lucide-react";
import React from "react";

type DashboardHeaderProps = {
    name: string;
};

const DashboardHeader = ({ name }: DashboardHeaderProps) => {
    const hours = new Date().getHours();
    let greeting = "Good evening";
    if (hours < 12) {
        greeting = "Good morning";
    } else if (hours < 18) {
        greeting = "Good afternoon";
    }

    return (
        <div className="p-4">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold mb-2">
                        {greeting}, {name}
                    </h1>
                    <p className="text-gray-500">
                        It's a sunny day today, we hope you're taking good care of your health 😊
                    </p>
                </div>

                <div className="bg-white p-4 px-8 border border-gray-200 rounded-lg flex items-center gap-5">
                    <div className="bg-gray-200 rounded-full p-3">
                        <Calendar className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                        <p className="text-gray-500 text-sm">Today's Date</p>
                        <p className="text-gray-800 font-semibold">
                            {new Date().toLocaleDateString("en-GB", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;
