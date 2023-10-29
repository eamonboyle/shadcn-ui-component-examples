// components/UserProfile.tsx
import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar"; // Import the provided Avatar component
import { HealthProfile } from "@/types/health-app.types";
import { Card } from "./card";

type UserProfileProps = {
    user: HealthProfile;
};

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    return (
        <Card title="User Profile">
            <div className="flex">
                <div className="flex flex-col gap-4 p-8">
                    <Avatar className="w-24 h-24 border">
                        <AvatarImage src={user.avatar} alt={`${user.name}'s avatar`} />
                    </Avatar>
                    <h2 className="text-lg font-bold">{user.name}</h2>
                    <span className="text-gray-400">NHS ID: {user.id}</span>
                </div>
                <div className="ml-4 border-l p-8 flex-grow flex items-center">
                    <div className="grid grid-cols-4 gap-8 flex-grow">
                        <ProfileDetail label="Age" value={user.age} />
                        <ProfileDetail label="Date of Birth" value={user.dateOfBirth} />
                        <ProfileDetail label="Height" value={user.height} />
                        <ProfileDetail label="Weight" value={user.weight} />
                        <ProfileDetail label="NHS Plan" value={user.hmoPlan} />
                        <ProfileDetail label="Expires on" value={user.expiresOn} />
                        <ProfileDetail label="Status" value={user.status} />
                    </div>
                </div>
            </div>
        </Card>
    );
};

type ProfileDetailProps = {
    label: string;
    value: string;
};

const ProfileDetail: React.FC<ProfileDetailProps> = ({ label, value }) => {
    if (label === "Status")
        return (
            <div className="space-y-1">
                <div className="text-xl">{label}</div>
                <div className="text-sm font-semibold bg-green-400 text-green-800 w-fit p-2 rounded-xl">{value}</div>
            </div>
        );

    return (
        <div className="space-y-1">
            <div className="text-xl">{label}</div>
            <div className="text-2xl font-semibold">{value}</div>
        </div>
    );
};

export default UserProfile;
