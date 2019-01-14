import React, { Component } from 'react';
import Blog from './containers/Blog/Blog';
import Aux from './hoc/Auxes';

class App extends Component {
  render() {
    return (
        <div>
           <Blog />
        </div>
    );
  }
}

export default App;
