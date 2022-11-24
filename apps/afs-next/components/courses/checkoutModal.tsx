import { useState } from 'react';
import { useRouter } from 'next/router';
import NextImage from 'next/image';
import NextLink from 'next/link';

import { Header4, Header5, Text } from 'components/core/typography';
import Button from 'components/core/Button';
import { useAppDispatch, AppActions } from 'store';
import courseData, { Courses } from 'data/courses';

import NSWCertificateImage from 'public/courses/food-safety-supervisor/nsw-certificate.png';

enum ERRORS {
    checkoutTermsNotAccepted="Checkout attempted but terms not accepted",
    checkoutCourseNotSelected="Checkout attempted but no course selected",
}

const FHData = courseData[Courses.FoodHandler];
export const FoodHandlerModal = () => {
    const router = useRouter();
    const [ termsAccepted, setTermsAccepted ] = useState(false);
    const [ selectedCourse, setSelectedCourse ] = useState<FHCourses | null>(null);
    const dispatch = useAppDispatch();
    const { toggleModal } = AppActions;

    type FHCourses = "Hospitality" | "Health" | "Processing";
    const FHCourseProductMap: Record<FHCourses, number> = {
        "Hospitality":11,
        "Health":23,
        "Processing":24,
    }
    const selectCourse = (course: FHCourses) => {
        setSelectedCourse(course);
    };

    const checkout = () => {
        if(!selectedCourse) {
            throw Error(ERRORS.checkoutCourseNotSelected);
        }
        if(window) {
            window.open(`${FHData.checkout}${FHCourseProductMap[selectedCourse]}`)
        }
        // router.push(`${FHData.checkout}${FHCourseProductMap[selectedCourse]}`);
    }

    const cancel = () => {
        dispatch(toggleModal(null));
    }
    return <div className="flex flex-col bg-white py-6 max-w-[600px]">
        <Header4 className="font-semibold text-teal px-6">Your Enrolment</Header4>
        <div className="px-6 text-sm">
            <Divider />
            <Text>Check the details below and proceed to checkout.</Text>
            <div className="grid grid-cols-2 w-full">
                <Text className="font-semibold mb-0">Course:</Text>
                <Text className="mb-0">{FHData.longName}</Text>
                <Text className="font-semibold mb-0">Price:</Text>
                <Text className="mb-0">{FHData.price}</Text>
                <Text className="font-semibold mb-0">Prerequisites:</Text>
                <Text className="mb-0">{FHData.prerequisites}</Text>
                <Text className="font-semibold mb-0">Nationally Recognized:</Text>
                <Text className="mb-0">{FHData.nationallyRecognized ? "Yes this course is Nationally Recognised" : "No"}</Text>
            </div>
            <Divider />
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "30px",
            }}>
                <div className="flex flex-col gap-2">
                    <Header5 className="font-semibold">Select Your Industry</Header5>
                    <Text className="mb-0">The industry you choose will determine the unit of competency awarded upon successful completion of the course.</Text>
                    <div id="fss-radio" className="flex flex-col gap-2">
                        <div className="flex flex-col items-start gap-2">
                            <label className="flex flex-row gap-2 items-center">
                                <input id="hospitality-radio" type="radio" onClick={() => selectCourse("Hospitality")} checked={selectedCourse == "Hospitality"}/>
                                Hospitality
                            </label>
                            <label className="flex flex-row gap-2 items-center">
                                <input id="health-radio" type="radio" onClick={() => selectCourse("Health")} checked={selectedCourse == "Health"} />
                                {`Health & Community`}
                            </label>
                            <label className="flex flex-row gap-2 items-center">
                                <input id="processing-radio" type="radio" onClick={() => selectCourse("Processing")} checked={selectedCourse == "Processing"} />
                                Food Processing
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
            <Header5 className="font-semibold pb-4">{`Terms & Conditions`}</Header5>
            <div className="flex gap-2 items-start">
                <input id="checkbox-accept-terms" type="checkbox" checked={termsAccepted} onClick={() => setTermsAccepted(!termsAccepted)} className="mt-1 w-4 h-4 flex-none"/>
                <label htmlFor="checkbox-accept-terms">Check here to indicate that you have read and agree to the terms and conditions of the <NextLink href="/legal/enrolment-policy"><a target="_blank">AIFS Enrolment Policy</a></NextLink> and the <NextLink href="/legal/payment-policy"><a target="_blank">AIFS Payment and Refund Policy</a></NextLink>.</label>
            </div>
            <div className="flex flex-row justify-between items-center border-t pt-4 mt-4">
                <Button variant="primary" id="button-fss-checkout-modal-cancel" onClick={cancel} className="capitalize">Cancel</Button>
                <Button variant="secondary" id="button-fss-checkout-modal-checkout" disabled={!termsAccepted || !selectedCourse} onClick={checkout}>Proceed to Checkout</Button>
            </div>
        </div>
    </div>
};

