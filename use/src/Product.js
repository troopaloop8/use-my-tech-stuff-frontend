import React from "react";
import { Card, CardTitle, Container, CardImg, Row, Col, CardText, Button } from 'reactstrap';
import {
  useParams,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

// we will be importing and adding a lot of items to this component
function Product(props) {
  // props.items --> all of our items
  // shopItem --> the item that matches the id in the URL
  // useParams https://reacttraining.com/react-router/web/api/Hooks/useparams
  // returns an object of key/value pairs of URL parameters (keys declared with colon in Route path). Use it to access match.params of the current <Route>.
  // we need to use useParams when we do not use a render method of route (component= or render= in Route JSX)
  console.log("useParams", useParams());
  const { itemId } = useParams();
  // pull array of objects from props.items (this is the products stored in App state)
  // iterate over each object to find the object that has the same id as the one in the URL (params.itemID)
  // .find() is arr fn that returns first valid result. id is unique so this should return the correct object
  // compare item.id is a number and params.itemID is a string, so make the string a number to compare values correctly.
  const shopItem = props.product.find(item => item.prod_id === Number(itemId));
  console.log(shopItem)
  // useRouteMatch https://reacttraining.com/react-router/web/api/Hooks/useroutematch
  // useRouteMatch hook attempts to match the current URL in the same way that a <Route> would
  // it provides a path (like what we declare in a Route), and the current url (what we see in the browser)
  return (
      <div>
    <Card style={{margin: "100px 0", padding:'40px 0'}} key={shopItem.prod_id}>
        <div  className='Card1' >
        <div>
        <CardImg style={{minHeight: "150px", maxWidth:"120px", align: "center"}} src={shopItem.image_URL} />
        </div>
        <div className='div'>
            <CardTitle style={{color:"green", fontWeight:'bold', fontSize:'40px'}}>{shopItem.name}</CardTitle>
            <CardText style={{color:"green"}}>
            <span style={{color:"green", fontWeight:'bold'}}>Price:</span> {shopItem.price}
            </CardText>
            <CardText style={{color:"green"}}>
            <span style={{color:"green", fontWeight:'bold'}}>Description:</span> {shopItem.content}
            </CardText>
            <div style={{textAlign:'center'}}>
            <Button>Rent</Button>
            </div>
            
        </div>
        </div>
    </Card>
      </div>

  );
}
export default Product;