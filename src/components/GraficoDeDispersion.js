import React from 'react';
import CustomChart from './CustomChart.js';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';


class GraficoDeDispersion extends CustomChart {

  renderChart(data) {
    return (<ScatterChart
      width="100%"
      height="100%"
      margin={{
        top: 10, right: 30, left: 0, bottom: 0,
      }}
    >
      <CartesianGrid />
      <XAxis type="number"
        dataKey={this.props.dataX}
        name={this.props.nombreX}
        unit={this.props.unitX}
        domain={[0, 10]}
        label={{ value: this.props.nombreX, position: 'insideBottomRight', offset: 0 }} />
      <YAxis type="number"
        dataKey={this.props.dataY}
        name={this.props.nombreY}
        unit={this.props.unitY}
        domain={[0, 10]}
        label={{ value: this.props.nombreY, angle: -90, position: 'insideLeft' }} />
      <Tooltip cursor={{ strokeDasharray: '1 1' }} />
      <Scatter name={this.props.titulo} data={data} fill="#29ABE2" />
    </ScatterChart>
    );
  }
}

export default GraficoDeDispersion;
