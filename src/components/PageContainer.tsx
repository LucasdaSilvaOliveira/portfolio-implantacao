import type { ReactNode } from "react";

type PageContainerProps = {
    children: ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
    return (
        <div className="text-white min-h-screen bg-gray-900 pt-32 px-32">
            {children}
        </div>
    );
}