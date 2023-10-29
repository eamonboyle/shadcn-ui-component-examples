type CardProps = {
    title: string;
    children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ title, children }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl">
            <CardTitle title={title} />
            {children}
        </div>
    );
};

type CardTitle = {
    title: string;
};

const CardTitle: React.FC<CardTitle> = ({ title }) => {
    return (
        <div className="px-8 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">{title}</h2>
        </div>
    );
};
