import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Consultation } from "@/types/health-app.types";
import { Clock, Cross, Home } from "lucide-react";

type TabFilterProps = {
    consultations: Consultation[];
    activeTab: string;
    setActiveTab: (tab: string) => void;
};

const TabFilter: React.FC<TabFilterProps> = ({ consultations, activeTab, setActiveTab }) => {
    return (
        <div className="consultation-filter flex flex-col lg:flex-row lg:items-center gap-4">
            <TabFilterButton onClick={() => setActiveTab("all")} isActive={activeTab === "all"}>
                <div className="flex items-center gap-4">
                    <Cross className={cn("w-4 h-4", activeTab !== "all" ? "text-[#98A2B3]" : "text-primary")} />
                    <span className="text-sm">All visits</span>
                    <div
                        className={cn(
                            "bg-primary text-white text-sm py-1 px-2 rounded-lg",
                            activeTab !== "all" ? "bg-[#E4E7EC]" : ""
                        )}
                    >
                        {consultations.length}
                    </div>
                </div>
            </TabFilterButton>
            <TabFilterButton onClick={() => setActiveTab("upcoming")} isActive={activeTab === "upcoming"}>
                <div className="flex items-center gap-4">
                    <Clock className={cn("w-4 h-4", activeTab !== "upcoming" ? "text-[#98A2B3]" : "text-primary")} />
                    <span className="text-sm">Upcoming visits</span>
                    <div
                        className={cn(
                            "bg-primary text-white text-sm py-1 px-2 rounded-lg",
                            activeTab !== "upcoming" ? "bg-[#E4E7EC]" : ""
                        )}
                    >
                        {consultations.length}
                    </div>
                </div>
            </TabFilterButton>
            <TabFilterButton onClick={() => setActiveTab("canceled")} isActive={activeTab === "canceled"}>
                <div className="flex items-center gap-4">
                    <Home className={cn("w-4 h-4", activeTab !== "canceled" ? "text-[#98A2B3]" : "text-primary")} />
                    <span className="text-sm">Cancelled visits</span>
                    <div
                        className={cn(
                            "bg-primary text-white text-sm py-1 px-2 rounded-lg",
                            activeTab !== "canceled" ? "bg-[#E4E7EC]" : ""
                        )}
                    >
                        {consultations.length}
                    </div>
                </div>
            </TabFilterButton>
        </div>
    );
};

type TabFilterButtonProps = {
    isActive: boolean;
    onClick: () => void;
    children: React.ReactNode;
};

const TabFilterButton: React.FC<TabFilterButtonProps> = ({ isActive, onClick, children }) => {
    return (
        <Button
            onClick={onClick}
            variant="outline"
            className={cn("text-md p-6", isActive ? "bg-[#FFECE5] border-[#FCD2C2]" : "bg-[#F0F2F5] border-[#D0D5DD]")}
        >
            {children}
        </Button>
    );
};

export default TabFilter;
