import React, { useState, useEffect } from 'react';
import {Card, Form, FormGroup, Input, Dropdown, 
DropdownToggle, DropdownMenu, Label, Button, FormText} from 'reactstrap';

const RenterForm = () => {

    const [dropdownOpen, setdropdownOpen] = useState(false);
    const toggle = () => setdropdownOpen((prevState) => !prevState);

    const [form, setForm] = useState({
        name: 'Type of electronic',
        make: '',
        price: '',
        image: '',
        mintCondition: false,
        refurbished: false,
        minorScratches: false,
        majorScratches: false,
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

                {/* <FormGroup className = 'FormGroup'>
                    <legend> 2. What is the make of your device?</legend>
                    <Input className = 'Input' type='text' name='make' value={form.make} onChange={inputChange}/>
                </FormGroup> */}

                <FormGroup tag = 'fieldset' className = 'FormGroup-Check'>
                    <legend> 3. Please select the condition(s) that best describe your device:</legend>

                    <FormGroup className = 'Label-check' check>
                        <Label  check>
                            <Input className= 'Input-check' type='checkbox' name='mintCondition' value='mintCondition' checked={form.mintCondition} onChange={inputChange}/>
                            Mint Condition
                        </Label>
                    </FormGroup>

                    <FormGroup className = 'Label-check' check>
                        <Label check>
                            <Input className= 'Input-check' type='checkbox' name='refurbished' value='refurbished' checked={form.refurbished} onChange={inputChange}/>
                            Refurbished
                        </Label>
                    </FormGroup>

                    <FormGroup className = 'Label-check' check>
                        <Label check>
                            <Input className= 'Input-check' type='checkbox' name='minorScratches' value='minorScratches' checked={form.minorScratches} onChange={inputChange}/>
                            Minor Scratches
                        </Label>
                    </FormGroup>

                    <FormGroup className = 'Label-check' check>
                        <Label check>
                            <Input className= 'Input-check' type='checkbox' name='majorScratches' value='majorScratches' checked={form.majorScratches} onChange={inputChange}/>
                            Major Scratches
                        </Label>
                    </FormGroup>

                </FormGroup>

                <FormGroup className = 'FormGroup-File'>

                <legend> 4. Copy and Paste an image link of your product:</legend>
                <Input className = 'Input' type='text' name='make' value={form.make} onChange={inputChange}/>

                </FormGroup>

                <FormGroup className = 'FormGroup-File'>
                    <legend> 5. Additional Information (e.g features, storage, etc.):</legend>
                    <textarea className = 'Input-textarea' type='text' name='additionalInfo' value={form.additionalInfo} onChange={inputChange}/>
                </FormGroup>

               <Button>Submit your Rental!</Button>

            </FormGroup>
        </Form>
    );
};

export default RenterForm;