const FSSData = courseData[Courses.FoodSafetySupervisor];
export const FoodSafetySupervisorModal = () => {
    const router = useRouter();
    const [ termsAccepted, setTermsAccepted ] = useState(false);
    const [ nswRequired, setNswRequired ] = useState(true);
    const dispatch = useAppDispatch();
    const { toggleModal } = AppActions;


    const checkout = () => {
        const productID = nswRequired ? 14 : 13;
        if(window) {
            window.open(`${FSSData.checkout}${productID}`);
        }
    }

    const cancel = () => {
        dispatch(toggleModal(null));
    }
    return <div className="flex flex-col bg-white py-6 max-w-[600px]">
        <Header4 className="font-semibold text-teal px-6">Your Enrolment</Header4>  
        <div className="px-6 text-sm">
            <Divider />
            <Text>Check the details below and proceed to checkout.</Text>
            <div className="grid grid-cols-2 w-full">
                <Text className="font-semibold mb-0">Course:</Text>
                <Text className="mb-0 inline">{FSSData.longName}</Text>
                <Text className="font-semibold mb-0">Price:</Text>
                <Text className="mb-0 inline">{FSSData.price}</Text>
                <Text className="font-semibold mb-0">Prerequisites:</Text>
                <Text className="mb-0 inline">{FSSData.prerequisites}</Text>
                <Text className="font-semibold mb-0">Nationally Recognized:</Text>
                <Text className="mb-0 inline">{FSSData.nationallyRecognized ? "Yes this course is Nationally Recognised" : "No"}</Text>
            </div>
            <Divider />
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "30px",
            }}>
                <div className="flex flex-col gap-2">
                    <Header5 className="font-semibold">Do you require a NSW Food Authority Certificate?</Header5>
                    <Text className="mb-0">The NSW Food Authority Certificate will allow you to practise as a Food Safety Supervisor within NSW.</Text>
                    <div id="fss-radio" className="flex flex-col gap-2">
                        <div className="flex items-start gap-2">
                            <input id="radio-yes" type="radio" value="yes" checked={nswRequired} onClick={() => setNswRequired(true)} className="mt-1"/>
                            <label htmlFor="radio-yes">Yes - I require a NSW Food Authority Certificate </label>
                        </div>
                        <div className="flex items-start gap-2">
                            <input id="radio-no" type="radio" value="no" checked={!nswRequired} onClick={() => setNswRequired(false)} className="mt-1"/>
                            <label htmlFor="radio-no">No - I do not wish to operate within New South Wales</label>
                        </div>
                    </div>
                    <Text>Please note. NSW Food Authority Certificates incur an additional $30.00 Government Fee</Text>
                </div>
                <NextImage src={NSWCertificateImage} width={100} height={141} layout="fixed"/>
            </div>

            { !nswRequired ? <div className="mt-4 p-3 border-red-500 border bg-red-100"><Text className="font-semibold mb-0">Please Note: You are <span className="underline">required by law</span> to have a NSW Food Authority Certificate to work as a Food Safety Supervisor in New South Wales.</Text></div> : null }
            <Divider />
            <Header5 className="font-semibold mb-4">{`Terms & Conditions`}</Header5>
            <div className="flex gap-2">
                <input id="checkbox-accept-terms" type="checkbox" checked={termsAccepted} onClick={() => setTermsAccepted(!termsAccepted)} className="mt-1 w-4 h-4 flex-none"/>
                <label htmlFor="checkbox-accept-terms">Check here to indicate that you have read and agree to the terms and conditions of the <NextLink href="/legal/enrolment-policy"><a target="_blank">AIFS Enrolment Policy</a></NextLink> and the <NextLink href="/legal/payment-policy"><a target="_blank">AIFS Payment and Refund Policy</a></NextLink>.</label>
            </div>
            <div className="flex flex-row justify-between items-center border-t pt-4 mt-4 ">
                <Button variant="primary" id="button-fss-checkout-modal-cancel" className="capitalize" onClick={cancel}>Cancel</Button>
                <Button variant="secondary" id="button-fss-checkout-modal-checkout" disabled={!termsAccepted} onClick={checkout}>Proceed to Checkout</Button>
            </div>
        </div>
    </div>
};

