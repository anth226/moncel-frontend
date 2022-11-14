import { useState, useLayoutEffect, useEffect, useRef, MutableRefObject } from "react";

/**
 * Takes a ref to an element and its ID as a string
 * Returns the id when scrolling causes the top of the element to intersect with the top of the viewport
 * The return value is a string, not a bool, so you can chain many values in a disjunction to see which element intersected
 * 
 */
const useIsOnScreen = (elementId: string) => {
    const [isOnScreen, setIsOnScreen] = useState("");
    const observerRef = useRef<IntersectionObserver | null>(null);

    // act on top-to-top intersection
    const IOOptions: IntersectionObserverInit = {
        threshold: [0.1, 0.9],
    };

    const callback = ([entry]: IntersectionObserverEntry[]) => {
        setIsOnScreen(entry.isIntersecting ? elementId : "");
    };

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            callback,
            IOOptions,
        );
    }, []);

    useEffect(() => {
        if (observerRef.current && document) {
            // observerRef.current.observe(ref.current);
            const targetElement = document.querySelector(`#${elementId}`);
            if(targetElement) observerRef.current.observe(targetElement);

            return () => {
                observerRef.current && observerRef.current.disconnect();
            };
        }
    }, []);

    return isOnScreen;
};

export default useIsOnScreen;
