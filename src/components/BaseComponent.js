import React, { Component } from 'react';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';

class BaseComponent extends Component {


    render() {
        return (
            <div>
                <Get url={this.props.url} params={this.props.params}>
                    {(error, response, isLoading, makeRequest, axios) => {
                    if(error) {
                        return (<div>Something bad happened: {error.response} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
                    }
                    else if(isLoading) {
                        return (<div>Loading...</div>)
                    }
                    else if(response !== null) {
                        return (<div>{this.renderContainer(response.data)}</div>)
                    }
                    return (<div>Default message before request is made.</div>)
                    }}
                </Get>
            </div>
        )
    }

}

export default BaseComponent;
