import React from 'react';
import CustomChart from './CustomChart.js';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';


class GraficoDeDispersion extends CustomChart {

    renderChart(data) {
    return (
        <div className="chart">
            <ScatterChart
                width={500}
                height={400}
                margin={{
                    top: 10, right: 30, left: 0, bottom: 0,
                }}
            >
                <CartesianGrid />
                <XAxis type="number" dataKey={this.props.dataX} name={this.props.nombreX} unit={this.props.unitX} />
                <YAxis type="number" dataKey={this.props.dataY} name={this.props.nombreY} unit={this.props.unitY} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name={this.props.titulo} data={data} fill="#8884d8" />
            </ScatterChart>
        </div>
    );
  }
}

export default GraficoDeDispersion;
