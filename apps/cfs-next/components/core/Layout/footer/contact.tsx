import Image from 'components/core/Image';

const ContactFooter = () => {
    return <div className="hidden md:flex flex-col gap-4 py-7 items-end w-full text-white col-span-1" id="section-footer-contact">
        <Image src="/chat_wh.svg" layout="fixed" width={100} height={100} alt="contact us chat bubbles icon" />
        <div className="flex flex-col items-end">
            <p className="text-lg">{`We're here to help`}</p>
            <h2><a href="tel:1-800-505-9145" className="text-white text-4xl no-underline hover:underline cursor-pointer">1 800 505 9145</a></h2>
        </div>

        <div className="flex flex-col items-end">
            <strong>Canadian Institute of Food Safety</strong>
            <p>77 Bloor St West, Suite 600</p>
            <p>Toronto, Ontario, M5S 1M2, Canada</p>
        </div>
           
    </div>;
};

export default ContactFooter;
