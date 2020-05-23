import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class NavBar extends Component {

    logout = e => {
        this.props.history.push('/logout');
    }

    render() {
        return (
                <AppBar position="static">
                    <Toolbar>
                        <Grid
                            justify="space-between" // Add it here :)
                            container
                            spacing={5}>
                            <Grid item>
                              <Link to="/" className="header-title" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <h1>SEGUIMIENTO ACADÉMICO</h1>
                              </Link>
                            </Grid>
                            <Grid item>
                                <div>
                                    <IconButton color="inherit" onClick={e => this.logout(e)}>
                                        <ExitToAppIcon></ExitToAppIcon>
                                    </IconButton>
                                </div>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
        );
    }
}

export default withRouter(NavBar);

