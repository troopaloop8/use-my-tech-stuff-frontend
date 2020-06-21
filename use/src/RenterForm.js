import React, { useState, useEffect } from 'react';
import {Card, Form, FormGroup, Input, Dropdown, 
DropdownToggle, DropdownMenu, Label, Button, FormText} from 'reactstrap';

const RenterForm = () => {

    const [dropdownOpen, setdropdownOpen] = useState(false);
    const toggle = () => setdropdownOpen((prevState) => !prevState);

    const [form, setForm] = useState({
        name: '',
        make: '',
        price: '',
        image: '',
        color: 'Color of device',
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
            <FormGroup>
            

                <Card>
                    <h1 className = 'h1'>Create a Listing</h1>
                </Card>

                <FormGroup className = 'FormGroup'>
                    <legend> 1. What type of product would you like to rent?</legend>
                    <Input className = 'Input' type='text' name='name' value={form.name} onChange={inputChange}/>
                </FormGroup>

                <FormGroup className = 'FormGroup'>
                    <legend> 2. What is the make of your device?</legend>
                    <Input className = 'Input' type='text' name='make' value={form.make} onChange={inputChange}/>
                </FormGroup>

                
                <FormGroup className = 'FormGroup'>

                    <legend> 3. What is the color?</legend>

                    <select className = 'select' id="color" name="color" value={form.color} onChange={inputChange}>
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                        <option value="Red">Red</option>
                        <option value="Rose">Rose</option>
                        <option value="Rose Gold">Rose Gold</option>
                        <option value="Gold">Gold</option>
                    </select>

                </FormGroup>

                <FormGroup tag = 'fieldset' className = 'FormGroup-Check'>
                    <legend> 4. Please select the condition(s) that best describe your device:</legend>
                    <p style={{fontSize: '.7rem'}}>-Your item <span style = {{fontWeight:'bold'}}>must</span> be in working condition-</p>

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

                <legend> 5. Choose an Image</legend>
                <Input className = 'Input-File' type="file" name="file" id="exampleFile" />

                </FormGroup>

                <FormGroup className = 'FormGroup-File'>
                    <legend> 6. Additional Information (e.g features, storage, etc.)</legend>
                    <textarea className = 'Input-textarea' type='text' name='additionalInfo' value={form.additionalInfo} onChange={inputChange}/>
                </FormGroup>

               <Button>Submit your Rental!</Button>

            </FormGroup>
        </Form>
    );
};

export default RenterForm;