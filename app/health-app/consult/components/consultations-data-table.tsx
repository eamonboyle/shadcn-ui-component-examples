import { DataTable } from "@/components/ui/data-table";
import { Consultation } from "@/types/health-app.types";
import { columns } from "./table-columns";

type ConsultationsDataTableProps = {
    consultations: Consultation[];
};

const ConsultationsDataTable = ({ consultations }: ConsultationsDataTableProps) => {
    return <DataTable columns={columns} data={consultations} />;
};

export default ConsultationsDataTable;
