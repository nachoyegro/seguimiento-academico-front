import React, { Component } from 'react';
import BaseContainer from '../containers/BaseContainer';
import NavBar from '../components/NavBar';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/Theme';

class BasePage extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
            <div className="root">
                <NavBar />
                <BaseContainer>
                    {this.renderPage()}
                </BaseContainer>
            </div>
            </ThemeProvider>);
    }
}

export default BasePage;