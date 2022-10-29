import { useEffect, useReducer, useState, Dispatch } from "react";
import NextImage from 'next/image';

import Head from 'components/core/layout/head';
import CopyrightFooter from 'components/core/layout/footer/copyright';
import { Header2 } from 'components/core/typography';
import { Checkout } from 'components/membership/reducers';

import AfsLogoWhite from 'public/afs-logo-full-width-white.svg';
import AfsLogoGreen from 'public/afs-logo-full-width-green.svg';
import BoxTickIcon from 'public/icons/icon_stroke_green_checkmark_box_stroke_tick.svg';
import LockIcon from 'public/icons/icon_stroke_green_lock.svg';
import PaymentMethods from 'public/payment-methods-m.svg'

const MEMBERSHIP_PRICE = 99.95;
const DISCOUNT = 0.00;

const MobileHeader = () => <div className="lg:hidden bg-teal w-full py-2">
    <div className="padded-section">
        <NextImage src={AfsLogoWhite} alt="Australian Institute of Food Safety Logo" priority width={252} height={34} className="m-0 p-0" />
    </div>
</div>;

const DesktopHeader = () => <div className="px-10 py-6 flex items-center justify-between">
    <NextImage src={AfsLogoGreen} alt="Australian Institute of Food Safety Logo" priority width={375} className="m-0 p-0" />
    <Header2 className="text-xl 2xl:block hidden">Get in touch. Call 1300 797 020</Header2>
</div>;

const Header = () => <div className="padded-section">
    <MobileHeader />
    <DesktopHeader />
</div>;

const Main = () => {
    return <div className="w-screen bg-alabaster py-11 ">
        <div className="padded-section grid grid-cols-1 md:grid-cols-3 gap-7">
            <Header2 className="text-xl col-span-3 text-teal">Payment Details</Header2>
            <Divider />
            <div className="col-span-1 row-start-2">
                <CartComponent />
            </div>
            <div className="col-span-2 row-start-3 md:row-start-2">
                <Form />
            </div>
        </div>

    </div>
};

const CartComponent = () => {
    return <div className="flex flex-col md:w-auto">
        <div className="bg-teal text-white font-semibold px-3 py-2">
            <p>CART SUMMARY</p>
        </div>

        <div className="bg-white flex justify-between items-center px-3 py-2">
            <p className="font-semibold">12-Month AIFS Membership</p>
            <p className="font-semibold">{`$${MEMBERSHIP_PRICE}`}</p>
        </div>

        <div className="w-full border-b-[1px] border-afs-light-green my-2" />

        <div className="bg-white grid grid-cols-3 items-center px-3 py-2">
            <div className="col-span-2 flex justify-end items-center"><p className="">Subtotal</p></div>
            <div className="col-span-1 flex justify-end">{` $${MEMBERSHIP_PRICE}`}</div>
        </div>

        <div className="bg-white grid grid-cols-3 items-center px-3 py-2">
            <div className="col-span-2 flex justify-end items-center"><p className="">Discount</p></div>
            <div className="col-span-1 flex justify-end">{` $${DISCOUNT}`}</div>
        </div>
        <div className="w-full my-2"></div>
        <div className="bg-white grid grid-cols-3 items-center px-3 py-2 font-semibold">
            <div className="col-span-2 flex justify-end items-center"><p className="">Total</p></div>
            <div className="col-span-1 flex justify-end">{` $${MEMBERSHIP_PRICE - DISCOUNT}`}</div>
        </div>

        <div className="w-full flex gap-2 items-center">
            <NextImage src={BoxTickIcon} width={20} />
            <strong>Accepted Payment Methods</strong>
        </div>

        <div className="w-full pl-7">
            <p>AIFS accepts Visa, Mastercard, American Express and Apple Pay.</p>
        </div>

        <div className="w-full pl-7 pb-8">
            <NextImage src={PaymentMethods} width={150} />
        </div>

        <div className="w-full flex gap-2 items-center">
            <NextImage src={LockIcon} width={20} />
            <strong>Secure Checkout</strong>
        </div>

        <div className="w-full pl-7">
            Your personal information and electronic payments are secured using industry standard 128 bit SSL technology.
        </div>

    
    </div>
};

interface TextFieldProps {
    label: string;
    htmlName: string;
    fieldname: Checkout.FIELD_NAMES;
    value: string;
    type?: string;
    error: string | undefined;
    dispatch: Dispatch<Partial<{
        firstName: string;
        lastName: string;
        email: string;
        verifyEmail: string;
    }>>;
}

const TextField = (props: TextFieldProps) => {
    const  [ localVal, setLocalVal ] = useState(props.value);
    const handleBlur = (e: React.FormEvent<HTMLInputElement>) => {
        props.dispatch({ [props.fieldname]: e.currentTarget.value })
    }
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setLocalVal(e.currentTarget.value);
    }
    return <div className="flex flex-col">
        <label htmlFor={props.htmlName} className="text-teal">{props.label}</label>
        <input id={`${props.htmlName}-field`} name={props.htmlName} type={props.type || "text"} className="rounded border-silver border-1 p-2" onChange={handleChange} onBlur={handleBlur} value={localVal} />
        { props.error ? <div id={`${props.fieldname}-errors`} className="text-red-500">{props.error}</div> : null }
    </div>
};

const Form = () => {
    const cardContainerId = "card-element";
    useEffect(() => {
        Checkout.mountStripe(cardContainerId);
    }, []);
    const [{ valid, data, errors }, dispatch] = useReducer(Checkout.reducer, Checkout.initialFormState);

    return <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
        <strong className="text-mine col-span-2">Please enter your details below to complete your purchase.</strong>
        <form className="bg-white p-6 flex flex-col gap-4 border border-silver rounded">
            <TextField htmlName="first-name" fieldname="firstName" label="First Name" value={data['firstName']} error={errors['firstName']} dispatch={dispatch} />
            <TextField htmlName="last-name" fieldname="lastName" label="Last Name" value={data['lastName']} error={errors['lastName']} dispatch={dispatch} />
            <TextField htmlName="email" fieldname="email" label="Email" type="email" value={data['email']} error={errors['email']} dispatch={dispatch} />
            <TextField htmlName="confemail" fieldname="verifyEmail" label="Verify Email" type="email" value={data['verifyEmail']} error={errors['verifyEmail']} dispatch={dispatch} />
            <div className="flex flex-col">
                <label className="text-teal">Payment Authorization</label>
                <div id={cardContainerId} className="rounded border-silver border-1 p-2" />
                <div id='card-errors' />
            </div>
            <div id="terms-conditions">
                <label className="flex items-center gap-2 text-teal">
                    <input type="checkbox" checked={data['termsAccepted']} onChange={() => dispatch({termsAccepted: !data['termsAccepted']})}/>
                    I acknowledge and authorise that the credit card I have provided will be securely charged.
                </label>
            </div>
            <CheckoutButton disabled={!valid}/>
        </form>
    </div>

};

const CheckoutButton = ({ disabled }: { disabled?: boolean }) => {
    return <input type="submit" value="SUBMIT SECURE PAYMENT" id="submit" className="bg-teal rounded p-3.5 text-white font-semibold disabled:opacity-50" disabled={disabled}/>
}

const Divider = () => <div className="col-span-3 border-b-[1px] border-afs-light-green my-4" />;

const Page = () => {
    return <div className="w-screen h-screen">
        <Head title="AIFS Membership Checkout" />
        <Header />
        <Main />
        <CopyrightFooter />
    </div>;
};

export default Page;
