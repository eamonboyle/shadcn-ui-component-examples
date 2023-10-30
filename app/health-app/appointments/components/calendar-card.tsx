"use client";

import { useState } from "react";

import { Card } from "@/components/health-app-components/card";
import { Calendar } from "@/components/ui/calendar";

const CalendarCard = () => {
    const [date, setDate] = useState(new Date());

    return (
        <Card title="Calendar">
            <div className="w-full">
                <Calendar mode="single" selected={date} className="rounded-md border" />
            </div>
        </Card>
    );
};

export default CalendarCard;
