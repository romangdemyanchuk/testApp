import React from 'react';
import { Button} from 'antd';

export const Btn = ({text, funk = () => {}, isDisabled= false}) => (
    <div style={{textAlign: 'center', margin: '10px 2px'}} onClick={funk}>
        <Button disabled={isDisabled} type="primary">{text}</Button>
    </div>
);
