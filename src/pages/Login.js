import React, { Component } from "react";
import axios from 'axios';
import qs from 'qs';
import BaseContainer from '../containers/BaseContainer';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

class Login extends Component {

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
      this.props.history.push('/estadisticas');
    });
  }

  render() {
    return (
      <BaseContainer>
        <form onSubmit={e => this.submit(e)}>
          <legend>Login</legend>
          <FormControl fullWidth>
            <TextField id="username" label="Usuario"
              variant="outlined"
              onChange={e => this.setState({ username: e.target.value })} />
          </FormControl>
          <FormControl fullWidth>
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
      </BaseContainer >
    )
  }
}

export default Login;
