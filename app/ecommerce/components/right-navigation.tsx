import { Heart, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

export default function RightNavigation() {
    return (
        <div className="flex items-center gap-12">
            <Link href="/profile" className="flex flex-col items-center gap-2">
                <User className="w-5 h-5" />
                <span>Profile</span>
            </Link>
            <Link href="/categories" className="flex flex-col items-center gap-2">
                <Heart className="w-5 h-5" />
                <span>All Categories</span>
            </Link>
            <Link href="/cart" className="flex flex-col items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                <span>Cart</span>
            </Link>
        </div>
    );
}