const FMData = courseData[Courses.FoodManager];
export const FoodManagerModal = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { toggleModal } = AppActions;
    const [ termsAccepted, setTermsAccepted ] = useState(false);

    const checkout = () => {
        if(!termsAccepted) {
            throw Error(ERRORS.checkoutTermsNotAccepted);
        }
        if(window) {
            // router.push(`${FMData.checkout}`);
            window.open(`${FMData.checkout}`);
        }
    }

    const cancel = () => {
        dispatch(toggleModal(null));
    }
    return <div className="flex flex-col bg-white py-6 max-w-[600px]">
        <Header4 className="font-semibold text-teal px-6">Your Enrolment</Header4>
        <div className="px-6 text-sm">
            <Divider />
            <Text>Check the details below and proceed to checkout.</Text>
            <div className="grid grid-cols-2 w-full">
                <Text className="font-semibold mb-0">Course:</Text>
                <Text className="mb-0">{FMData.longName}</Text>
                <Text className="font-semibold mb-0">Price:</Text>
                <Text className="mb-0">{FMData.price}</Text>
                <Text className="font-semibold mb-0">Prerequisites:</Text>
                <Text className="mb-0">{FMData.prerequisites}</Text>
                <Text className="font-semibold mb-0">Nationally Recognized:</Text>
                <Text className="mb-0">{FMData.nationallyRecognized ? "Yes this course is Nationally Recognised" : "No this course is not Nationally Recognised"}</Text>
            </div>
            <Divider />
            <Header5 className="font-semibold pb-4">{`Terms & Conditions`}</Header5>
            <div className="flex gap-2">
                <input id="checkbox-accept-terms" type="checkbox" checked={termsAccepted} onClick={() => setTermsAccepted(!termsAccepted)} className="mt-1 w-4 h-4 flex-none"/>
                <label htmlFor="checkbox-accept-terms">Check here to indicate that you have read and agree to the terms and conditions of the <NextLink href="/legal/enrolment-policy"><a target="_blank">AIFS Enrolment Policy</a></NextLink> and the <NextLink href="/legal/payment-policy"><a target="_blank">AIFS Payment and Refund Policy</a></NextLink>.</label>
            </div>
            <div className="flex flex-row justify-between items-center border-t pt-4 mt-4">
                <Button variant="primary" id="button-fss-checkout-modal-cancel" onClick={cancel} className="capitalize">Cancel</Button>
                <Button variant="secondary" id="button-fss-checkout-modal-checkout" disabled={!termsAccepted} onClick={checkout}>Proceed to Checkout</Button>
            </div>
        </div>
    </div>
};

