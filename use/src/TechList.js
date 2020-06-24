import React, {useState, useEffect} from 'react';
import axios from "axios"
import { Card, CardTitle, Container, CardImg, Row, Col, CardText } from 'reactstrap';
import { Link } from 'react-router-dom'
import './App.css';


const TechList = (props) => {

    //setting up state
    // const[tech,setTech] = useState({});
    //setting up useEffect
    // useEffect(()=>{
    //     axios
    //     .get("https://usemy-techstuff.herokuapp.com/api/product/find/available")
    //     .then(response =>{
    //         console.log("This is the response", response)
    //         setTech(response.data)
    //     })
    //     .catch(error => {
    //         console.log("The data was not returned", error)
    //     })
    // }, [])
    return (
        //The link to make a posting needs to make sure that the user is logged in first.
        <div>
            <Container>
            <Row>
            {/* mapping through the data */}
            {
                props.products.map( product => {
                    return(
                    <Col sm='4'>
                        <Card style={{marginTop: "15%"}} key={product.prod_id}>
                        <CardTitle style={{color:"green"}}>{product.name}</CardTitle>
                        <Link className = 'Link' to = {`/product/${product.prod_id}`}>
                        <CardImg style={{minHeight: "150px", maxWidth:"120px", align: "center"}} src={product.image_URL} />
                        </Link>
                        <CardText style={{color:"green"}}>
                        Price: {product.price}
                        </CardText>
                        <CardText style={{color:"green"}}>
                        Description: {product.content}
                        </CardText>
                        </Card>
                    </Col>
                    )
                })
            }
            </Row>
            </Container>
        </div>
    );
};
export default TechList;