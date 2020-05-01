import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import CustomChart from './CustomChart.js';

class GraficoDeBarras extends CustomChart {

  renderChart(data) {

    const colors = ["#8feb34", "#0984e3", "#ff7675", "#ffc658"];
    return <div className="chart">
              <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Materia" />
                <YAxis />
                <Tooltip />
                <Legend />
                {Object.keys(data[0]).map((key, index) => (
                  <Bar dataKey={key} fill={colors[index]} />
                ))}
              </BarChart>
          </div>
  }
}

export default GraficoDeBarras;
