import { ReactNode } from 'react';
import NextImage, { StaticImageData } from 'next/image';
import { Text } from '../typography';

interface TestimonialProps {
    imageSrc: string | StaticImageData;
    author: string;
    authorIntro: string;
    children: ReactNode;
}

const Testimonial = (props: TestimonialProps) => {
    const imagePlaceholder = typeof props.imageSrc === "string" ? props.imageSrc : undefined;
    return <div className="flex flex-row p-4 gap-4 border border-mint">
        <div className="flex flex-col">
            <NextImage src={props.imageSrc} width={70} height={70} layout="fixed" placeholder="blur" blurDataURL={imagePlaceholder} />
            <p className="text-xs text-afs-green mt-2">{props.author}</p>
            <p className="text-xs text-[#ccc]">{props.authorIntro}</p>
        </div>
        <div>
            <Text className="!text-teal italic leading-5">
                { props.children }
            </Text>
        </div>
    </div>;
};

export default Testimonial;
