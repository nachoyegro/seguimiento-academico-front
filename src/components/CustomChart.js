import React, { Component } from 'react';
import { ResponsiveContainer } from 'recharts';
import BaseComponent from './BaseComponent.js'

class CustomChart extends BaseComponent {
    
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    renderContainer(data) {
        return (
            <div style={{ width: '100%', height: 300 }}>
                <h1>{this.props.titulo}</h1>
                <ResponsiveContainer>
                {this.renderChart(data)}
                </ResponsiveContainer>
            </div>
        )
    }
}

export default CustomChart;
