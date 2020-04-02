import React from 'react';
import { ResponsiveContainer } from 'recharts';
import BaseComponent from './BaseComponent.js'

class CustomChart extends BaseComponent {

    state = {
        data: []
    }

    renderContainer(data) {
        return (
            <div className="chart">
                <hr></hr>
                <h1 className="bienvenido-descripcion">{this.props.titulo}</h1>
                <ResponsiveContainer>
                    {this.renderChart(data)}
                </ResponsiveContainer>
            </div>
        )
    }
}

export default CustomChart;
