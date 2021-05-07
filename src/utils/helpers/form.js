import React from "react";
import {Field} from "redux-form";
import {Input} from "./formControls";
import {email, password, required} from "./validators";
import Button from "../../generic/Button";

export const Form = ({handleSubmit, text}) => <form onSubmit={handleSubmit}>
    <Field placeholder={'login'} name={"login"} component={Input} validate={[email, required]}/>
    <Field placeholder={'password'} name={"password"} component={Input} validate={[password, required]}
           type="password"/>
    <Button text={text} funk={handleSubmit}/>
</form>
