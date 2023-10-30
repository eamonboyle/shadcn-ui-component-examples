"use client";

import { useState } from "react";

import DashboardHeader from "@/components/health-app-components/dashboard-header";
import HealthStats from "@/components/health-app-components/health-stats";
import QuickActions from "@/components/health-app-components/quick-actions";
import UpcomingConsultations from "@/components/health-app-components/upcoming-consultations";
import UserProfile from "@/components/health-app-components/user-profile";
import { Consultation, HealthProfile } from "@/types/health-app.types";
import RecentConsultations from "@/components/health-app-components/recent-consultations";

const HealthAppPage = () => {
    const [user] = useState<HealthProfile>({
        id: "123762323",
        name: "Eamon Boyle",
        age: "30 y/o",
        dateOfBirth: "15-05-1992",
        height: '6"',
        weight: "82 kg",
        hmoPlan: "Private",
        expiresOn: "24-07-2024",
        status: "Active",
        avatar: "/avatar-male.png ",
    });

    const [recentConsultations] = useState<Consultation[]>([
        {
            id: 1,
            date: "2023-10-27",
            patientName: "John Doe",
            diagnosis: "Flu",
            time: "10:00 AM",
            doctor: "Dr. Jane Doe",
            hospital: "St. Mary's Hospital",
            specialization: "General Practitioner",
        },
        {
            id: 2,
            date: "2023-10-27",
            patientName: "John Doe",
            diagnosis: "Flu",
            time: "10:00 AM",
            doctor: "Dr. Jane Doe",
            hospital: "St. Mary's Hospital",
            specialization: "General Practitioner",
        },
        {
            id: 3,
            date: "2023-10-27",
            patientName: "John Doe",
            diagnosis: "Flu",
            time: "10:00 AM",
            doctor: "Dr. Jane Doe",
            hospital: "St. Mary's Hospital",
            specialization: "General Practitioner",
        },
    ]);

    return (
        <div className="h-screen">
            <DashboardHeader name={user.name.split(" ")[0]} />

            <div className="flex p-4 gap-4">
                <div className="w-3/4 space-y-5">
                    <HealthStats user={user} />
                    <UserProfile user={user} />
                </div>
                <div className="w-1/4">
                    <UpcomingConsultations />
                </div>
            </div>

            <div className="flex p-4 gap-4">
                <div className="w-1/3">
                    <QuickActions />
                </div>
                <div className="w-2/3">
                    <RecentConsultations consultations={recentConsultations} />
                </div>
            </div>
        </div>
    );
};

export default HealthAppPage;
