import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Input, Button} from 'reactstrap';
import axios from 'axios';
import * as yup from 'yup';

const SignIn = () => {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [users, setUsers] = useState();

    const [form, setForm] = useState({
        userName: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        userName: '',
        password: '',
    });

    const formSchema = yup.object().shape({
        userName: yup.string().required('Username is required'),
        password: yup.string().required('Password is required')
    });

    useEffect(() => {
        formSchema.isValid(form).then(formValidation => {
            console.log('is form valid?', formValidation)
            setButtonDisabled(!formValidation);
        })
    }, [form]);

    const validateChange = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({
                    ...errors,
                    [e.target.name]: ''
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
        const newForm = {
            ...form,
            [e.target.name]: e.target.value
        };
    validateChange(e);
    setForm(newForm);
    };

    const formSubmit = e => {
        e.preventDefault();

        axios
        .post('https://reqres.in/api/users', form)
        .then(res => {
            setUsers(res.data);
            console.log('SET POST SIGN IN', res.data);

            setForm({
                name:'',
                password:''
            });

        })
        .catch(err => {
            console.log('server error', err);
        })
    }


    return (
        <div>
        <Form className = 'Form' onSubmit={formSubmit}>
            <h1>Sign In</h1>
            <FormGroup className = 'FormGroup'>
                <legend>Username</legend>
                <Input className = 'Input' type="text" name="userName" value={form.userName} onChange={inputChange}/>
                {errors.userName.length > 0 ? <p className="error">{errors.userName}</p> : null}
            </FormGroup>
            <FormGroup className = 'FormGroup'>
                <legend>Password</legend>
                <Input className = 'Input' type="password" name="password" value={form.password} onChange={inputChange}/>
                {errors.password.length > 0 ? <p className="error">{errors.password}</p> : null}
            </FormGroup>
            <Button disabled={buttonDisabled}>Sign In</Button>
        </Form>
        <Link className = 'Link' to = '/sign-up'>
        Don't have an account? Sign up here.
        </Link>
        </div>
    );
};
export default SignIn;

