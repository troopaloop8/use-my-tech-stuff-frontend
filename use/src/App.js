import React from 'react';
import {Button, Navbar, Card} from 'reactstrap';
import {Route, Link} from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import './App.css';
import TechList from "./TechList"

function App() {
  return (
    <div className="App">
      <header className="Container">
        <Navbar>
          <Link to='/'>
            <Button>Home</Button>
          </Link>
          <Link to = '/sign-in' >
            <Button>Sign In</Button>
          </Link>
        </Navbar>
        <Route exact path = '/'>
        </Route>
        <Route path = '/sign-in'>
          <SignIn/>
        </Route>
        <Route path = '/sign-up'>
          <SignUp/>
        </Route>
        <TechList />
      </header>
    </div>
  );
}

export default App;