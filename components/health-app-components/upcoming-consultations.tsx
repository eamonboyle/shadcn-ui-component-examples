"use client";

import { useState } from "react";
import { Card } from "./card";
import { Consultation } from "@/types/health-app.types";
import { Button } from "../ui/button";
import { Calendar, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const UpcomingConsultations = () => {
    const [consultation, setConsultation] = useState<Consultation>({
        date: "Friday, 6 July",
        time: "11:30 - 12:00 (30 min)",
        hospital: "Cottage Medicare Hospital, 18 Iwaya Rd, Yaba 101245, Lagos",
        doctor: "Dr. Alison Ogaga",
        specialization: "General Practioner",
    });

    // call the API to get the user's upcoming consultation

    return (
        <Card title="Upcoming Consultations">
            <div className="p-8">
                <div className="text-gray-500 space-y-5">
                    <h3 className="text font-semibold text-black">{consultation.date}</h3>

                    <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{consultation.time}</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Calendar className="w-6 h-6" />
                        <span className="text-sm">{consultation.hospital}</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div>
                            <Avatar className="w-10 h-10 border">
                                <AvatarImage src="/avatar-female.png" />
                                <AvatarFallback>E</AvatarFallback>
                            </Avatar>
                        </div>
                        <div>
                            <div className="font-semibold text-sm text-black">{consultation.doctor}</div>
                            <div className="text-sm">{consultation.specialization}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t p-8 flex flex-row items-center gap-2">
                <Button variant="outline">Reschedule</Button>
                <Button>Confirm appointment</Button>
            </div>
        </Card>
    );
};

export default UpcomingConsultations;
