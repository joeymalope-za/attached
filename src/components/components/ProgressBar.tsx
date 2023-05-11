import React from 'react';

import { StyledProgressBar } from './ProgressBar.style';

const ProgressBar = (props: ProgressBarProps) => {
    const { progress, total } = props;
    
    return (
        <StyledProgressBar >
            <div className='progress' style={{ width: `${ Math.round(1+progress/total*100)}%` }} />
        </StyledProgressBar>
    );
};

export default ProgressBar;

type ProgressBarProps = {
    progress: number;
    total: number;
};

