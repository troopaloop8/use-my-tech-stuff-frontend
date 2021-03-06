import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from "axios";
import * as yup from "yup";
const RenterForm = () => {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [form, setForm] = useState({
        name: 'Type of electronic',
        make: '',
        price: '',
        image: '',
        condition:'',
        additionalInfo: ''
    })
    const [errors, setErrors] = useState({
        name: '',
        make: '',
        price: '',
        image: '',
        condition: '',
        additionalInfo: ''
    });

    //useeffect for validation
    useEffect(() => {
        schema.isValid(form).then(formValidation => {
            console.log('is form valid?', formValidation)
            setButtonDisabled(!formValidation);
        })
    }, [form]);

        //Define your validation schema
        const schema = yup.object().shape({
            name: yup.string(),
            price: yup.string().required("Price is required"),
            condition: yup.string().required("Please input the condition of the item"),
            image: yup.string(),
            make: yup.string().required('Please input the make of your device'),
            additionalInfo: yup.string()
        })

    //Validation Change
    const validateChange = e => {
        yup
            .reach(schema, e.target.name)
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

    const submit = () =>{
        schema.validate(form).then(() => {
            axios.post("https://reqres.in/api/users", form).then((res) => {
                console.log(res.data, "This is your posted data")
            })
        })
    }

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

    return (
        <Form className='Form' onSubmit={submit}>
            <FormGroup className= 'FormGroup'>
                <h1 className = 'h1'>Create a Listing</h1>

                <FormGroup className = 'FormGroup'>
                    <legend> 1. What type of product would you like to list?</legend>
                    <select className = 'select' id="name" name="name" value={form.name} onChange={inputChange}>
                        <option value="Cell Phone">Cell Phone</option>
                        <option value="Computer">Computer</option>
                        <option value="TV">TV</option>
                        <option value="Camera">Camera</option>
                        <option value="Video Game">Video Game/Console</option>
                        <option value="Speaker">Speaker</option>
                    </select>
                    {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
                </FormGroup>

                <FormGroup className = 'FormGroup'>
                    <legend> 2. What is the make of your device?</legend>
                    <Input className = 'Input' type='text' name='make' value={form.make} onChange={inputChange}/>
                    {errors.make.length > 0 ? <p className="error">{errors.make}</p> : null}
                </FormGroup>
                <FormGroup className = 'FormGroup'>
                    <legend> 3. Set your monthly fee:</legend>
                    <Input className = 'Input' type='number' name='price' value={form.price} onChange={inputChange} placeholder='$' style = {{maxWidth: '50%'}}/>
                    {errors.price.length > 0 ? <p className="error">{errors.price}</p> : null}
                </FormGroup>
                <FormGroup tag = 'fieldset' className = 'FormGroup-Check'>
                    <legend> 4. Please select the condition(s) that best describe your device:</legend>
                    <FormGroup className = 'Label-check' check>
                        <Label  check>
                            <Input className= 'Input-check' type='radio' name='condition' value='mint'  onChange={inputChange}/>
                            Mint
                        </Label>
                    </FormGroup>
                    <FormGroup className = 'Label-check' check>
                        <Label check>
                            <Input className= 'Input-check' type='radio' name='condition' value='refurbished' onChange={inputChange}/>
                            Excellent
                        </Label>
                    </FormGroup>
                    <FormGroup className = 'Label-check' check>
                        <Label check>
                            <Input className= 'Input-check' type='radio' name='condition' value='minorScratches' onChange={inputChange}/>
                            Good
                        </Label>
                    </FormGroup>
                    <FormGroup className = 'Label-check' check>
                        <Label check>
                            <Input className= 'Input-check' type='radio' name='condition' value='majorScratches' onChange={inputChange}/>
                            Fair
                        </Label>
                    </FormGroup>
                    {errors.condition.length > 0 ? <p className="error">{errors.condition}</p> : null}
                </FormGroup>
                <FormGroup className = 'FormGroup-File'>
                <legend> 5. Copy and Paste an image link of your product:</legend>
                <Input className = 'Input' type='text' name='image' value={form.image} onChange={inputChange}/>
                {errors.image.length > 0 ? <p className="error">{errors.image}</p> : null}
                </FormGroup>
                <FormGroup className = 'FormGroup-File'>
                    <legend> 6. Additional Information (e.g features, storage, etc.):</legend>
                    <textarea className = 'Input-textarea' type='text' name='additionalInfo' value={form.additionalInfo} onChange={inputChange}/>
                    {errors.additionalInfo.length > 0 ? <p className="error">{errors.additionalInfo}</p> : null}
                </FormGroup>
               <Button disabled={buttonDisabled}>Submit your Rental!</Button>
            </FormGroup>
        </Form>
    );
};
export default RenterForm;