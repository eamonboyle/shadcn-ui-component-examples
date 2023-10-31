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
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col items-center lg:items-start p-8">
                    <Avatar className="w-24 h-24 border">
                        <AvatarImage src={user.avatar} alt={`${user.name}'s avatar`} />
                    </Avatar>
                    <h2 className="text-md font-bold mt-4">{user.name}</h2>
                    <span className="text-sm text-gray-400">NHS ID: {user.id}</span>
                </div>
                <div className="lg:ml-4 lg:border-l p-8 flex-grow flex-col flex items-center">
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8 flex-grow">
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
                <div className="text-md">{label}</div>
                <div className="text-xs font-semibold bg-green-400 text-green-800 w-fit p-1 px-2 rounded-xl">
                    {value}
                </div>
            </div>
        );

    return (
        <div className="space-y-1">
            <div className="text-sm">{label}</div>
            <div className="text-md font-semibold">{value}</div>
        </div>
    );
};

export default UserProfile;
