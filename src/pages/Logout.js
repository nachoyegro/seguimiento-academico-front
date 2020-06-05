import React from "react";
import BasePage from '../pages/BasePage';
import Button from '@material-ui/core/Button';
import { removeJWT } from '../helpers/auth';

class Logout extends BasePage {

  logout = e => {
    removeJWT();
    this.props.history.push('/login');
  }

  cancel = e => {
    this.props.history.push('/');
  }

  renderPage() {
    return (
      <div className="form-organigrama center">
        <fieldset className="espaciado-arriba">
          <legend>¿Está seguro que desea salir?</legend>
          <p className="center botonera-logout">
            <Button className="separado" variant="contained" onClick={e => this.logout(e)}>Si</Button>
            <Button className="separado" variant="contained" onClick={e => this.cancel(e)}>No</Button>
          </p>
        </fieldset>
      </div>
    )
  }
}

export default Logout;
