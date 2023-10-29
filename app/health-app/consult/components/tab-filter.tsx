import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Consultation } from "@/types/health-app.types";
import { Clock, MessageSquare } from "lucide-react";

type TabFilterProps = {
    consultations: Consultation[];
    activeTab: string;
    setActiveTab: (tab: string) => void;
};

const TabFilter: React.FC<TabFilterProps> = ({ consultations, activeTab, setActiveTab }) => {
    return (
        <div className="consultation-filter flex items-center gap-4">
            <TabFilterButton onClick={() => setActiveTab("ongoing")} isActive={activeTab === "ongoing"}>
                <div className="flex items-center gap-4">
                    <MessageSquare
                        className={cn("w-5 h-5", activeTab !== "ongoing" ? "text-[#98A2B3]" : "text-primary")}
                    />
                    Ongoing Consultations
                    <div
                        className={cn(
                            "bg-primary text-white px-3 rounded-lg",
                            activeTab !== "ongoing" ? "bg-[#E4E7EC]" : ""
                        )}
                    >
                        {consultations.length}
                    </div>
                </div>
            </TabFilterButton>
            <TabFilterButton onClick={() => setActiveTab("closed")} isActive={activeTab === "closed"}>
                <div className="flex items-center gap-4">
                    <Clock className={cn("w-5 h-5", activeTab !== "closed" ? "text-[#98A2B3]" : "text-primary")} />
                    Closed Consultations
                    <div
                        className={cn(
                            "bg-primary text-white px-3 rounded-lg",
                            activeTab !== "closed" ? "bg-[#E4E7EC]" : ""
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
            className={cn("text-md p-8", isActive ? "bg-[#FFECE5] border-[#FCD2C2]" : "bg-[#F0F2F5] border-[#D0D5DD]")}
        >
            {children}
        </Button>
    );
};

export default TabFilter;
