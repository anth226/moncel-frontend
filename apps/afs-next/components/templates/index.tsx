import { useRouter } from 'next/router';
import Link from 'next/link';

export { default as GridTemplate } from './GridTemplate';
export { default as RowsTemplate } from './RowsTemplate';
import { NavigationProps } from './types';
import styles from './styles.module.scss';

export const PathnameComponent = (props: { displayPathname: string, pathname: string }) => {
    return <div className="flex flex-row">
        { props.displayPathname.split('/').map((e, i) => {
            if(!e) return null;
            return <div className={`text-slate-300 ${(i > 0) ? styles['path-trailing-element'] : ''}`} key={`display-pathname-${i}`}><Link href={`/${props.pathname.split('/').slice(0, i+1).join('/')}`}><a className={` hover:underline `}>{props.displayPathname.split("/")[i].toUpperCase()}</a></Link></div>;
          })}
    </div>;
};

export const NavigationComponent = (props: NavigationProps) => {
    const router = useRouter();
    const borderClass = "border border-solid border-afs-green";
    return <div className="flex flex-col w-full lg:w-[250px]">
        <div className={`${borderClass} bg-afs-green text-white px-3 py-1`}>{props.title}</div>
        {props.links.map((link, i) => {
            return <div className={`w-full border-afs-green border-[1px] border-t-0 px-3 py-1 ${router.pathname == link.href ? "bg-slate-100" : ""} hover:bg-slate-100`} key={`navigation-link-${i}`}>
                <Link href={link.href}><a className="text-afs-green">{link.text}</a></Link>
            </div>;
        })}
    </div>;
};
