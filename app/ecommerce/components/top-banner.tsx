import { Phone } from "lucide-react";
import LanguageCountrySelect from "./language-country-select";

const TopBanner = () => {
    // State for handling clicks or any other interactions can be added here
    return (
        <div className="bg-black">
            <div className="container mx-auto text-white p-2 flex justify-between items-center">
                <div className="flex items-center">
                    <Phone className="w-4 h-4" />
                    <span className="ml-2 text-sm">Call us at 1-800-555-5555</span>
                </div>
                <span className="text-sm font-semibold">Up to 60% off on all items till December 24th</span>
                <LanguageCountrySelect />
            </div>
        </div>
    );
};

export default TopBanner;
