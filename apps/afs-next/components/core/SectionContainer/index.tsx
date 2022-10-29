import { ReactNode } from "react";

interface SectionProps {
    id: string;
    className?: string;
    children: ReactNode;
}

export const SectionContainer = ({ id, children, className }: SectionProps) => <div className={`col-span-3 ${className}`} id={id}>{children}</div>;
