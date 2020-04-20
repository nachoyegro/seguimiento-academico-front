import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import CustomChart from './CustomChart.js';

export default class GraficoRadar extends CustomChart {

  renderChart(data) {
    return (
      <div className="chart">         
        <RadarChart outerRadius={90} width={730} height={250} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="nombre" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Mike" dataKey="valor" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
        </div>
    );
  }
}
