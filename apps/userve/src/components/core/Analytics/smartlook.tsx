// @ts-nocheck
import React, { useEffect } from 'react';

export default () => {
    useEffect(() => {
        if(window) {
            window.smartlook || (function(d) {
                var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
                var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
                c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);
                })(document);
                smartlook('init', '250d7a677249b463b4ed2568d28af20e159352a4');
            }
    }, []);
    return null;
};
