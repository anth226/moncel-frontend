import { ReactNode } from "react";

interface ISection {
    children: ReactNode;
    className?: string;
}

export const Section = ({ children, className }: ISection) => {
    return <div className={`w-full ${className}`}>
        <div className="m-auto">{children}</div>
    </div>;
};
