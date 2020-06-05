import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import routes from './routes';

class App extends Component {
  constructor () {
    super ()
    this.state = {

    }
    // this.props.location.pathname = this.props.location.pathname.bind (this)
  }

  render () {
    return (
    <div className="App">
      {/* {this.props.location.pathname != '/' ? ( */}
        <Nav/>
        {routes}
      {/* ) : (
        {routes}
      )} */}
    </div>
    );
  }
}

export default App;
