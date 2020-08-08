import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  } from 'recharts';
import CustomChart from './CustomChart.js';

class GraficoDeArea extends CustomChart {

  renderChart(data) {
    return <AreaChart
                    width="100%" 
                    height="100%"
                    data={data}
                    margin={{
                    top: 10, right: 30, left: 0, bottom: 0,
                    }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="nombre" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="cantidad" stroke="#29ABE2" fill="#29ABE2" />
            </AreaChart>
  }
}

export default GraficoDeArea;
