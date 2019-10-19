import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NavBar from '../components/NavBar';

class BaseContainer extends Component {
    render() {
        return (
            <div>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    {this.props.children}
                </Grid>
            </div>);
    }
}

export default BaseContainer;