import React, { Component } from 'react';
import { AxiosProvider } from 'react-axios';
import axios from 'axios';
import { getJWT } from '../helpers/jwt';



class AuthenticatedComponent extends Component {

  render() {
    const jwt = getJWT();
    if (jwt) {
      const axiosInstance = axios.create({
        headers: { 'Authorization': `Bearer ${getJWT()}` }
      });
      return (<AxiosProvider instance={axiosInstance}>
        {this.renderComponent()}
      </AxiosProvider>
      )
    }

  }
}

export default AuthenticatedComponent;