import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import '../App/App.css';
import stars from '../images/starryNight.jpeg';

function Contact() {
    return (
        <div className="page-intro">
            <Jumbotron style = {{backgroundImage:`url(${stars})`,backgroundSize:"cover", backgroundPosition:"center"}} >
  <h1>Contact</h1>
  <br></br>
  <p>
   Contact content here
  </p>
</Jumbotron>
        </div>
    )
}

export default Contact;
