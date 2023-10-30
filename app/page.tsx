import Link from "next/link";

export default function Home() {
    return (
        <div className="container mx-auto my-10">
            <h2 className="text-2xl font-semibold mb-6">Testing Design to Code</h2>
            <div className="grid grid-cols-3 gap-4">
                <HomePageTile
                    title="Login Screens"
                    description="A display of what is possible with shadcn-ui and NextJS"
                    href="/login-screens"
                />
                <HomePageTile
                    title="Register Components"
                    description="A display of what is possible with shadcn-ui and NextJS"
                    href="/register-screens"
                />
                <HomePageTile
                    title="Health App"
                    description="A display of what is possible with shadcn-ui and NextJS"
                    href="/health-app"
                />
            </div>
        </div>
    );
}

const HomePageTile = ({ title, description, href }: { title: string; description: string; href: string }) => {
    return (
        <div className="border text-center rounded-lg text-lg font-semibold hover:scale-105 hover:bg-gray-100 transition">
            <Link href={href} className="relative w-full h-full flex items-center justify-center p-8">
                {title}
            </Link>
        </div>
    );
};
