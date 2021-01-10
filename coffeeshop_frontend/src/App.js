import React, { Component } from 'react';
import './App.scss'
import { HomeTemplate } from './templates/HomeTemplate'
import { BrowserRouter, Switch } from 'react-router-dom';
import routeHome from './routes';
import { connect } from 'react-redux'
import { FETCH_CREDENTIALS, nameOfLocalStore } from './redux/constants/type';
import { createAction } from './redux/actions';


class App extends Component {
  render() {
    return (
      <BrowserRouter BrowserRouter >
        <div className="App">
          <Switch>
            {showMenuHome(routeHome)}
          </Switch>
        </div>
      </BrowserRouter  >
    )

  }
  _getCredentialFromLocal = () => {
    const credentialStr = localStorage.getItem(nameOfLocalStore.TaiKhoan);
    if (credentialStr) {
      this.props.dispatch(createAction(FETCH_CREDENTIALS, JSON.parse(credentialStr)))
    }
  }
  componentDidMount() {
    this._getCredentialFromLocal()
  }
}

const showMenuHome = route => {
  if (route && route.length > 0) {
    return route.map((item, index) => <HomeTemplate
      key={index}
      path={item.path}
      exact={item.exact}
      Component={item.component} />)
  }
}
export default connect()(App);
