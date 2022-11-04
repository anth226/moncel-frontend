import React from 'react';

import GTM from './gtm';
import Mixpanel from './mixpanel';
import CustomerIO from './customerio';
import NewRelic from './newrelic';

export default () => {
    return <>
        <GTM />
        <Mixpanel />
        <CustomerIO />
        <NewRelic />
    </>
};
