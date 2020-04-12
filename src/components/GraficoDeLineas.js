import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import CustomChart from './CustomChart.js';

class GraficoDeLineas extends CustomChart {

  renderChart(data) {
    return <div className="chart">
            <LineChart data={data}>
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </div>;
  }
}

export default GraficoDeLineas;
