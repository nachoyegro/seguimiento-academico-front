import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class BaseContainer extends Component {
    render() {
        return (
            <div className="container">
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