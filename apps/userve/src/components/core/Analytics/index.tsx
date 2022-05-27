import React from 'react';

import GTM from './gtm';
import Mixpanel from './mixpanel';
import CustomerIO from './customerio';
import Smartlook from './smartlook';

export default () => {
    return <>
        <GTM />
        <Mixpanel />
        <CustomerIO />
        <Smartlook />
    </>
};
