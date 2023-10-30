"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Consultation } from "@/types/health-app.types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const columns: ColumnDef<Consultation>[] = [
    {
        header: "Name",
        cell: ({ row }) => {
            const consultation = row.original;

            // get a random number, 0 or 1
            const random = Math.round(Math.random());

            return (
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <Avatar className="w-12 h-12 border">
                            <AvatarImage src={random === 1 ? "/avatar-female.png" : "/avatar-male.png"} />
                            <AvatarFallback>
                                {consultation.doctor.split(" ")[1][0] + "" + consultation.doctor.split(" ")[2][0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className="absolute bottom-0 right-1 w-3 h-3 bg-green-600 rounded-full"></div>
                    </div>
                    <div className="flex flex-col">
                        <div className="font-semibold">{consultation.doctor}</div>
                        <div className="text-gray-500 text-sm">{consultation.specialization}</div>
                    </div>
                </div>
            );
        },
    },
    {
        header: "Address",
        cell: ({ row }) => {
            const consultation = row.original;

            return (
                <div className="flex flex-col">
                    <div>{consultation.hospital}</div>
                    <div className="text-gray-500 text-sm">{consultation.lastConversation?.substring(0, 120)}...</div>
                </div>
            );
        },
    },
    {
        header: "Date and Time",
        cell: ({ row }) => {
            const consultation = row.original;

            return (
                <div className="flex flex-col">
                    <div>
                        {" "}
                        {new Date(consultation.date).toLocaleDateString("en-GB", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </div>
                    <div className="text-gray-500 text-sm">{consultation.time}</div>
                </div>
            );
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const consultation = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => alert(consultation.id)}>Copy Consultation ID</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
