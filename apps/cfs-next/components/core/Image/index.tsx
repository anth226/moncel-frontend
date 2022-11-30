import NextImage, { StaticImageData } from 'next/image';


interface ImageProps {
    src: string | StaticImageData;
    [ key: string ]: unknown;
}
/**
 * Just a wrapper for next/image that adds some default behavior
 * Note that svgs need not be static imports - this is a quirk that can be fixed
 */
const Image = (props: ImageProps) => {
    const { src, ...rest } = props;
    const blurDataURL = typeof src === "string" ? src : undefined;
    return <NextImage src={src} placeholder="blur" blurDataURL={blurDataURL} {...rest}/>
};

export default Image;
