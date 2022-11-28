import NextLink from 'next/link';
import styles from './styles.module.scss';

export const PathnameComponent = (props: { displayPathname: string, pathname: string }) => {
    return <div className="hidden md:inline-block lg:flex mb-4 w-full">
        {props.displayPathname.split('/').map((e, i) => {
            if (!e) return null;
            return <span className={`${(i > 0) ? styles['path-trailing-element'] : ''}`} key={`display-pathname-${i}`}><NextLink href={`/${props.pathname.split('/').slice(0, i + 1).join('/')}`}><a className={`!text-silver no-underline hover:underline text-sm tracking-wider font-medium`}>{props.displayPathname.split("/")[i].toUpperCase()}</a></NextLink></span>;
        })}
    </div>;
};
