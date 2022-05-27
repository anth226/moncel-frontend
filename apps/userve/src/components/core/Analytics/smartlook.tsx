import React, { useEffect } from 'react';
import smartlookClient from 'smartlook-client'

export default () => {
    useEffect(() => {
        smartlookClient.init('250d7a677249b463b4ed2568d28af20e159352a4')
    }, []);
    return null;
};
