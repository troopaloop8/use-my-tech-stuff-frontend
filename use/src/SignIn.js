import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Input, Button} from 'reactstrap';
import axios from 'axios';
import * as yup from 'yup';

const SignIn = () => {
    const [form, setForm] = useState({
        userName: "",
        password: ""
    })
    
    //handling changes
    const inputChange = e => {
        e.persist();
        const newForm = {
            ...form,
            [e.target.name]:
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
    // validateChange(e);
    setForm(newForm);
    };
    return (
        <div>
        <Form className = 'Form'>
            <h1>Sign In</h1>
            <FormGroup className = 'FormGroup'>
                <legend>Username</legend>
                <Input className = 'Input' type="text" name="userName" value={form.userName} onChange={inputChange}/>
            </FormGroup>
            <FormGroup className = 'FormGroup'>
                <legend>Password</legend>
                <Input className = 'Input' type="password" name="password" value={form.password} onChange={inputChange}/>
            </FormGroup>
            <Button>Sign In</Button>
        </Form>
        <Link className = 'Link' to = '/sign-up'>
        Don't have an account? Sign up here.
        </Link>
        </div>
    );
};
export default SignIn;