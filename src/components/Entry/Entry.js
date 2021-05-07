import React from "react";
import Button from "../../generic/Button";
import {Link, useHistory} from "react-router-dom";

const Entry = () => {
    const history = useHistory();
    localStorage.getItem("isAuth") && history.push('/people')

    return <>
        <h3 style={{textAlign: 'center'}}>My app</h3>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Link to={'/login'}><Button text="Login"/></Link>
            <Link to={'/register'}><Button text="Register"/></Link>
        </div>
    </>
};
export default Entry;
