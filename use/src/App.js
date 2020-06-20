import React from 'react';
import {Button, Navbar, Card} from 'reactstrap';
import {Route, Link} from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import RenterForm from './RenterForm';
import TechList from "./TechList";
import './App.css';


function App() {
  return (

    <div className="App">
      <header className="Container">

        <Navbar>
          <Link to='/'>
            <Button>Home</Button>
          </Link>
        </Navbar>

        <Route exact path = '/'>

          <Link to = '/sign-in' >
              <Button>Sign In</Button>
          </Link>

          <TechList />

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

      </header>
    </div>

  );
}
export default App;

