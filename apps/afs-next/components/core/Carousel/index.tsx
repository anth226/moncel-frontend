import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { CarouselProps, SlideControlProps } from './types';
import { CovidSlide, FoodSafetyCardSlide, HaccpSlide, FoodSafetyDecalSlide, FoodSafetySupervisorSlide } from './sections';


const DEFAULT_INDICATOR_ID = "carousel-indicators";

const SlideControl = (props: SlideControlProps) => {


  const { active, ariaLabel, ...rest } = props;
  return <button type="button"
    className={`bg-white h-[10px] w-[10px] rounded-xl ${active ? "" : "opacity-25"}`}
    aria-current={!!active}
    aria-label={ariaLabel}
    {...rest}
    />;
};

const Carousel = (props: CarouselProps) => {
  const id = props.id || DEFAULT_INDICATOR_ID;
  const [ viewportRef, embla ] = useEmblaCarousel({ loop: true, skipSnaps: false }, [ Autoplay({ delay: 10000 }) ]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [ embla ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<Array<number>>([]);

  const onSelect = useCallback(() => {
    if(!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
  }, [ embla, setScrollSnaps, onSelect ]);

  const handleCarouselIndicatorClick = (i: number) => {
    setSelectedIndex(i);
    scrollTo(i);
  };

  return <div id={id} className="w-auto relative" >
      {/* Carousel slides */}
      {/* Minimal embla setup has two wrappers (overflow and scroll container) to detect scroll snaps: https://www.embla-carousel.com/get-started/react/ */}
      <div className="w-full overflow-hidden" ref={viewportRef}>
        <div className="flex flex-row">
        <CovidSlide />
          <FoodSafetyCardSlide />
          <HaccpSlide />
          <FoodSafetyDecalSlide />
          <FoodSafetySupervisorSlide />
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="hidden absolute w-full md:flex justify-center right-0 bottom-0 left-0 gap-1 p-0 mb-4">
          { scrollSnaps.map((_, i) => {
            return <SlideControl active={i == selectedIndex} ariaLabel={`Slide ${i}`} key={`carousel-indicator-${i}`} onClick={() => { handleCarouselIndicatorClick(i); }} />;
          })}
      </div>

    </div>;
};

export default Carousel;
export { default as LogosCarousel } from './logosCarousel';