import Link from "next/link";

export default function Navigation() {
    return (
        <div className="flex items-center gap-12 pr-12">
            <div>
                <Link href="/" className="font-semibold">
                    Men
                </Link>
            </div>
            <div>
                <Link href="/" className="font-semibold">
                    Women
                </Link>
            </div>
            <div>
                <Link href="/" className="font-semibold">
                    Kids
                </Link>
            </div>
            <div>
                <Link href="/" className="font-semibold">
                    On Sale
                </Link>
            </div>
        </div>
    );
}
