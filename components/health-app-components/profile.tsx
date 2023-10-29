import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type ProfileProps = {
    userDetails: {
        name: string;
        age: string;
        dateOfBirth: string;
        height: string;
        weight: string;
        hmoPlan: string;
        expiresOn: string;
        status: string;
        avatar: string;
    };
};

const Profile = ({ userDetails }: ProfileProps) => {
    return (
        <div className="flex flex-col">
            <div className="flex">
                <Avatar>
                    <AvatarImage src={userDetails.avatar} alt="Avatar" />
                    <AvatarFallback>
                        {userDetails.name.split(" ")[0][0] + "" + userDetails.name.split(" ")[1][0]}
                    </AvatarFallback>
                </Avatar>
                <div className="ml-4">
                    <h2 className="text-xl font-semibold">{userDetails.name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Profile;
