import { ReactNode } from "react";

interface TwoColProps {
    children: ReactNode;
    className?: string;
}

export const TwoCol = ({ children, className }: TwoColProps) => {
    return <div className={`grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8 ${className}`}>{children}</div>;
};
