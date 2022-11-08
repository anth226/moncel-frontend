import { useEffect, useState, useCallback, MouseEvent } from 'react';
import { useRouter } from 'next/router';
import NextImage from 'next/image';
import NextLink from 'next/link';

export { default as GridTemplate } from './GridTemplate';
export { default as RowsTemplate } from './RowsTemplate';
import { NavigationProps, CheckoutSidebarComponentProps } from './types';
import { Header2, Header4, Text } from 'components/core/typography';
import { useAppDispatch, AppActions } from 'store';
const { toggleModal } = AppActions;

import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

import NRTLogo from 'public/nrt-logo-color.svg';
import ArrowRightIcon from 'public/icon_stroke_green_arrow_right.svg';
import styles from './styles.module.scss';
import Button from 'components/core/Button';
import { Courses } from 'data/courses';

export const PathnameComponent = (props: { displayPathname: string, pathname: string }) => {
    return <div className="hidden md:flex flex-row mb-4">
        {props.displayPathname.split('/').map((e, i) => {
            if (!e) return null;
            return <div className={`${(i > 0) ? styles['path-trailing-element'] : ''}`} key={`display-pathname-${i}`}><NextLink href={`/${props.pathname.split('/').slice(0, i + 1).join('/')}`}><a className={`!text-silver no-underline hover:underline text-sm tracking-wider font-medium`}>{props.displayPathname.split("/")[i].toUpperCase()}</a></NextLink></div>;
        })}
    </div>;
};

export const NavigationComponent = (props: NavigationProps) => {
    const router = useRouter();
    // Implement smooth scroll
    const handleLinkClick = (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
        if (document) {
            e.preventDefault();
            document.querySelector(`[href='${href}']`)?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
    const borderClass = "border border-solid border-teal";
    return <div className="flex flex-col w-full mb-8 lg:mb-0">
        <div className={`${borderClass} bg-teal text-white px-3 py-1.5 text-[14px] font-semibold`}>{props.title}</div>
        {props.links.map((link, i) => {
            return <div className={`w-full border-teal border-[1px] border-t-0 px-3 py-1.5 ${router.pathname == link.href ? "bg-haze" : ""} hover:bg-haze`} key={`navigation-link-${i}`}>
                <NextLink href={link.href}><a className={`no-underline ${styles["quicklist"]}`}>{link.text}</a></NextLink>
            </div>;
        })}
    </div>;
};

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));

const TooltipRegular = () => {
    return <BootstrapTooltip title="Provides up to 12 months enrolment in this course" placement="top" arrow>
        <span className="bg-silver text-white rounded-xl px-1 py-0.5 text-xs mr-0 xl:mr-6">?</span>
    </BootstrapTooltip>
}

const TooltipMembership = () => {
    return <BootstrapTooltip title="Provides 12 of access to AIFS resources" placement="top" arrow>
        <span className="bg-silver text-white rounded-xl px-1 py-0.5 text-xs">?</span>
    </BootstrapTooltip>
}

