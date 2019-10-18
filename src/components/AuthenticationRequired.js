import React, { Component } from 'react';
import { getJWT } from '../helpers/jwt';
import { withRouter } from 'react-router-dom';

class AuthenticationRequired extends Component {

    componentDidMount(){
      /*
        Traigo el token del localStorage
        En caso de no existir, redirecciono al login
      */
      const jwt = getJWT();
      if(!jwt){
          this.props.history.push('/login');
      }
    }

    render(){
        return(
            <div>{this.props.children}</div>
        )
    }

}

export default withRouter(AuthenticationRequired);