const NSWData = courseData[Courses.NSWRecertification];
export const NSWRecertificationModal = () => {
    const router = useRouter();
    const [ termsAccepted, setTermsAccepted ] = useState(false);
    const dispatch = useAppDispatch();
    const { toggleModal } = AppActions;

    const checkout = () => {
        router.push(NSWData.checkout);
        if(window) window.open(NSWData.checkout);
    }

    const cancel = () => {
        dispatch(toggleModal(null));
    }
    return <div className="flex flex-col bg-white py-6 max-w-[600px]">
        <Header4 className="font-semibold text-teal px-6">Your Enrolment</Header4>
        <div className="px-6 text-sm">
            <Divider />
            <Text>Check the details below and proceed to checkout.</Text>
            <div className="grid grid-cols-2 w-full">
                <Text className="font-semibold mb-0">Course:</Text>
                <Text className="mb-0">{NSWData.longName}</Text>
                <Text className="font-semibold mb-0">Price:</Text>
                <Text className="mb-0">{NSWData.price}</Text>
                <Text className="font-semibold mb-0">Prerequisites:</Text>
                <Text className="mb-0">{NSWData.prerequisites}</Text>
                <Text className="font-semibold mb-0">Nationally Recognized:</Text>
                <Text className="mb-0">{NSWData.nationallyRecognized ? "Yes this course is Nationally Recognised" : "No"}</Text>
            </div>
            <Divider />
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "30px",
            }}>
                <div className="flex flex-col gap-2">
                    <Header5 className="font-semibold">NSW Food Authority Certificate</Header5>
                    <Text className="mb-0">The NSW Food Authority Certificate is required to practise as a Food Safety Supervisor within NSW.</Text>
                    <Text className="mb-0">On completion of your recertification, we will issue you an updated NSW Food Authority Certificate, valid for five years.</Text>
                    <Text className="mb-0">NSW Food Authority Certificates incur an additional $30.00 Government Fee.</Text>
                </div>
                <NextImage src={NSWCertificateImage} width={100} height={141} layout="fixed" />
            </div>
            <Divider />
            <Header5 className="font-semibold pb-4">{`Terms & Conditions`}</Header5>
            <div className="flex gap-2">
                <input id="checkbox-accept-terms" type="checkbox" checked={termsAccepted} onClick={() => setTermsAccepted(!termsAccepted)} className="mt-1 w-4 h-4 flex-none"/>
                <label htmlFor="checkbox-accept-terms">Check here to indicate that you have read and agree to the terms and conditions of the <NextLink href="/legal/enrolment-policy"><a target="_blank">AIFS Enrolment Policy</a></NextLink> and the <NextLink href="/legal/payment-policy"><a target="_blank">AIFS Payment and Refund Policy</a></NextLink>.</label>
            </div>
            <div className="flex flex-row justify-between items-center border-t pt-4 mt-4">
                <Button variant="primary" id="button-fss-checkout-modal-cancel" onClick={cancel} className="capitalize">Cancel</Button>
                <Button variant="secondary" id="button-fss-checkout-modal-checkout" disabled={!termsAccepted} onClick={checkout}>Proceed to Checkout</Button>
            </div>
        </div>
    </div>
};

