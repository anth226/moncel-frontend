

const ContactFooter = () => {
    return <div className="hidden md:block w-full bg-teal md:pt-8 lg:pt-0" id="section-footer-contact">
    <div className="padded-section grid text-white text-sm grid-cols-4 justify-center lg:pt-7 lg:border-t-[1px] lg:border-white lg:border-opacity-20 gap-4 leading-5">
            <div className="flex flex-col">
                <p className="text-base font-semibold text-white pb-2 leading-4">Australian Institute of Food Safety</p>
                <p>ABN 92 159 296 474</p>
                <p className="mb-2">RTO 41127</p>
                <p>GPO BOX 436</p>
                <p>Brisbane QLD</p>
                <p>AU 4001</p>
            </div>
            <div className="flex flex-col">
                <p className="text-base font-semibold text-white pb-2 leading-4">New South Wales {'&'} ACT</p>
                <p>Level 26, 44 Market Street</p>
                <p>Sydney NSW</p>
                <p className="mb-2">AU 2000</p>
                <p>Ph 02 8315 7059</p>
                <p>Email <a href="mailto:nsw@foodsafety.com.au" target="_blank" rel="noreferrer" className="text-white no-underline hover:underline">nsw@foodsafety.com.au</a></p>
            </div>
            <div className="flex flex-col">
                <p className="text-base font-semibold text-white pb-2 leading-4">Victoria</p>
                <p>Level 27, 101 Collins Street</p>
                <p>Melbourne VIC</p>
                <p className="mb-2">AU 3000</p>
                <p>Ph 03 8373 7761</p>
                <p>Email <a href="mailto:vic@foodsafety.com.au" target="_blank" rel="noreferrer" className="text-white no-underline hover:underline">vic@foodsafety.com.au</a></p>
            </div>
            <div className="flex flex-col">
                <p className="text-base font-semibold text-white pb-2 leading-4">Queensland</p>
                <p>Level 4, 46 Edward St</p>
                <p>Brisbane QLD</p>
                <p className="mb-2">AU 4000</p>
                <p>Ph 07 3073 3954</p>
                <p>Email <a href="mailto:qld@foodsafety.com.au" target="_blank" rel="noreferrer" className="text-white no-underline hover:underline">qld@foodsafety.com.au</a></p>
            </div>
        </div>
    </div>;
};

export default ContactFooter;
