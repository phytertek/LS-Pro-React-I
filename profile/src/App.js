import React, { Component } from 'react';
import Body from './Body'
import NavBar from './NavBar'


class App extends Component {
    render() {
        return ( 
          <div>
            <NavBar/>
            <Body />
          </div>
        );
    }
}

export default App;