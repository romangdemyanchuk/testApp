import React from 'react';
import {Button} from 'antd';

export const Btn = ({text, funk = () => {}, IsDisabled=false}) => (
    <div style={{textAlign: 'center', margin: '10px 2px'}} onClick={funk}>
        <Button disabled={IsDisabled} type="primary">{text}</Button>
    </div>
);
