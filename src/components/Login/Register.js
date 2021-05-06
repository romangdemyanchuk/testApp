/* eslint-disable */
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import {email, password, required} from "../../utils/helpers/validators";
import {Input} from "../../utils/helpers/formControls";
import Button from "../../generic/Button";
import './Register.scss'
import {REGISTER_CREATOR} from "../../redux/session/Auth/AuthConstants";
import {loader} from "../../utils/helpers/Loader";

const RegisterForm = (props) => {
    return (
        <form className="register-form" onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name={"login"} component={Input}
                       validate={ [email, required] }
                />
            </div>
            <div>
                <Field placeholder={'password'} name={"password"} component={Input}
                       validate={[password, required]}
                       type="password"/>
            </div>
            <div>
                <Button text="Register" funk={props.handleSubmit}/>
            </div>
        </form>
    )
}

const RegisterReduxForm = reduxForm ({ form: 'login'})(RegisterForm)

const Register = ({ setState }) => {
    const history = useHistory();
    const isAuth = localStorage.getItem("isAuth");

    const isLoading = useSelector(state => state.main.isLoading)
    isAuth && history.push('/people')
    let dispatch = useDispatch();
    const onSubmit = (formData) => {
        dispatch({type:REGISTER_CREATOR, payload: {formData, history}})
    }
    return (
        <div className="registerFormWrapper">
            {isLoading ?
            loader() :
                <>
                    <Link to={'/login'}>to login</Link>
                    <RegisterReduxForm  onSubmit={onSubmit}/>
                </>
            }

        </div>
    );
};





export default Register;
