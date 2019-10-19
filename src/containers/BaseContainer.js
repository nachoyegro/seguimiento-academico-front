import React, { Component } from 'react';
import Container from '@material-ui/core/Container';

class BaseContainer extends Component {
    render() {
        return (<Container>{this.props.children}</Container>);
    }
}

export default BaseContainer;