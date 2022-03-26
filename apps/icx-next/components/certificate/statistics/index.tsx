import Image from 'next/image';

import { StoryBlokCertificateStatisticsContent } from 'moncel-one-sdk/cms/types';
import styles from './styles.module.scss';

const Statistics = ({ statistics: statisticsContent }: { statistics: StoryBlokCertificateStatisticsContent }) => {
    const { statistics } = statisticsContent;

    return <div className={styles.section}>
        { statistics.map((stat, i) => {
            return <div className={styles.row} key={`statistics-${i}`}>
                <h1 className={styles.percent}>{stat.percent}<sup>%</sup></h1>
                <h1 className={styles.description}>{stat.description}</h1>
            </div>
        })}
    </div>;
};

export default Statistics;
