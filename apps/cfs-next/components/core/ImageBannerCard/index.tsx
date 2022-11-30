import NextImage, { StaticImageData } from 'next/image';
import Image from 'components/core/Image';
import { Text, Header3 } from 'components/core/Typography';

interface ImageBannerCardProps {
    imageSrc: string | StaticImageData;
    title: string;
    description: string;
}
  
const ImageBannerCard = (props: ImageBannerCardProps) => {
    const { imageSrc, title, description } = props;
    return <div className="flex flex-col w-full">
        <Image src={imageSrc} alt={`image-graphic-for-card-${title}`} layout="responsive" />
        <div className="bg-bunting w-full flex justify-center items-center p-4"><Header3 className="!text-white !text-sm !mb-0 font-semibold">{title.toUpperCase()}</Header3></div>
        <div className=" p-4 md:min-h-[120px]"><Text className=" text-semibold">{description}</Text></div>
        <div className="icon"><NextImage src="/icons/icon_stroke_green_arrow_down.svg" width={15} height={8}></NextImage></div>
    </div>
};

export default ImageBannerCard;
