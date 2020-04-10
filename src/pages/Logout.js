import React, { Component } from "react";
import BaseContainer from '../containers/BaseContainer';


class Logout extends Component {

  logout = e => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  }

  cancel = e => {
    this.props.history.push('/');
  }

  render() {
    return (
      <BaseContainer>
        <fieldset>
          <legend>¿Está seguro que desea salir?</legend>
          <p>
            <button onClick={e => this.logout(e)}>Si</button>
            <button onClick={e => this.cancel(e)}>No</button>
          </p>
        </fieldset>
      </BaseContainer>
    )
  }
}

export default Logout;
