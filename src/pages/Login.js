import React, {Component} from "react";
import axios from 'axios';
import qs from 'qs';

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
      axios(options).then( res => {
            localStorage.setItem('jwt', res.data.access);
            this.props.history.push('/estadisticas');
            });
  }

  render() {
    return (
      <form onSubmit={ e => this.submit(e)}>
        <fieldset>
          <legend>Login</legend>
          <p>
            <label htmlFor="username">Username</label>
            <input
              type="text" id="username"
              onChange={e => this.setState({username: e.target.value})} />
          </p>
          <p>
            <label htmlFor="password">Password</label>
            <input
              type="password" id="password"
              onChange={e => this.setState({password: e.target.value})} />
          </p>
          <p>
            <button type="submit">Login</button>
          </p>
        </fieldset>
      </form>
    )
  }
}

export default Login;
