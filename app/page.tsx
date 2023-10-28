import Link from "next/link";

export default function Home() {
    return (
        <div className="container mx-auto my-10">
            <h2 className="text-2xl font-semibold">Testing Design to Code</h2>
            <Link href="/login-screens">Login Screen 1</Link>
        </div>
    );
}
