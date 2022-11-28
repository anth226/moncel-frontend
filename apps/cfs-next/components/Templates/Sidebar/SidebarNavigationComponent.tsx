import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { NavigationProps } from 'components/Templates/types';
import styles from './styles.module.scss';

export const SidebarNavigationComponent = (props: NavigationProps) => {
    const router = useRouter();
    const [route, setRoute] = useState<string | undefined>(undefined);
    useEffect(() => {
        setRoute(router.pathname);
    }, [router.pathname])
    const borderClass = "border border-solid";
    return <div className="flex flex-col w-full mb-8 lg:mb-0">
        <div className={`${borderClass} bg-teal text-white px-3 py-1.5 text-[14px] font-semibold`}>{props.title}</div>
        {props.links.map((link, i) => {
            return <div className={`w-full border-[1px] border-t-0 px-3 py-1.5 ${route == link.href ? "bg-haze" : ""} hover:bg-haze`} key={`navigation-link-${i}`}>
                <NextLink href={link.href}><a className={`no-underline ${styles["quicklist"]}`}>{link.text}</a></NextLink>
            </div>;
        })}
    </div>;
};
