import React from 'react';
import { ResponsiveContainer } from 'recharts';
import BaseComponent from './BaseComponent.js'

class CustomChart extends BaseComponent {

    state = {
        data: []
    }

    renderContainer(data, description) {
        return (
            <>
            <hr></hr>
            <div className="custom-chart">
                <h1 className="bienvenido-descripcion">{this.props.titulo}</h1>
                <ResponsiveContainer width="99%" height="99%">
                    {this.renderChart(data)}
                </ResponsiveContainer>
                <p className="chart-description">{description}</p>
            </div>
            </>
        )
    }
}

export default CustomChart;
