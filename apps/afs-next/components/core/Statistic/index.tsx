import { ReactNode } from 'react';

interface StatisticProps {
    children: ReactNode;
}
const Statistic = (props: StatisticProps) => {
    return <div className="flex gap-2 justify-center border-[1px] border-afs-light-green p-3">
        { props.children }
    </div>
};

export default Statistic;