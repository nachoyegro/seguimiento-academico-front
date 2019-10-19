import React, { Component } from "react";

class Logout extends Component {

  logout = e => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  }

  cancel = e => {
    this.props.history.push('/estadisticas');
  }

  render() {
    return (
      <fieldset>
        <legend>¿Está seguro que desea salir?</legend>
        <p>
          <button onClick={e => this.logout(e)}>Si</button>
          <button onClick={e => this.cancel(e)}>No</button>
        </p>
      </fieldset>
    )
  }
}

export default Logout;
