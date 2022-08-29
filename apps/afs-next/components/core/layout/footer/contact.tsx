

const ContactFooter = () => {
    return <div className="hidden md:block w-screen bg-afs-green" id="section-footer-contact">
        <div className="padded-section bg-afs-green grid text-white text-xs grid-cols-4 justify-center p-12 lg:p-0 gap-7 pb-10">
            <div className="flex flex-col">
                <p className="font-bold pb-1">Australian Institute of Food Safety</p>
                <p>ABN 92 159 296 474</p>
                <p>RTO 41127</p>
                <br />
                <br />
                <p>GPO BOX 436</p>
                <p>Brisbane QLD</p>
                <p>AU 4001</p>
            </div>
            <div className="flex flex-col">
                <p className="font-bold pb-1">New South Wales {'&'} ACT</p>
                <p>Level 26, 44 Market Street</p>
                <p>Sydney NSW</p>
                <p>AU 2000</p>
                <br />
                <p>Ph 02 8315 7059</p>
                <p>Email nsw@foodsafety.com.au</p>
            </div>
            <div className="flex flex-col">
                <p className="font-bold pb-1">Victoria</p>
                <p>Level 27, 101 Collins Street</p>
                <p>Melbourne VIC</p>
                <p>AU 3000</p>
                <br />
                <p>Ph 03 8373 7761</p>
                <p>Email vic@foodsafety.com.au</p>
            </div>
            <div className="flex flex-col">
                <p className="font-bold pb-1">Queensland</p>
                <p>Level 4, 46 Edward St</p>
                <p>Brisbane QLD</p>
                <p>AU 4000</p>
                <br />
                <p>Ph 07 3073 3954</p>
                <p>Email qld@foodsafety.com.au</p>
            </div>
        </div>
    </div>;
};

export default ContactFooter;
