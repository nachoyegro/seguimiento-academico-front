import React, { Component } from 'react';
import BaseContainer from '../containers/BaseContainer';
import NavBar from '../components/NavBar';

class BasePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <BaseContainer>
                    {this.renderPage()}
                </BaseContainer>
            </div>);
    }
}

export default BasePage;