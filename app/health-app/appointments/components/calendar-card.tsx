"use client";

import { useState } from "react";

import { Card } from "@/components/health-app-components/card";
import { Calendar } from "@/components/ui/calendar";

const CalendarCard = () => {
    const [date, setDate] = useState(new Date());

    return (
        <Card title="Calendar">
            <div className="w-full">
                <Calendar mode="single" today={date} />
            </div>

            <div className="border-t">
                <div className="p-8">
                    <div className="border-l-8 border-[#FA9874]">
                        <div className="p-3 space-y-2">
                            <div className="text-sm text-muted-foreground">11.30 - 12.00 (30 min)</div>
                            <div className="text-sm font-semibold">Dr. Alison Ogaga</div>
                            <div className="text-sm text-muted-foreground">St. Mary's Hospital</div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default CalendarCard;
