import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';

const classes = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

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
                        spacing={24}>
                        <Grid item>
                            <Typography variant="h4" type="title" color="inherit" className={classes.title}>
                                Estadísticas
                            </Typography>
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

