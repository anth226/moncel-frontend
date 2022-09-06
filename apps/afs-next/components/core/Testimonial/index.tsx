import { ReactNode } from 'react';
import NextImage, { StaticImageData } from 'next/image';

interface TestimonialProps {
    imageSrc: string | StaticImageData;
    author: string;
    authorIntro: string;
    children: ReactNode;
};

const Testimonial = (props: TestimonialProps) => {
    return <div className="flex flex-row p-4 gap-4 border-[1px] border-afs-light-green">
        <div className="flex flex-col">
            <NextImage src={props.imageSrc} width={70} height={70} />
            <p className="text-xs text-afs-green mt-4">{props.author}</p>
            <p className="text-xs text-[#ccc]">{props.authorIntro}</p>
        </div>
        <div>
            <p className="font-[1em] text-afs-green italic">
                { props.children }
            </p>
        </div>
    </div>;
};

export default Testimonial;
