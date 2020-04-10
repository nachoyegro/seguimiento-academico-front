import React from "react";
import axios from 'axios';
import qs from 'qs';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import BasePage from './BasePage';

class Login extends BasePage {

  state = {
    username: "",
    password: "",
  }

  submit = e => {
    e.preventDefault();
    const url = process.env.REACT_APP_TOKEN_URL;
    const data = { 'username': this.state.username, 'password': this.state.password };
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(data),
      url,
    };
    axios(options).then(res => {
      localStorage.setItem('jwt', res.data.access);
      this.props.history.push('/');
    });
  }

  renderPage() {
    return (
      <div className="form-estadisticas center">
        <form  onSubmit={e => this.submit(e)}>
          <p className="bienvenido espaciado-abajo">Login</p>
          <FormControl className="form-estadisticas-input" fullWidth>
            <TextField id="username" label="Usuario"
              variant="outlined"
              onChange={e => this.setState({ username: e.target.value })} />
          </FormControl>
          <FormControl className="form-estadisticas-input" fullWidth>
            <TextField id="password" label="Contraseña" type="password"
              variant="outlined"
              onChange={e => this.setState({ password: e.target.value })} />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary">
            Ingresar
          </Button>
        </form>
        </div>
    )
  }
}

export default Login;
