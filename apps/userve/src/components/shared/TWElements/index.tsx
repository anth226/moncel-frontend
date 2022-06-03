import React, {useState, useEffect} from "react";

const TWElements = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src='https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js';
        script.addEventListener('load', ()=>setLoaded(true));
        document.body.appendChild(script);
    }, []);

    return (
        <>
            {loaded ? '' : ''}
        </>
    );

}

export default TWElements;
