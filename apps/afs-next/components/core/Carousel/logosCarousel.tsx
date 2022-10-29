
import NextImage, { StaticImageData } from 'next/image';
import Slider, { Settings as ReactSlickSettings } from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import LogoNestle from 'public/logos/logo_nestle.svg';
import LogoSubway from 'public/logos/logo_subway.svg';
import LogoUnitedCare from 'public/logos/logo_uniting_care.svg';
import LogoPizzaHut from 'public/logos/logo_pizza_hut.svg';
import LogoSumoSalad from 'public/logos/logo_sumo_salad.svg';
import LogoYmca from 'public/logos/logo_ymca.svg';
import LogoRedRooster from 'public/logos/logo_red_rooster.svg';
import LogoSupaIga from 'public/logos/logo_supa_iga.svg';
import LogoRydges from 'public/logos/logos_rydges.svg';
import LogoTgiFridays from 'public/logos/logo_tgi_fridays.svg';
import LogoLendardsChicken from 'public/logos/logo_lenards_chicken.svg';
import LogoBP from 'public/logos/logo_bp.svg';


const DEFAULT_ID = "carousel-logos";
const DEFAULT_LOGOS: Array<StaticImageData> = [
    LogoNestle,
    LogoSubway,
    LogoUnitedCare,
    LogoPizzaHut,
    LogoSumoSalad,
    LogoYmca,
    LogoRedRooster,
    LogoSupaIga,
    LogoRydges,
    LogoTgiFridays,
    LogoLendardsChicken,
    LogoBP,
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
