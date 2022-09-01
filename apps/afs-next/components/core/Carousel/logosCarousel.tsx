
import NextImage, { StaticImageData } from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

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
    LogoBP
];

interface LogosProps {
    id?: string;
    logos?: Array<StaticImageData>
    className?: string;
}
const Logos = (props: LogosProps) => {
    const id = props.id || DEFAULT_ID;
    const [ viewportRef ] = useEmblaCarousel({ align: "start", loop: true, slidesToScroll: 2 }, [ Autoplay({ delay: 2000 }) ]);

    const _logos = props.logos || DEFAULT_LOGOS;

    return <div className={`w-full overflow-hidden ${props.className || ""}`} ref={viewportRef} id={id}>
        <div className="flex flex-row">
            { _logos.map(logo => <Slide src={logo} />) }
            {/* duplicate slides here, but keep scroll snaps same to fix infinite loop */}
        </div>
    </div>
};

const Slide = ({ src }: { src: StaticImageData }) => {
    return <NextImage src={src} />;
};

export default Logos;
