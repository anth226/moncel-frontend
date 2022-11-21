
import NextImage, { StaticImageData } from 'next/image';
import Slider, { Settings as ReactSlickSettings } from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import LogoSwissChalet from 'public/logos/cifs-logo-swisschalet.svg';
import LogoTheKeg from 'public/logos/cifs-logo-thekeg.svg';
import LogoTimHortons from 'public/logos/cifs-logo-timhortons.svg';
import LogoAW from 'public/logos/cifs-logo-aw.svg';
import LogoArbys from 'public/logos/cifs-logo-arbys.svg';
import LogoBoosterJuice from 'public/logos/cifs-logo-boosterjuice.svg';
import LogoBP from 'public/logos/cifs-logo-bp.svg';
import LogoCourtyardMariot from 'public/logos/cifs-logo-courtyardmarriott.svg';
import LogoDQ from 'public/logos/cifs-logo-dq_0.svg';
import LogoEarls from 'public/logos/cifs-logo-earls.svg';
import LogoHarveys from 'public/logos/cifs-logo-harveys.svg';
import LogoKernels from 'public/logos/cifs-logo-kernels.svg';
import LogoShoppers from 'public/logos/cifs-logo-shoppers.svg';
import LogoSubway from 'public/logos/cifs-logo-subway.svg';


const DEFAULT_ID = "carousel-logos";
const DEFAULT_LOGOS: Array<StaticImageData> = [
    LogoSwissChalet,
    LogoTheKeg,
    LogoTimHortons,
    LogoAW,
    LogoArbys,
    LogoBoosterJuice,
    LogoBP,
    LogoCourtyardMariot,
    LogoDQ,
    LogoEarls,
    LogoHarveys,
    LogoKernels,
    LogoShoppers,
    LogoSubway,
];

const SLIDER_OPTIONS = {
    className: "slider variable-width",
    centerMode: false,
    draggable: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 250,
    slidesToShow: 8,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 458,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        }
      ]
};

interface LogosProps {
    id?: string;
    logos?: Array<StaticImageData>
    className?: string;
    sliderOverrides?: Partial<ReactSlickSettings>;
}

const Logos = (props: LogosProps) => {
    const id = props.id || DEFAULT_ID;

    const _logos = props.logos || DEFAULT_LOGOS;
    const overrides = props.sliderOverrides || {};
    const sliderOptions = { ...SLIDER_OPTIONS, ...overrides }

    return <div className={`w-full overflow-hidden ${props.className || ""}`} id={id}>
        <Slider { ...sliderOptions } className="max-w-full mx-4 lg:mx-0">
            { _logos.map((logo, i) => <Slide src={logo} key={`logo-${i}`} />) }
        </Slider>
    </div>
};

const Slide = ({ src }: { src: StaticImageData }) => {
    return <NextImage src={src} width={118} height={70} layout="fixed" />;
};

export default Logos;
