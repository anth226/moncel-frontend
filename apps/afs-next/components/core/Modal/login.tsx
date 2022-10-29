import { ReactNode } from 'react';
import NextImage, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';

import StudentsGraphic from 'public/accounts1.webp';
import BusinessGraphic from 'public/accounts2.webp';
import MembersGraphic from 'public/accounts4.webp';

import StudentsBody from './students.mdx';
import BusinessBody from './business.mdx';
import MembersBody from './members.mdx';

import { useAppDispatch, AppActions } from 'store';
import { Header4, Text, Link } from '../typography';
import Button from 'components/core/Button';

import styles from './login.module.scss';

interface ColumnProps {
    imageSrc: StaticImageData;
    title: string;
    children: ReactNode;
    buttonText: string;
    buttonHref: string;
}

const Column = (props: ColumnProps) => {
    const router = useRouter();
    return <div className="flex flex-col justify-between col-span-1 items-center p-8 gap-6 even:bg-gradient-to-b from-haze to-white">
        <div className="flex flex-col items-center gap-6">
            <NextImage src={props.imageSrc} />
            <Header4 className="text-teal">{props.title}</Header4>
            <div className={`checklist ${styles["mdx"]}`}>
                {props.children}
            </div>
        </div>
        <Button id={`login-button-${props.title}`} onClick={() => router.push(props.buttonHref)} className="w-[200px] !p-3">{props.buttonText}</Button>
    </div>;
};

const LoginModal = () => {
    const dispatch = useAppDispatch();
    const { toggleModal } = AppActions;
    const router = useRouter();

    const dismissModal = () => {
        dispatch(toggleModal(null));
    }
    const contactNavigate = async () => {
        await router.push("/contact");
        dismissModal();
    }
    // *** live site modal button only displays on desktop, so this will not show on mobile and may look weird on tablet
    return <div className="hidden md:grid grid-cols-3 bg-white max-w-[900px] border-t-6 border-teal drop-shadow-2xl">
        <Column imageSrc={StudentsGraphic} title="For Students" buttonText="Students Login" buttonHref="https://my.foodsafety.com.au/customer/account/login/"> {<StudentsBody />} </Column>
        <Column imageSrc={BusinessGraphic} title="For Business" buttonText="Business Login" buttonHref="https://my.foodsafety.com.au/customer/account/login/"> {<BusinessBody />} </Column>
        <Column imageSrc={MembersGraphic} title="For Members" buttonText="Members Login" buttonHref="https://resources.foodsafety.com.au/user/login/"> {<MembersBody />} </Column>
        <div className="col-span-3 flex justify-between py-5 mx-6 border-t border-sand">
            <Link className="link text-teal underline font-medium cursor-pointer" onClick={dismissModal}>Cancel</Link>
            <Text>Need Help? <a className="link text-teal underline font-medium" onClick={contactNavigate}>Contact Us</a></Text>
        </div>
    </div>
};

export default LoginModal;
