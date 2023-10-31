import { Calendar, ChevronRight, MapPin, MessageSquare, Pill, Siren } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "./card";

const QuickActions = () => {
    return (
        <Card title="Quick Actions">
            <div className="p-4 lg:p-8 py-4 lg:first:py-6 space-y-2">
                <QuickAction
                    title="Book an appointment"
                    description="Book an appointment with a doctor"
                    icon={<Calendar className="w-4 h-4 lg:w-8 lg:h-8" />}
                    onClick={() => {}}
                />
                <QuickAction
                    title="Request a consultation"
                    description="Request a consultation with a doctor"
                    icon={<MessageSquare className="w-4 h-4 lg:w-8 lg:h-8" />}
                    onClick={() => {}}
                />
                <QuickAction
                    title="Locate a hospital near you"
                    description="Find closest hospitals"
                    icon={<MapPin className="w-4 h-4 lg:w-8 lg:h-8" />}
                    onClick={() => {}}
                />
                <QuickAction
                    title="Locate a pharmacy"
                    description="Locate a pharmacy near you"
                    icon={<Pill className="w-4 h-4 lg:w-8 lg:h-8" />}
                    onClick={() => {}}
                />
                <QuickAction
                    title="Emergency"
                    description="Request immediate help"
                    icon={<Siren className="w-4 h-4 lg:w-8 lg:h-8" />}
                    onClick={() => {}}
                />
            </div>
        </Card>
    );
};

type QuickActionProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
    onClick: () => void;
};

const QuickAction = ({ title, description, icon, onClick }: QuickActionProps) => {
    return (
        <div className="border-b border-gray-100 pb-3 flex items-center gap-2 last:border-0">
            <div className="bg-gray-200 p-4 rounded-full">{icon}</div>
            <Button onClick={onClick} type="button" variant="ghost" className="flex-grow p-0">
                <div className="flex flex-col flex-grow gap-1 text-left p-1 lg:p-3">
                    <span className="font-semibold text-sm">{title}</span>
                    <span className="text-gray-400 text-xs w-full truncate">{description}</span>
                </div>
                <div>
                    <ChevronRight />
                </div>
            </Button>
        </div>
    );
};

export default QuickActions;
