import React from 'react';
import { Get } from 'react-axios';
import AuthenticatedComponent from './AuthenticatedComponent'
import CircularProgress from '@material-ui/core/CircularProgress';

class BaseComponent extends AuthenticatedComponent {

    renderComponent() {
        return (
                <Get url={this.props.url} params={this.props.params}>
                    {(error, response, isLoading, makeRequest, axios) => {
                        if (error) {
                            return (<div></div>)
                        }
                        else if (isLoading) {
                            return (<div className="center"><CircularProgress /></div>)
                        }
                        else if (response !== null) { 
                            return (<>{this.renderContainer(response.data, this.props.description)}</>)
                        }
                        return (<div>Default message before request is made.</div>)
                    }}
                </Get>
        )
    }

}

export default BaseComponent;
