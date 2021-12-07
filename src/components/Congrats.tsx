import React from 'react';
import { SuccessType } from '../types';

const Congrats: React.FunctionComponent<SuccessType> = (props: SuccessType) => {
    if (props.success) {
        return <div data-test="congrats">Congratulations</div>;
    } else {
        return <div data-test="congrats"></div>;
    }
};

export default Congrats;
