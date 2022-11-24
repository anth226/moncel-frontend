import { Text } from 'components/core/Typography';
import NextImage from 'next/image';

const NRT = () => {
    return <>Nationally Recognised Training is delivered in association with Australian Institute of Food Safety (Registered Training Organisation) (#41127). The Australian Institute of Food Safety is a NSW Food Authority Approved Provider. For a full list of AIFS policies and terms of use, visit the Australian Institute of Food Safety support centre. Food safety advice and recommendations should be considered a guide only. For authoritative guidance on food safety related issues please consult your local government agency or Food Standards Australia New Zealand.</>
} 

const Copyright = () => {
    return <>Copyright {new Date().getFullYear()} © Australian Institute of Food Safety. All Rights Reserved. Australian Institute of Food Safety, foodsafety.com.au, the AIFS logo and the AIFS Wheat Symbol are trademarks of the Australian Institute of Food Safety. All other trademarks are the property of their respective owners.</>;
  };

const CopyRightFooter = () => {
    return <>
        <div className="hidden md:block w-full bg-teal md:py-8 lg:pt-7" id="section-footer-copyright">
            <div className="padded-section bg-teal grid text-mine text-sm grid-cols-4 justify-center md:pt-8 lg:pt-7 md:border-t-[1px] md:border-white md:border-opacity-20 gap-x-4">
                <div className="col-span-4 md:col-span-3 flex flex-row mb-4">
                    <div className="mb-3.5 mr-5 float-left"><NextImage src="/afs-logo-symbol-white.svg" alt="footer-copyright-afs-logo" layout="fixed" width={48} height={60} /></div>
                    <Text className="!text-mine"><Copyright/></Text>
                </div>
                <Text className="col-span-4 md:col-span-3 !text-mine !mb-0"><NRT/></Text>
                <div className="hidden md:block col-span-1 col-start-4 row-start-1">
                    <div className="flex flex-row gap-[10px] items-center mb-2"><NextImage src="/social-facebook.svg" layout="fixed" height={18} width={18} /><a href="https://www.facebook.com/ausfoodsafety" target="_blank" rel="noreferrer" className="text-mine no-underline hover:underline">Follow us on Facebook <br/></a></div>
                    <div className="flex flex-row gap-[10px] items-center"><NextImage src="/social-linkedin.svg" layout="fixed" height={18} width={18} /><a href="https://www.linkedin.com/company/australian-institute-of-food-safety/" target="_blank" rel="noreferrer" className="text-mine no-underline hover:underline">Follow us on LinkedIn <br/></a></div>
                </div>
            </div>
        </div>
        <div className="md:hidden w-full bg-teal py-10" id="section-footer-contact">
            <div className="padded-section bg-teal text-mine text-sm justify-center flex flex-col gap-x-7 gap-y-3 leading-6" >
                <Text className="!text-mine">
                    <span className="mr-5 float-left"><NextImage src="/afs-logo-symbol-white.svg" alt="footer-copyright-afs-logo" layout="fixed" width={48} height={60} /></span>
                    <Copyright/>
                </Text>
                <Text className="col-span-4 md:col-span-3 !text-mine"><NRT/></Text>
            </div>
        </div>
    </>;
};

export default CopyRightFooter;
