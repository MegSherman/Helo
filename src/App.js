import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import {HashRouter} from 'react-router-dom';
import routes from './routes';
import {Provider} from 'react-redux';
import store from './ducks/store';
import {withRouter} from 'react-router-dom';

class App extends Component {
  constructor () {
    super ()
    this.state = {

    }
  }

  render () {
    return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          {this.props.location.pathname !== '/' && (
          <Nav/>)}
          {routes}
          </div>
        </HashRouter>
    </Provider>
    );
  }
}

export default withRouter(App)
