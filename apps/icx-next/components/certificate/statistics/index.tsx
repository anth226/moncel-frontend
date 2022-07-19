
import styles from './styles.module.scss';

import { ComponentIccAdditionalStatsSection } from "generated/strapi-types";

const Statistics = ({ data }: { data: ComponentIccAdditionalStatsSection }) => {

    return <div className={styles.section}>
        { (data.Stats || []).map((stat, i) => {
            if(!stat) return null;
            return <div className="d-flex align-items-center" key={`statistics-${i}`}>
                <div className="statistic pe-3">{stat.title}<sup>%</sup></div>
                <div className="display-4">{stat.description}</div>
            </div>
        })}
    </div>;
};

export default Statistics;
