"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LoginComponentProps = {
    bordered?: boolean;
};

const LoginComponent = ({ bordered }: LoginComponentProps) => {
    // States for email, password and remember me checkbox
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const [googleModalOpen, setGoogleModalOpen] = useState(false);
    const [twitterModalOpen, setTwitterModalOpen] = useState(false);

    // Handler for login action (to be filled as needed)
    const handleLogin = () => {
        // Handle your login logic here
        setGoogleModalOpen(false);
        setTwitterModalOpen(false);
        console.log(email, password, rememberMe);
    };

    return (
        <div
            className={cn(
                "flex flex-col w-full max-w-lg p-8 mx-auto bg-white",
                bordered ? "border-[3px] rounded-xl" : ""
            )}
        >
            <div className="text-center mb-10">
                <h1 className="mb-1 text-3xl font-semibold">Log In</h1>
                <p className="text-gray-400">Enter your credentials to access your account</p>
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
                    autoFocus={true}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="grid w-full items-center gap-1.5 mb-2">
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

            <div className="flex items-center justify-between mt-4 mb-3">
                <div className="flex items-center">
                    <Checkbox
                        checked={rememberMe}
                        onCheckedChange={() => setRememberMe(!rememberMe)}
                        className="h-6 w-6"
                    />
                    <Label className="ml-2 text-md">Remember me for 30 days</Label>
                </div>
                <Link href="#" className="text-primary">
                    Forgot Password?
                </Link>
            </div>

            <Button className="mt-4 py-7 text-md" onClick={handleLogin}>
                Log into Account
            </Button>

            <div className="flex justify-between items-center mt-8">
                <hr className="w-2/5" />
                <p className="mx-4">Or</p>
                <hr className="w-2/5" />
            </div>

            <Button onClick={() => setGoogleModalOpen(true)} variant="ghost" className="mt-8 border-[3px] py-7 text-md">
                Continue with Google
            </Button>

            <Button
                onClick={() => setTwitterModalOpen(true)}
                variant="ghost"
                className="mt-8 border-[3px] py-7 text-md"
            >
                Continue with Twitter
            </Button>

            <Dialog open={googleModalOpen} onOpenChange={() => setGoogleModalOpen(!googleModalOpen)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="mb-4 text-2xl">Log in to Google</DialogTitle>
                        <div>
                            <div className="grid w-full items-center gap-1.5 mb-4">
                                <Label htmlFor="email" className="uppercase">
                                    Email Address
                                </Label>
                                <Input
                                    type="email"
                                    placeholder="Enter Email"
                                    className="py-6"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="grid w-full items-center gap-1.5 mb-2">
                                <Label htmlFor="password" className="uppercase">
                                    Password
                                </Label>
                                <Input
                                    type="password"
                                    placeholder="Enter Password"
                                    className="py-6"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <Button className="mt-4 w-full py-7 text-md" onClick={handleLogin}>
                                Log with Google
                            </Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            <Dialog open={twitterModalOpen} onOpenChange={() => setTwitterModalOpen(!twitterModalOpen)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="mb-4 text-2xl">Log in to Twitter</DialogTitle>
                        <div>
                            <div className="grid w-full items-center gap-1.5 mb-4">
                                <Label htmlFor="email" className="uppercase">
                                    Email Address
                                </Label>
                                <Input
                                    type="email"
                                    placeholder="Enter Email"
                                    className="py-6"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="grid w-full items-center gap-1.5 mb-2">
                                <Label htmlFor="password" className="uppercase">
                                    Password
                                </Label>
                                <Input
                                    type="password"
                                    placeholder="Enter Password"
                                    className="py-6"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <Button className="mt-4 w-full py-7 text-md" onClick={handleLogin}>
                                Log with Twitter
                            </Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            <p className="mt-6 text-center">
                Are you new here?{" "}
                <Link href="/register-screens" className="text-primary">
                    Create Account
                </Link>
            </p>
        </div>
    );
};

export default LoginComponent;
