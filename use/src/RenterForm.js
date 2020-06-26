import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const RenterForm = () => {

    const [form, setForm] = useState({
        name: 'Type of electronic',
        make: '',
        price: '',
        image: '',
        condition:'',
        additionalInfo: ''
    })

    // const [errors, setErrors] = useState({
    //     userName: '',
    //     email: '',
    //     password: '',
    //     terms: ''
    // });
    
    //handling changes
    const inputChange = e => {
        e.persist();
        const newForm = {
            ...form,
            [e.target.name]:
            e.target.type === 'checkbox' ? e.target.checked : e.target.value
        };
    // validateChange(e);
    setForm(newForm);
    };

    return (
        <Form className='Form'>
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
                </FormGroup>

                <FormGroup className = 'FormGroup'>
                    <legend> 2. What is the make of your device?</legend>
                    <Input className = 'Input' type='text' name='make' value={form.make} onChange={inputChange}/>
                </FormGroup>

                <FormGroup className = 'FormGroup'>
                    <legend> 3. Set your monthly fee:</legend>
                    
                    <Input className = 'Input' type='text' name='price' value={form.price} onChange={inputChange} placeholder='$' style = {{maxWidth: '50%'}}/>
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

                </FormGroup>

                <FormGroup className = 'FormGroup-File'>

                <legend> 5. Copy and Paste an image link of your product:</legend>
                <Input className = 'Input' type='text' name='image' value={form.image} onChange={inputChange}/>

                </FormGroup>

                <FormGroup className = 'FormGroup-File'>
                    <legend> 6. Additional Information (e.g features, storage, etc.):</legend>
                    <textarea className = 'Input-textarea' type='text' name='additionalInfo' value={form.additionalInfo} onChange={inputChange}/>
                </FormGroup>

               <Button>Submit your Rental!</Button>

            </FormGroup>
        </Form>
    );
};

export default RenterForm;