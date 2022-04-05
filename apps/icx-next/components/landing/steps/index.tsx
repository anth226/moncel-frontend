import Image from 'next/image'

const StepsSection = () => {
    return <div className="row">
        <div className="col-12 col-md-3">
            <h2 className="line">3 easy steps</h2>
        </div>
        <div className="col-12 col-md-3">
            <Image alt="register-icon" src="/icons/register-1.svg" width={90} height={90} layout="fixed" />
            <h5 className="mt-2">Register</h5>
            <p className="mb-0">Get immediate online access on any device.</p>
        </div>
        <div className="col-12 col-md-3">
            <Image alt="register-icon" src="/icons/complete-2.svg" width={90} height={90} layout="fixed" />
            <h5 className="mt-2">Complete</h5>
            <p className="mb-0">{"You’ll be done in as little as 8 hours - that’s it!"}</p>
        </div>
        <div className="col-12 col-md-3">
            <Image alt="register-icon" src="/icons/certified-3.svg" width={90} height={90} layout="fixed" />
            <h5 className="mt-2">Print</h5>
            <p className="mb-0">Your certificate will be emailed in minutes.</p>
        </div>
    </div>
}

export default StepsSection;