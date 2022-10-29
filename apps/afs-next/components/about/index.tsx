import { ReactNode } from 'react';
export * from './aboutPagesData';

export const AboutBackground = ({ children }: { children: ReactNode }) => {
    return <div className="w-full border-t-1 border-white">
        <div className={`hidden lg:block bg-haze py-16 bg-[url('/Banner_about.jpg')] bg-no-repeat w-full bg-[length:100%_400px]`}>
            { children }
        </div>
        <div className="lg:hidden w-full">
            { children }
        </div>
    </div>;
};
