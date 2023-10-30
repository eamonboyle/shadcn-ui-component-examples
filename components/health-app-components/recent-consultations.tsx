import { Consultation } from "@/types/health-app.types";
import { Card } from "./card";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

interface RecentConsultationsProps {
    consultations: Consultation[];
}

const RecentConsultations = ({ consultations }: RecentConsultationsProps) => {
    return (
        <Card title="Recent Consultations">
            <div className="space-y-2">
                {consultations.map((consultation) => (
                    <RecentConsultationItem key={consultation.id} consultation={consultation} />
                ))}
            </div>
        </Card>
    );
};

type RecentConsultationProps = {
    consultation: Consultation;
};

const RecentConsultationItem = ({ consultation }: RecentConsultationProps) => {
    return (
        <div className="border-b">
            <div className="flex items-center justify-between px-8 py-6">
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <Avatar className="w-10 h-10 border">
                            <AvatarImage src="/avatar-female.png" />
                        </Avatar>
                        <div className="absolute bottom-0 right-1 w-3 h-3 bg-green-600 rounded-full"></div>
                    </div>
                    <div>
                        <div className="text-sm font-semibold">{consultation.doctor}</div>
                        <div className="text-xs text-gray-400">{consultation.specialization}</div>
                    </div>
                </div>
                <div>
                    <Button variant="outline" className="text-xs">
                        Send a message
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default RecentConsultations;
