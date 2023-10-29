import { Box, LineChart, Sun, Thermometer } from "lucide-react";

import { HealthProfile } from "@/types/health-app.types";

type HealthStatsProps = {
    user: HealthProfile;
};

const HealthStats = ({ user }: HealthStatsProps) => {
    return (
        <div className="flex justify-around gap-4">
            <HealthStat label="Blood pressure" value="118/75" unit="mm/hg" status="Healthy" icon={<Thermometer />} />
            <HealthStat label="Cholesterol levels" value="164" unit="mg/dl" status="Healthy" icon={<Box />} />
            <HealthStat label="Glucose levels" value="5.5" unit="mmol/L" status="Healthy" icon={<Sun />} />
        </div>
    );
};

type StatProps = {
    label: string;
    value: string;
    unit: string;
    status: string;
    icon?: React.ReactNode;
};

const HealthStat: React.FC<StatProps> = ({ label, value, unit, status, icon }) => {
    return (
        <div className="flex justify-between items-center bg-white w-full rounded-xl border border-gray-200 p-6">
            <div className="flex flex-col gap-3">
                <span className="text-gray-500 text-md">{label}</span>
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">{value}</span>
                    <span>{unit}</span>
                </div>
                <div>
                    <div className="flex items-center gap-1.5">
                        <div className="flex items-center gap-0.5 bg-green-200 text-green-800 font-semibold rounded-lg p-1 px-2">
                            <LineChart size={16} />
                            5%
                        </div>
                        <span className="text-green-800">{status}</span>
                    </div>
                </div>
            </div>

            <div>
                <div className="p-4 border rounded-full">{icon}</div>
            </div>
        </div>
    );
};

export default HealthStats;
