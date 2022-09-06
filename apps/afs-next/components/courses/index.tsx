import { ReactNode } from 'react';
export * from './coursePagesData';

export const CoursesBackground = ({ children }: { children: ReactNode }) => {
    return <div className="bg-afs-light-gray w-screen">
        <div className={`hidden lg:block bg-[url('/Banner_courses.jpg')] bg-afs-light-gray py-16 bg-no-repeat w-full`}>
            { children }
        </div>
        <div className="md:hidden bg-afs-light-gray py-16 w-full">
            { children }
        </div>
    </div>;
};
