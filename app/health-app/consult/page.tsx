"use client";

import { PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import TabFilter from "./components/tab-filter";
import ConsultationsDataTable from "./components/consultations-data-table";
import { Consultation } from "@/types/health-app.types";

const ConsultDoctorPage = () => {
    const [activeTab, setActiveTab] = useState("ongoing");
    const [consultations] = useState<Consultation[]>([
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
        <div className="p-4 space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold mb-2">Consult a Doctor</h1>
                    <p className="text-gray-500">Check and filter all your medical appointments here </p>
                </div>

                <div className="mt-4 lg:mt-0">
                    <Button className="flex items-center gap-2 text-md">
                        <PlusCircle className="w-5 h-5" />
                        New Consultation
                    </Button>
                </div>
            </div>

            <TabFilter consultations={consultations} activeTab={activeTab} setActiveTab={handleTabChange} />

            <ConsultationsDataTable consultations={consultations} />
        </div>
    );
};

export default ConsultDoctorPage;
