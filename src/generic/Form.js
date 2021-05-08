import React from "react";
import {Field} from "redux-form";
import {Input} from "../utils/helpers/formControls";
import Button from "./Button";
import {email, password, required} from "../utils/helpers/validators";

export const Form = ({handleSubmit, text}) => <form onSubmit={handleSubmit}>
    <Field placeholder={'login'} name={"login"} component={Input} validate={[email, required]}/>
    <Field placeholder={'password'} name={"password"} component={Input} validate={[password, required]}
           type="password"/>
    <Button text={text} funk={handleSubmit}/>
</form>
