import { useState, useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { CarouselProps, SlideControlProps } from './types';
import { FoodAllergenSlide, FoodSafetyCardSlide, HaccpSlide, LawsRequirementsSlide, BusinessSlide } from './sections';


const DEFAULT_INDICATOR_ID = "carousel-indicators";
const AUTOPLAY_DELAY = 10000; // millis

const SlideControl = (props: SlideControlProps) => {


  const { active, ariaLabel, ...rest } = props;
  return <button type="button"
    className={`bg-white h-[12px] w-[12px] rounded-xl ${active ? "" : "opacity-25"}`}
    aria-current={!!active}
    aria-label={ariaLabel}
    {...rest}
    />;
};

const Carousel = (props: CarouselProps) => {
  const id = props.id || DEFAULT_INDICATOR_ID;
  const [ viewportRef, embla ] = useEmblaCarousel({ loop: true, skipSnaps: false, draggable: true });
  const scrollTo = useCallback((index: number) => embla && embla.scrollTo(index), [ embla ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<Array<number>>([]);
  const autoplayRef = useRef<NodeJS.Timer | undefined>(undefined);

  const incrementSlide = useCallback(() => {

    if(!embla) return;
    const newIndex = (selectedIndex + 1) % 5;
    setSelectedIndex(newIndex);
    scrollTo(newIndex);
  }, [embla, selectedIndex, scrollTo]);

  const resetAutoplay = useCallback(() => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(incrementSlide, AUTOPLAY_DELAY);
  }, [incrementSlide]);

  const onSelect = useCallback(() => {
    if(!embla) return;
    resetAutoplay();
    setSelectedIndex( embla.selectedScrollSnap() );
  }, [embla, setSelectedIndex, resetAutoplay]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
  }, [ embla, setScrollSnaps, onSelect ]);

  const handleCarouselIndicatorClick = (i: number) => {
    resetAutoplay();
    setSelectedIndex(i);
    scrollTo(i);
  };

  return <div id={id} className="w-auto relative pointer-events-auto" >
      {/* Carousel slides */}
      {/* Minimal embla setup has two wrappers (overflow and scroll container) to detect scroll snaps: https://www.embla-carousel.com/get-started/react/ */}
      <div className="w-full overflow-hidden pointer-events-auto cursor-grab" ref={viewportRef}>
        <div className="flex flex-row">
          <FoodSafetyCardSlide />
          <FoodAllergenSlide />
          <HaccpSlide />
          <LawsRequirementsSlide />
          <BusinessSlide />
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="hidden absolute w-full md:flex justify-center right-0 bottom-0 left-0 gap-2 p-0 mb-4">
          { scrollSnaps.map((_, i) => {
            return <SlideControl active={i == selectedIndex} ariaLabel={`Slide ${i}`} key={`carousel-indicator-${i}`} onClick={() => { handleCarouselIndicatorClick(i); }} />;
          })}
      </div>

    </div>;
};

export default Carousel;
export { default as LogosCarousel } from './logosCarousel';