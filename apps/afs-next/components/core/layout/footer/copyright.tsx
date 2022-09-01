import NextImage from 'next/image';

const CopyRightFooter = () => {
    return <>
        <div className="hidden md:block w-screen bg-afs-green p-12 lg:p-0" id="section-footer-contact">
            <div className="padded-section bg-afs-green grid text-white text-xs lg:text-base grid-cols-4 justify-center gap-x-7 gap-y-2 py-10 border-t-[1px] border-afs-green-light">
                <div className="col-span-4 md:col-span-3 flex flex-row ">
                    <div className="mb-3.5 mr-5 float-left"><NextImage src="/afs-logo-symbol-white.svg" alt="footer-copyright-afs-logo" layout="fixed" width={48} height={60} /></div>
                    <p>Copyright 2021 © Australian Institute of Food Safety. All Rights Reserved. Australian Institute of Food Safety, foodsafety.com.au, the AIFS logo and the AIFS Wheat Symbol are trademarks of the Australian Institute of Food Safety. All other trademarks are the property of their respective owners.</p>
                </div>
                <p className="col-span-4 md:col-span-3">Nationally Recognised Training is delivered in association with Australian Institute of Food Safety (Registered Training Organisation) (#41127). The Australian Institute of Food Safety is a NSW Food Authority Approved Provider. For a full list of AIFS policies and terms of use, visit the Australian Institute of Food Safety support centre. Food safety advice and recommendations should be considered a guide only. For authoritative guidance on food safety related issues please consult your local government agency or Food Standards Australia New Zealand.</p>
                <div className="hidden md:block col-span-1 col-start-4 row-start-1">
                    <div className="flex flex-row gap-[10px] items-center"><NextImage src="/social-facebook.svg" layout="fixed" height={18} width={18} /><p>Follow us on Facebook <br/></p></div>
                    <div className="flex flex-row gap-[10px] items-center"><NextImage src="/social-linkedin.svg" layout="fixed" height={18} width={18} /><p>Follow us on LinkedIn <br/></p></div>
                </div>
            </div>
        </div>
        <div className="md:hidden w-screen bg-afs-green p-6" id="section-footer-contact">
            <div className="padded-section bg-afs-green text-white text-xs lg:text-base justify-center flex flex-col gap-x-7 gap-y-3 leading-loose" >
                <p>
                    <span className="mr-5 float-left"><NextImage src="/afs-logo-symbol-white.svg" alt="footer-copyright-afs-logo" layout="fixed" width={48} height={60} /></span>
                    Copyright 2021 © Australian Institute of Food Safety. All Rights Reserved. Australian Institute of Food Safety, foodsafety.com.au, the AIFS logo and the AIFS Wheat Symbol are trademarks of the Australian Institute of Food Safety. All other trademarks are the property of their respective owners.
                </p>
                <p className="col-span-4 md:col-span-3">Nationally Recognised Training is delivered in association with Australian Institute of Food Safety (Registered Training Organisation) (#41127). The Australian Institute of Food Safety is a NSW Food Authority Approved Provider. For a full list of AIFS policies and terms of use, visit the Australian Institute of Food Safety support centre. Food safety advice and recommendations should be considered a guide only. For authoritative guidance on food safety related issues please consult your local government agency or Food Standards Australia New Zealand.</p>
            </div>
        </div>
    </>;
};



export default CopyRightFooter;
