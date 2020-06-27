import React from "react";
import { Card, CardTitle, CardImg, CardText, Button } from 'reactstrap';
import {
  useParams
} from "react-router-dom";

function Product(props) {

  console.log("useParams", useParams());
  const { itemId } = useParams();

  const shopItem = props.product.find(item => item.prod_id === Number(itemId));
  console.log(shopItem)

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