import { StoryBlokSectionHeroSecondary } from 'moncel-one-sdk/cms/types';
import { useMediaQuery } from 'react-responsive'
import ReactMarkdown from 'react-markdown'

import Image from 'next/image';
import Link from 'next/link';

const Hero = ({ hero }: { hero: StoryBlokSectionHeroSecondary }) => {

    const isTablet = useMediaQuery({
        query: '(max-width: 768px)'
    });

    const imageDimensions = isTablet ? [270, 240] : [350, 311];
console.log(hero)
    return <div className="container">
        <div className="row align-items-center px-4 px-sm-0">
        <div className="col-12 col-md-7 col-lg-6 py-0 py-md-8 text-center text-md-start">
            <ReactMarkdown className="text-white pb-4">{hero.title}</ReactMarkdown>
            <Link href={hero.button_link} passHref><div className="btn btn-primary text-white">{hero.button_text}</div></Link>
        </div>
        { isTablet ? null : <div className={'col-12 col-md-5 col-lg-4 offset-lg-2 d-none d-md-block'}>

            <div style={{
                width: imageDimensions[0],
                height: imageDimensions[1],
            }}><Image src={hero.image.image} alt={hero.title} width={350} height={311} /></div>
        </div> }
        </div>
    </div>
}

export default Hero;