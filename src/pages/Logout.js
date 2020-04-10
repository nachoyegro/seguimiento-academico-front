import React from "react";
import BasePage from '../pages/BasePage';
import Button from '@material-ui/core/Button';


class Logout extends BasePage {

  logout = e => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  }

  cancel = e => {
    this.props.history.push('/');
  }

  renderPage() {
    return (
        <fieldset className="espaciado-arriba">
          <legend>¿Está seguro que desea salir?</legend>
          <p className="center">
            <Button className="separado" variant="contained" onClick={e => this.logout(e)}>Si</Button>
            <Button className="separado" variant="contained" onClick={e => this.cancel(e)}>No</Button>
          </p>
        </fieldset>
    )
  }
}

export default Logout;