export const CheckoutSidebarComponent = (props: CheckoutSidebarComponentProps) => {
    const router = useRouter();
    const borderBClass = "border-b-[1px] border-solid border-teal";
    const dispatch = useAppDispatch();
    const handleClick = () => {
        if (!props.course) {
            throw Error(`Cannot open checkout modal for course ${props.course}`);
        }
        if (props.course == Courses.Membership) {
            router.push('/membership/checkout');
        }
        dispatch(toggleModal(props.course));
    }

    // Implement smooth scroll
    const handleLinkClick = (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
        if (document && window) {
            e.preventDefault();
            
            document.querySelector(href)?.scrollIntoView({
                behavior: 'smooth'
            });
            window.history.pushState({}, document.title, href)
        }
    }

    const [anchor, setAnchor] = useState<string | null>(null);
    const handleHashChange = useCallback(() => {
        setAnchor(window.location.hash);
    }, []);

    useEffect(() => {
        if (window) {
            window.addEventListener('hashchange', handleHashChange);
            return () => {
                window.removeEventListener('hashchange', handleHashChange);
            };
        }
    }, []);

    return <div>
        <div className={`sticky top-8 hidden lg:flex flex-col border border-solid border-teal w-full h-fit border-b-0`}>
            <div className={`${borderBClass} text-teal flex items-center justify-center py-4 px-3.5`}>
                <Header2 className="text-[20px] leading-6 font-bold text-center">{props.courseTitle}</Header2>
            </div>

            <div className={`${borderBClass} flex flex-col items-center p-4 gap-3.5`}>
                <Button variant="secondary" className="!px-0 !py-4 w-full" onClick={handleClick} id="purchase-button">
                    <span>
                        <Header4 className="text-base xl:text-xl font-bold -mb-2 leading-5">{props.course == "Membership" ? "JOIN TODAY" : "START ONLINE NOW"}</Header4>
                        <Text className="!text-[10px] xl:!text-sm !text-white font-semibold xl:font-bold tracking-wide !leading-4 xl:!leading-5 mt-1 xl:mt-0">{props.course == "Membership" ? "BECOME AN AIFS MEMBER" : "BEGIN IN JUST 30 SECONDS"}</Text>
                    </span>
                </Button>

                <NextImage src="/payment-methods.svg" width={190} height={22} layout="intrinsic" />

                <p className="text-xs text-afs-gray text-center">Your personal information and electronic payments are secured using industry standard 128 bit SSL technology</p>

                <div className="grid grid-cols-3 w-full">
                    <div className="border-b-[1px] border-afs-light-gray w-full col-span-3" />
                    <div className="w-full grid grid-cols-6 items-center col-span-3 py-2 gap-2">
                        <div className="flex col-span-4 justify-between items-center">
                            <p className="text-xs text-dove font-semibold uppercase">{`${props.course === 'Membership' ? "12-month membership" : "ONLINE COURSE"}`}</p>
                            {props.course === 'Membership' ? <TooltipMembership/> : <TooltipRegular/>}
                        </div>
                        <p className="col-span-1 text-sm text-dove font-semibold  text-end">{props.price}</p>
                    </div>
                    {props.memberPrice ? <>
                        <div className="border-b-[1px] border-afs-light-gray w-full col-span-3" />
                        <div className="w-full grid grid-cols-4 xl:grid-cols-6 items-center col-span-3 py-2 gap-2">
                            <div className="flex col-span-3 xl:col-span-4 justify-between">
                                <p className="text-xs text-dove font-semibold ">AIFS MEMBERSHIP</p>
                                <BootstrapTooltip title="Provides 12 months of complimentary AIFS membership" placement="top" arrow>
                                    <span className="bg-silver text-white rounded-xl px-1 py-0.5 text-xs mr-0 xl:mr-6">?</span>
                                </BootstrapTooltip>
                            </div>
                            <p className="col-span-1 text-sm text-dove font-semibold text-end">{props.memberPrice}</p>
                        </div>
                        <div className="border-b-[1px] border-afs-light-gray w-full col-span-3" />
                    </> : null}
                </div>

                {props.showLogo ? <div>
                    <div className="w-[53px] xl:w-[73px] float-right"><NextImage src={NRTLogo} width={73} height={58} layout="responsive" /></div>
                    <p className="text-emperor text-xs table-cell">Training delivered by Australian Institute of Food Safety (Registered Training Organisation) (RTO #41127)</p>
                </div> : null}

            </div>

            {props.links.map((link, i) => {
                return <a href={link.href} onClick={handleLinkClick(link.href)} className={`no-underline ${borderBClass} ${anchor === link.href ? "bg-haze" : ""} hover:bg-afs-light-gray text-teal p-[14px] flex flex-row justify-between items-center`} key={`checkout-link-${i}`}>
                    <p className="text-[14px] font-medium leading-4">{link.text.toUpperCase()}</p>
                    <NextImage src={ArrowRightIcon} width={8} height={8} />
                </a>
            })}

        </div>
        <div className="lg:hidden fixed w-full z-30 bottom-6 padded-section pl-0 pr-[3em] md:pr-0">
            <Button variant="secondary" className="!px-0 !py-4 w-full" onClick={handleClick} id="purchase-button">
                <span>
                    <Header4 className="text-md xl:text-xl font-semibold -mb-2 leading-6 w-full">SIGN UP ONLINE NOW</Header4>
                    <Text className="text-sm !text-white font-medium tracking-wide !leading-6 !px-4">GET STARTED IN JUST 30 SECONDS</Text>
                </span>
            </Button>
        </div>
    </div>

};
