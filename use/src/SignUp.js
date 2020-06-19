import React, { useState, useEffect } from 'react';
import {Card, Form, FormGroup, Input, Label, Button} from 'reactstrap';
import axios from 'axios';
import * as yup from 'yup';
import styled from 'styled-components';
const SignUp = () => {
    //state for the submit button: disables button by default (until validation)
    const [buttonDisabled, setButtonDisabled] = useState(true);
    //state for the form's default state
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: "",
        terms: ""
    });
    const formSchema = yup.object().shape({
        userName: yup.string().required("Name is a required field."),
        // email: yup
        //     .string()
        //     .email("Must be a valid email address.")
        //     .required("Must include email address."),
        password: yup.string().required(""),
        subscribe: yup.boolean(),
        terms: yup.boolean().oneOf([true], "Please agree to terms of use"),
    });
    //creating a state for any errors
    const [errors, setErrors] = useState({
        userName: "",
        email: "",
        password: "",
        terms: ""
    });
    //enables button if formData is valid in according to formSchema
    useEffect(() => {
        formSchema.isValid(formData).then(valid => {
            setButtonDisabled(!valid);
        })
    }, [formData]);
    //placeholder submit function so I can see some data.
    const submit = () => {formSchema.validate(formData).then(() => {
        axios.post('https://reqres.in/api/users', formData)
        .then((res) => {
            console.log('response', res.data);
            setFormData({
                userName: "",
                email: "",
                password: "",
                terms: "",
            });
        })
        .catch(err => console.log('error', err));
    })
    };
    //setting the error state to whatever error formSchema finds in a given input
    const validateChange = e => {
        yup
          .reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then(valid => {
                setErrors({
                ...errors,
                [e.target.name]: ""
                });
            })
          .catch(err => {
            setErrors({
              ...errors,
              [e.target.name]: err.errors[0]
            });
        });
    };
    //handling changes
    const inputChange = e => {
        e.persist();
        const newFormData = {
            ...formData,
            [e.target.name]:
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
    validateChange(e);
    setFormData(newFormData);
    };
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(showPassword ? false : true)
    }
    return (
        <Form data-cy='submit' onSubmit={submit} style = {{margin: '15% 25%', border: 'solid 1px #2E4053', color: '#34495E'}}>
        <Card color='success'>
            <h2 style= {{ margin: '0 auto'}}>
                Sign Up
            </h2>
        </Card>
        <FormGroup style = {{ margin: '5%'}}>
            <FormGroup style= {{textAlign: 'left', margin: '0 3%'}}>
                <legend>User Name</legend>
                <Input type='text' data-cy='name' name='userName' value={formData.userName} onChange={inputChange}/>
                {errors.userName.length > 0 ? <p className="error">{errors.userName}</p> : null}
            </FormGroup>
            <FormGroup style= {{textAlign: 'left', margin: '0 3%'}}>
                <legend>Password</legend>
                <Input id='password' type={showPassword ? "text" : "password"} name='password' data-cy='password' onChange={inputChange}/>
                 {errors.password.length > 0 ? <p className="error">{errors.password}</p> : null}
            </FormGroup>
            <FormGroup style = {{border: 'none', textAlign: 'left'}}tag='fieldset'>
            <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="togglePassword" onClick = {togglePassword} /> 
                        <span style = {{margin: '-5px 0'}}>show password</span>
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type='checkbox' data-cy='checkbox1' name='subscribe' checked={formData.subscribe} onChange={inputChange}/>
                        Subscribe to our Newsletter
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type='checkbox' data-cy='checkbox2' name='terms' checked={formData.terms} onChange={inputChange}/>
                        Terms and Conditions
                    </Label>
                </FormGroup>
            </FormGroup>
            <Button color= 'info' disabled={buttonDisabled}>Create your Account</Button>
        </FormGroup>
        </Form>
    );
};
export default SignUp;