const IntroData = courseData[Courses.IntroToFoodSafety];
export const IntroToFoodSafetyModal = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { toggleModal } = AppActions;
    const [ termsAccepted, setTermsAccepted ] = useState(false);

    const checkout = () => {
        if(!termsAccepted) {
            throw Error(ERRORS.checkoutTermsNotAccepted);
        }
        // router.push(`${FMData.checkout}`);
        if(window) window.open(`${IntroData.checkout}`);
    }

    const cancel = () => {
        dispatch(toggleModal(null));
    }
    return <div className="flex flex-col bg-white py-6 max-w-[600px]">
        <Header4 className="font-semibold text-teal px-6">Your Enrolment</Header4>
        <div className="px-6 text-sm">
            <Divider />
            <Text>Check the details below and proceed to checkout.</Text>
            <div className="grid grid-cols-2 w-full">
                <Text className="font-semibold mb-0">Course:</Text>
                <Text className="mb-0">{IntroData.longName}</Text>
                <Text className="font-semibold mb-0">Price:</Text>
                <Text className="mb-0">{IntroData.price}</Text>
                <Text className="font-semibold mb-0">Prerequisites:</Text>
                <Text className="mb-0">{IntroData.prerequisites}</Text>
                <Text className="font-semibold mb-0">Nationally Recognized:</Text>
                <Text className="mb-0">{IntroData.nationallyRecognized ? "Yes this course is Nationally Recognised" : "No this course is not Nationally Recognised"}</Text>
            </div>
            <Divider />
            <Header5 className="font-semibold pb-4">{`Terms & Conditions`}</Header5>
            <div className="flex gap-2">
                <input id="checkbox-accept-terms" type="checkbox" checked={termsAccepted} onClick={() => setTermsAccepted(!termsAccepted)} className="mt-1 w-4 h-4 flex-none"/>
                <label htmlFor="checkbox-accept-terms">Check here to indicate that you have read and agree to the terms and conditions of the <NextLink href="/legal/enrolment-policy"><a target="_blank">AIFS Enrolment Policy</a></NextLink> and the <NextLink href="/legal/payment-policy"><a target="_blank">AIFS Payment and Refund Policy</a></NextLink>.</label>
            </div>
            <div className="flex flex-row justify-between items-center border-t pt-4 mt-4">
                <Button variant="primary" id="button-fss-checkout-modal-cancel" onClick={cancel} className="capitalize">Cancel</Button>
                <Button variant="secondary" id="button-fss-checkout-modal-checkout" disabled={!termsAccepted} onClick={checkout}>Proceed to Checkout</Button>
            </div>
        </div>
    </div>
};

const HACCPData = courseData[Courses.HACCP];
export const HACCPModal = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { toggleModal } = AppActions;
    const [ termsAccepted, setTermsAccepted ] = useState(false);

    const checkout = () => {
        if(!termsAccepted) {
            throw Error(ERRORS.checkoutTermsNotAccepted);
        }
        if(window) window.open(`${HACCPData.checkout}`);
        router.push(`${HACCPData.checkout}`);
    }

    const cancel = () => {
        dispatch(toggleModal(null));
    }
    return <div className="flex flex-col bg-white py-6 max-w-[600px]">
        <Header4 className="font-semibold text-teal px-6">Your Enrolment</Header4>
        <div className="px-6 text-sm">
            <Divider />
            <Text>Check the details below and proceed to checkout.</Text>
            <div className="grid grid-cols-2 w-full">
                <Text className="font-semibold mb-0">Course:</Text>
                <Text className="mb-0">{HACCPData.longName}</Text>
                <Text className="font-semibold mb-0">Price:</Text>
                <Text className="mb-0">{HACCPData.price}</Text>
                <Text className="font-semibold mb-0">Prerequisites:</Text>
                <Text className="mb-0">{HACCPData.prerequisites}</Text>
            </div>
            <Divider />
            <Header5 className="font-semibold pb-4">{`Terms & Conditions`}</Header5>
            <div className="flex gap-2">
                <input id="checkbox-accept-terms" type="checkbox" checked={termsAccepted} onClick={() => setTermsAccepted(!termsAccepted)} className="mt-1 w-4 h-4 flex-none"/>
                <label htmlFor="checkbox-accept-terms">Check here to indicate that you have read and agree to the terms and conditions of the <NextLink href="/legal/enrolment-policy"><a target="_blank">AIFS Enrolment Policy</a></NextLink> and the <NextLink href="/legal/payment-policy"><a target="_blank">AIFS Payment and Refund Policy</a></NextLink>.</label>
            </div>
            <div className="flex flex-row justify-between items-center border-t pt-4 mt-4">
                <Button variant="primary" id="button-fss-checkout-modal-cancel" onClick={cancel} className="capitalize">Cancel</Button>
                <Button variant="secondary" id="button-fss-checkout-modal-checkout" disabled={!termsAccepted} onClick={checkout}>Proceed to Checkout</Button>
            </div>
        </div>
    </div>
};

const Divider = ({ className }: { className?: string }) => <div className={`w-full border-b-[1px] my-4 border-afs-light-gray ${className}`} />;


// interface FadeProps {
//     children?: React.ReactElement;
//     in: boolean;
//     onEnter?: () => {};
//     onExited?: () => {};
//   }

