"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpDown, ListFilter, PlusCircle, Search } from "lucide-react";
import TabFilter from "./components/tab-filter";
import { useState } from "react";
import { Consultation } from "@/types/health-app.types";
import CalendarCard from "./components/calendar-card";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./components/visit-columns";

const AppointmentsPage = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [consultations] = useState<Consultation[]>([
        {
            id: 1,
            date: "2023-10-27",
            patientName: "John Doe",
            diagnosis: "Flu",
            time: "10:00 AM",
            doctor: "Dr. Alison Ogaga",
            hospital: "Cottage Medicare Hospital",
            specialization: "General Practitioner",
            subject: "Cottage Medicare Hospital",
            lastConversation: "18 Iwaya Rd, Yaba 101245",
        },
        {
            id: 1,
            date: "2023-10-27",
            patientName: "John Doe",
            diagnosis: "Flu",
            time: "10:00 AM",
            doctor: "Dr. Jennifer Johnson",
            hospital: "St. Mary's Hospital",
            specialization: "Primary Care Physician",
            subject: "I have a rash",
            lastConversation: "48, Ijaiye road, Ogba, (Beside UBA, Ikeja)",
        },
        {
            id: 1,
            date: "2023-10-27",
            patientName: "John Doe",
            diagnosis: "Flu",
            time: "10:00 AM",
            doctor: "Dr. Samuel Smith",
            hospital: "St. Mary's Hospital",
            specialization: "Mental Health Professional",
            subject: "I'm suffering from anxiety",
            lastConversation: "1B, Williams Street, Off Diya street, Behind GTBank, Sawmill, Gbagada,",
        },
        {
            id: 1,
            date: "2023-10-27",
            patientName: "John Doe",
            diagnosis: "Flu",
            time: "10:00 AM",
            doctor: "Dr. Alison Ogaga",
            hospital: "St. Mary's Hospital",
            specialization: "General Practitioner",
            subject: "I'm feeling uneasy",
            lastConversation: "27, Aljahi Masha Road, By Masha B/stop, Surulere, Lagos",
        },
        {
            id: 1,
            date: "2023-10-27",
            patientName: "John Doe",
            diagnosis: "Flu",
            time: "10:00 AM",
            doctor: "Dr. Jennifer Johnson",
            hospital: "St. Mary's Hospital",
            specialization: "Primary Care Physician",
            subject: "I have a rash",
            lastConversation: "Let's run some tests to understand better what might be causing these symptoms.",
        },
        {
            id: 1,
            date: "2023-10-27",
            patientName: "John Doe",
            diagnosis: "Flu",
            time: "10:00 AM",
            doctor: "Dr. Samuel Smith",
            hospital: "St. Mary's Hospital",
            specialization: "Mental Health Professional",
            subject: "I'm suffering from anxiety",
            lastConversation:
                "Good afternoon. It's important that we address this. Anxiety can significantly impact your quality of life. Let's explore some strategies and perhaps treatments that can help you manage your anxiety effectively.",
        },
        {
            id: 1,
            date: "2023-10-27",
            patientName: "John Doe",
            diagnosis: "Flu",
            time: "10:00 AM",
            doctor: "Dr. Alison Ogaga",
            hospital: "St. Mary's Hospital",
            specialization: "General Practitioner",
            subject: "I'm feeling uneasy",
            lastConversation:
                "Good morning. I'm sorry to hear that you're not feeling well. Can you tell me more about your symptoms? How long have you been feeling this way?",
        },
        {
            id: 1,
            date: "2023-10-27",
            patientName: "John Doe",
            diagnosis: "Flu",
            time: "10:00 AM",
            doctor: "Dr. Jennifer Johnson",
            hospital: "St. Mary's Hospital",
            specialization: "Primary Care Physician",
            subject: "I have a rash",
            lastConversation: "Let's run some tests to understand better what might be causing these symptoms.",
        },
        {
            id: 1,
            date: "2023-10-27",
            patientName: "John Doe",
            diagnosis: "Flu",
            time: "10:00 AM",
            doctor: "Dr. Samuel Smith",
            hospital: "St. Mary's Hospital",
            specialization: "Mental Health Professional",
            subject: "I'm suffering from anxiety",
            lastConversation:
                "Good afternoon. It's important that we address this. Anxiety can significantly impact your quality of life. Let's explore some strategies and perhaps treatments that can help you manage your anxiety effectively.",
        },
        {
            id: 1,
            date: "2023-10-27",
            patientName: "John Doe",
            diagnosis: "Flu",
            time: "10:00 AM",
            doctor: "Dr. Alison Ogaga",
            hospital: "St. Mary's Hospital",
            specialization: "General Practitioner",
            subject: "I'm feeling uneasy",
            lastConversation:
                "Good morning. I'm sorry to hear that you're not feeling well. Can you tell me more about your symptoms? How long have you been feeling this way?",
        },
        {
            id: 1,
            date: "2023-10-27",
            patientName: "John Doe",
            diagnosis: "Flu",
            time: "10:00 AM",
            doctor: "Dr. Jennifer Johnson",
            hospital: "St. Mary's Hospital",
            specialization: "Primary Care Physician",
            subject: "I have a rash",
            lastConversation: "Let's run some tests to understand better what might be causing these symptoms.",
        },
        {
            id: 1,
            date: "2023-10-27",
            patientName: "John Doe",
            diagnosis: "Flu",
            time: "10:00 AM",
            doctor: "Dr. Samuel Smith",
            hospital: "St. Mary's Hospital",
            specialization: "Mental Health Professional",
            subject: "I'm suffering from anxiety",
            lastConversation:
                "Good afternoon. It's important that we address this. Anxiety can significantly impact your quality of life. Let's explore some strategies and perhaps treatments that can help you manage your anxiety effectively.",
        },
    ]);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };
    return (
        <div>
            <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold mb-2">My Appointments</h1>
                        <p className="text-gray-500">Check and filter all your medical appointments here </p>
                    </div>

                    <div>
                        <Button className="flex items-center gap-2 text-md">
                            <PlusCircle className="w-5 h-5" />
                            New Appointment
                        </Button>
                    </div>
                </div>

                <TabFilter consultations={consultations} activeTab={activeTab} setActiveTab={handleTabChange} />

                <div className="flex items-start gap-4">
                    <div className="w-1/4">
                        <CalendarCard />
                    </div>
                    <div className="w-3/4">
                        <div className="flex items-center justify-between py-2">
                            <h4 className="text-xl font-semibold">All Visits</h4>
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" className="flex items-center gap-2 text-sm text-gray-500">
                                    <Search className="w-5 h-5" />
                                    Search
                                </Button>
                                <Button variant="ghost" className="flex items-center gap-2 text-sm text-gray-500">
                                    <ListFilter className="w-5 h-5" />
                                    Filter
                                </Button>
                                <Button variant="ghost" className="flex items-center gap-2 text-sm text-gray-500">
                                    <ArrowUpDown className="w-5 h-5" />
                                    Sort
                                </Button>
                            </div>
                        </div>
                        <DataTable data={consultations} columns={columns} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentsPage;
