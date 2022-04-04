
import { StoryBlokCertificateStatisticsContent } from 'moncel-one-sdk/cms/types';
import styles from './styles.module.scss';

const Statistics = ({ statistics: statisticsContent }: { statistics: StoryBlokCertificateStatisticsContent }) => {
    const { statistics } = statisticsContent;

    return <div className={styles.section}>
        { statistics.map((stat, i) => {
            return <div className="d-flex align-items-center" key={`statistics-${i}`}>
                <div className="statistic pe-3">{stat.percent}<sup>%</sup></div>
                <div className="display-4">{stat.description}</div>
            </div>
        })}
    </div>;
};

export default Statistics;
