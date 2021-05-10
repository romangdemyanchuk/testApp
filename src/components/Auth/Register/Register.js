import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import {reduxForm} from 'redux-form';
import {Form} from '../../../generic/Form';
import {getFromStorage} from '../../../utils/helpers/functions';
import {REGISTER_CREATOR} from '../../../redux/Auth/AuthConstants';
import {Loader} from '../../../generic/Loader';
import './Register.scss';

const RegisterForm = (props) => <Form handleSubmit={props.handleSubmit} text="Register"/>;

const RegisterReduxForm = reduxForm({form: 'register'})(RegisterForm);

const Register = () => {
    const history = useHistory();
    getFromStorage('isAuth') && history.push('/people');
    const {isLoading} = useSelector(state => state.main);
    let dispatch = useDispatch();
    const onSubmit = (formData) => dispatch({type: REGISTER_CREATOR, payload: {formData, history}});
    return (
        <div className="registerFormWrapper">
            {isLoading ?
                Loader() :
                <>
                    <Link to={'/login'}>to login</Link>
                    <RegisterReduxForm onSubmit={onSubmit}/>
                </>
            }
        </div>
    );
};


export default Register;
