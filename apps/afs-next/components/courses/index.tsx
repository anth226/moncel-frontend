import { ReactNode } from 'react';
export * from './coursePagesData';

export const CoursesBackground = ({ children }: { children: ReactNode }) => {
    return <div className="w-full border-t-1 border-white relative lg:bg-haze -z-0">
        <div className="hidden lg:block bg-[url('/Banner_courses.jpg')] bg-no-repeat w-full bg-cover bg-center absolute h-[400px] -z-10"/>
        <div className={`hidden lg:block py-16 w-full z-10`} >
            { children }
        </div>
        <div className="lg:hidden w-full">
            { children }
        </div>
    </div>;
};
