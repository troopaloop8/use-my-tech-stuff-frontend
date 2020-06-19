import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {Card, Form, FormGroup, Input, Label, Button} from 'reactstrap';
import axios from 'axios';
import * as yup from 'yup';
import styled from 'styled-components';

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
        <Form>
            <FormGroup>
                <legend>Username</legend>
                <Input type="text" name="userName" value={form.userName} onChange={inputChange}/>
            </FormGroup>
            
            <FormGroup>
                <legend>Password</legend>
                <Input type="password" name="password" value={form.password} onChange={inputChange}/>
            </FormGroup>

            <Button>Submit</Button>
        </Form>

            
  

        <Link to = '/sign-up'>
        Don't have an account? Sign up here.
        </Link>

        
        </div>

    );
};
export default SignIn;