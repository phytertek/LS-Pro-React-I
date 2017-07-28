import React, { Component } from 'react'
import ProfilePic from './ProfilePic'
import Links from './Links'


class Body extends Component {
    render() {
        return ( 
          <div>
            <ProfilePic/>
            <h3>Greetings!</h3> 
            <p>My name is Ryan, I am a student in Lambda School's Computer Science Academy</p> 
            <Links />
          </div>
        );
    }
}

export default Body