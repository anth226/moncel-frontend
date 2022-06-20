import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import { ComponentLandingFinalCta } from 'generated/strapi-types';

const CtaSection = ({ data }: { data: ComponentLandingFinalCta }) => {
    return <div className="container">
        <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start">
                <h2 className="text-white max-w-lg cta"><ReactMarkdown>{data.title || ""}</ReactMarkdown></h2>
            </div>
            <div className="col-12 offset-0 col-md-4 offset-md-2 text-center text-md-end pb-0 pt-3 pt-md-0">
                <Link href={data.button?.href || ""} passHref>
                    <div className="btn btn-primary">
                        <p className="mb-0">${data.button?.text || ""}</p>
                    </div>
                </Link>
            </div>

        </div>
        
    </div>
};

export default CtaSection;