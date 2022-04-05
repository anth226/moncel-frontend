import Link from 'next/link';

const Sidebar = () => {

    return <div className="sidebar-cta p-0 p-md-4 text-center">
        <h4 className="text-primary pb-2">Food Handler Certificate</h4>
        <ul className="text-white text-start list-square">
            <li className="pb-1">100% online</li>
            <li className="pb-1">Same-day certification</li>
            <li className="pb-1">Unlimited 30-day access</li>
            <li className="pb-1">{'All notes & course materials'}</li>
            <li>Free exam retakes</li>
        </ul>
        <div className="display-2 price mt-2 mb-3 text-white">$49</div>
        <div className="btn btn-primary">
            <Link href="https://my.instacert.ca/urlcheckout/add?product=7&amp;qty=1">REGISTER NOW</Link>
        </div>      
    </div>
};

export default Sidebar;