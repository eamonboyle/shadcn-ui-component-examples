"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { cn } from "@/lib/utils";

type RegisterComponentProps = {
    bordered?: boolean;
};

const RegisterComponent = ({ bordered }: RegisterComponentProps) => {
    // States for email, password and remember me checkbox
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const [googleModalOpen, setGoogleModalOpen] = useState(false);
    const [twitterModalOpen, setTwitterModalOpen] = useState(false);

    // Handler for login action (to be filled as needed)
    const handleRegister = () => {
        // Handle your login logic here
        setGoogleModalOpen(false);
        setTwitterModalOpen(false);
    };

    return (
        <div
            className={cn(
                "flex flex-col w-full max-w-lg p-8 mx-auto bg-white",
                bordered ? "border-[3px] rounded-xl" : ""
            )}
        >
            <div className="text-center mb-10">
                <h1 className="mb-1 text-3xl font-semibold">Register</h1>
                <p className="text-gray-400">Enter your details to get started.</p>
            </div>

            <div className="grid w-full items-center gap-1.5 mb-6">
                <Label htmlFor="email" className="uppercase">
                    First Name
                </Label>
                <Input
                    placeholder="First Name"
                    className="py-6 placeholder:text-gray-500/60 focus-visible:ring-1 focus-visible:ring-offset-1"
                    autoComplete="none"
                    autoFocus={true}
                    value={email}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>

            <div className="grid w-full items-center gap-1.5 mb-6">
                <Label htmlFor="email" className="uppercase">
                    First Name
                </Label>
                <Input
                    placeholder="First Name"
                    className="py-6 placeholder:text-gray-500/60 focus-visible:ring-1 focus-visible:ring-offset-1"
                    autoComplete="none"
                    autoFocus={true}
                    value={email}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>

            <div className="grid w-full items-center gap-1.5 mb-6">
                <Label htmlFor="email" className="uppercase">
                    Last Name
                </Label>
                <Input
                    placeholder="Last Name"
                    className="py-6 placeholder:text-gray-500/60 focus-visible:ring-1 focus-visible:ring-offset-1"
                    autoComplete="none"
                    autoFocus={true}
                    value={email}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>

            <div className="grid w-full items-center gap-1.5 mb-6">
                <Label htmlFor="email" className="uppercase">
                    Email Address
                </Label>
                <Input
                    type="email"
                    placeholder="Enter Email"
                    className="py-6 placeholder:text-gray-500/60 focus-visible:ring-1 focus-visible:ring-offset-1"
                    autoComplete="none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="grid w-full items-center gap-1.5 mb-6">
                <Label htmlFor="password" className="uppercase">
                    Password
                </Label>
                <Input
                    type="password"
                    placeholder="Enter Password"
                    className="py-6 placeholder:text-gray-500/60 focus-visible:ring-1 focus-visible:ring-offset-1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="grid w-full items-center gap-1.5 mb-2">
                <Label htmlFor="password" className="uppercase">
                    Re-enter Password
                </Label>
                <Input
                    type="password"
                    placeholder="Re-enter Password"
                    className="py-6 placeholder:text-gray-500/60 focus-visible:ring-1 focus-visible:ring-offset-1"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                />
            </div>

            <Button className="mt-4 py-7 text-md" onClick={handleRegister}>
                Register Account
            </Button>

            <p className="mt-6 text-center">
                Already have an account?{" "}
                <Link href="/login-screens" className="text-primary">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default RegisterComponent;
