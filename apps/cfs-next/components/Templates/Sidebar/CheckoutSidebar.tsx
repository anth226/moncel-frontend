import { MouseEvent, ReactNode } from 'react';
import { useRouter } from 'next/router';
import NextImage from 'next/image';

import { Header2, Header4, Header5, Text } from 'components/core/Typography';
import Button from 'components/core/Button';
import { CheckoutSidebarComponentProps } from '../types';
import { useAppDispatch, AppActions } from 'store';
const { toggleModal } = AppActions;
import { Courses } from 'data/courses';
import { TooltipRegular, TooltipMembership, BootstrapTooltip } from '.';

export const CheckoutSidebarComponent = (props: CheckoutSidebarComponentProps) => {
    const router = useRouter();
    const borderBClass = "border-b-[1px] border-solid";
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
    const smoothScroll = (element: Element | null, href: string) => {
        if(!element) return;
        const elementPos = element.getBoundingClientRect().top;

        window.scrollTo({
            top: elementPos + window.scrollY,
            behavior: 'smooth'
        });
        // callback must be resolved by
        window.setTimeout(() => window.location.hash = href, 800);

    }


    const handleLinkClick = (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
        if (document && window) {
            e.preventDefault();
            smoothScroll(document.querySelector(href), href);
        }
    }

    return <div>
        <div className={`sticky top-8 hidden lg:flex flex-col border border-solid w-full h-fit border-b-0`}>
            <div className={`${borderBClass} flex items-center justify-center py-4 px-3.5`}>
                <Header2 className="text-[20px] leading-6 font-bold text-center">{props.courseTitle}</Header2>
            </div>

            <div className={`${borderBClass} flex flex-col items-center p-4 gap-3.5`}>
                <Button variant="primary" className="!px-0 !py-4 w-full" onClick={handleClick} id="purchase-button">
                    <span>
                        <Header4 className="text-base xl:text-xl font-bold -mb-2 leading-5">{props.course == "Membership" ? "JOIN TODAY" : "START ONLINE NOW"}</Header4>
                        <Text className="!text-[10px] xl:!text-sm !text-white font-semibold xl:font-bold tracking-wide !leading-4 xl:!leading-5 mt-1 xl:mt-0">{props.course == "Membership" ? "BECOME A CIFS MEMBER" : "BEGIN IN JUST 30 SECONDS"}</Text>
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
                        <p className="col-span-2 text-sm text-dove font-semibold  text-end">{props.price}</p>
                    </div>
                    {props.memberPrice ? <>
                        <div className="border-b-[1px] border-afs-light-gray w-full col-span-3" />
                        <div className="w-full grid grid-cols-6 items-center col-span-3 py-2 gap-2">
                            <div className="flex col-span-4 justify-between items-center">
                                <p className="text-xs text-dove font-semibold ">CIFS MEMBERSHIP</p>
                                <BootstrapTooltip title="Provides 12 months of complimentary CIFS membership" placement="top" arrow>
                                    <span className="bg-silver text-white rounded-xl px-1 py-0.5 text-xs mr-0 xl:mr-6 h-5">?</span>
                                </BootstrapTooltip>
                            </div>
                            <p className="col-span-2 text-sm text-dove font-semibold text-end">{props.memberPrice}</p>
                        </div>
                        <div className="border-b-[1px] border-afs-light-gray w-full col-span-3" />
                    </> : null}
                </div>

            </div>

            {props.links.map((link, i) => {
                return <a href={link.href} onClick={handleLinkClick(link.href)} className={`no-underline ${borderBClass} ${props.anchor === link.href ? "bg-alto" : ""} p-[14px] flex flex-row justify-between items-center`} key={`checkout-link-${i}`}>
                    <p className="text-[14px] font-medium leading-4">{link.text.toUpperCase()}</p>
                    <NextImage src="/icons/icon_stroke_blue_arrow_right.svg" width={8} height={8} />
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
