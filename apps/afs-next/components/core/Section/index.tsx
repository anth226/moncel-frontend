import { ReactNode } from "react";

interface ISection {
    children: ReactNode;
    className?: string;
}

export const Section = ({ children, className }: ISection) => {
    return <div className={`w-screen ${className}`}>
        <div className="m-auto padded-section">{children}</div>
    </div>;
};
