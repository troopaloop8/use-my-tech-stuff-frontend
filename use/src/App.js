import React, {useState} from 'react';
import {Button, Navbar, Card} from 'reactstrap';
import {Route, Link} from 'react-router-dom';
import NavBar from './NavBar';
import SignUp from './SignUp';
import SignIn from './SignIn';
import RenterForm from './RenterForm';
import TechList from "./TechList";
import Product from "./Product"
import './App.css';


function App() {
  const[data,setData] = useState(
    [
        {
            "prod_id": 1,
            "name": "iPhone 5s",
            "image_URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/IPhone_5s_golden.svg/800px-IPhone_5s_golden.svg.png",
            "price": "$5/month",
            "content": "Working condition gold iPhone 5s, 64GB storage, unlocked, minor scratches",
            "ownerName": "admin",
            "owner_ID": 1,
            "borrowerName": "Trevor",
            "borrower_ID": 4
        },
        {
            "prod_id": 2,
            "name": "iPhone 6s",
            "image_URL": "https://en.wikipedia.org/wiki/IPhone_6S#/media/File:IPhone_6s_vector.svg",
            "price": "$6/month",
            "content": "Working condition rose gold iPhone 6s, 64GB storage, unlocked, some battery degredation",
            "ownerName": "poweruser",
            "owner_ID": 2,
            "borrowerName": "Chanis",
            "borrower_ID": 5
        },
        {
            "prod_id": 3,
            "name": "iPhone 7s",
            "image_URL": "https://en.wikipedia.org/wiki/IPhone_7#/media/File:IPhone_7_Jet_Black.svg",
            "price": "$7/month",
            "content": "Mint condition jet black iPhone 7s, 64GB storage, unlocked, dual sim",
            "ownerName": "Jon",
            "owner_ID": 3,
            "borrowerName": "Karla",
            "borrower_ID": 6
        },
        {
            "prod_id": 4,
            "name": "Rasperry Pie",
            "image_URL": "https://www.theblackpeppercorn.com/wp-content/uploads/2013/09/Classic-Raspberry-Pie-Featured-1-700x394.jpg",
            "price": "$700/month",
            "content": "An actualy Raspberry Pie, and not the mini computer",
            "ownerName": "admin",
            "owner_ID": 1,
            "borrowerName": null,
            "borrower_ID": null
        },
        {
            "prod_id": 6,
            "name": "testpost UPDATE TEST",
            "image_URL": "https://www.lotus-qa.com/wp-content/uploads/2020/02/testing.jpg",
            "price": "free",
            "content": "its nothing, really",
            "ownerName": "Chanis",
            "owner_ID": 5,
            "borrowerName": null,
            "borrower_ID": null
        }
    ]
)
  return (

    <div className="App">
      <header className="Container">
        <NavBar/>

        <Route exact path = '/'>
          
          <TechList products = {data}/>

        </Route>

        <Route path = '/sign-in'>
          <SignIn/>
        </Route>

        <Route path = '/sign-up'>
          <SignUp/>
        </Route>

        <Route path = '/renter-form'>
          <RenterForm/>
        </Route>
        
        <Route path = '/product/:productID'>
          <Product product = {data}/>
        </Route>

      </header>
    </div>

  );
}
export default App;

