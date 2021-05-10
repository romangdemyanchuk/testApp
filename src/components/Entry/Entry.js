import React from 'react';
import {Btn} from '../../generic/Button';
import {Link, useHistory} from 'react-router-dom';
import {getFromStorage} from '../../utils/helpers/functions';

const Entry = () => {
    const history = useHistory();
    getFromStorage('isAuth') && history.push('/people');

    return <>
        <h3 style={{textAlign: 'center'}}>My app</h3>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Link to={'/login'}><Btn text="Login"/></Link>
            <Link to={'/register'}><Btn text="Register"/></Link>
        </div>
    </>;
};
export default Entry;
