import { ReactNode } from 'react';

interface StatisticProps {
    children: ReactNode;
}
const Statistic = (props: StatisticProps) => {
    return <div className="flex flex-1 gap-2 justify-center items-center border border-mint p-4 text-left">
        { props.children }
    </div>
};

export default Statistic;