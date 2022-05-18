import React, { useEffect } from 'react';
import { navigate } from '@reach/router';

export default () => {
    useEffect(() => {
        navigate('/us', { replace: true });
    });
    return null;
};

