import React from 'react';
import { Button, Card } from 'reactstrap';
import { Link } from 'react-router-dom'

const TechList = () => {
    return (
        //The link to make a posting needs to make sure that the user is logged in first.
        <div>
            <Link to = '/renter-form'>
                <Card style = {{padding: '5% 0', border: 'white 1px solid', margin: '2%'}}>
                <Button>'Create a Post' button</Button>
                </Card>
            </Link>

            <h3>List of available products could go here</h3>


        </div>
    );
};

export default TechList;