import { Bell } from "lucide-react";

import { MobileSidebar } from "@/components/health-app-components/mobile-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
    return (
        <div className="flex items-center p-4 bg-white">
            <MobileSidebar />

            <div className="flex w-full justify-between items-center">
                <Input placeholder="Search here..." className="w-1/2 mr-24 py-5 bg-gray-200/20" />
                <div className="flex items-center gap-2">
                    <Button variant="ghost" className="bg-gray-200 rounded-full w-12 h-12">
                        <Bell className="w-12 h-12" />
                    </Button>
                    <Avatar className="w-12 h-12 border">
                        <AvatarImage src="/avatar-male.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
