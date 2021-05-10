import React from "react";
import Button from "../../generic/Button";
import {Link, useHistory} from "react-router-dom";
import {getFromStorage} from "../../utils/helpers/functions";

const Entry = () => {
    const history = useHistory();
    getFromStorage("isAuth") && history.push('/people')

    return <>
        <h3 style={{textAlign: 'center'}}>My app</h3>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Link to={'/login'}><Button text="Login"/></Link>
            <Link to={'/register'}><Button text="Register"/></Link>
        </div>
    </>
};
export default Entry;
