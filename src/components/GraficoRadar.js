import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import CustomChart from './CustomChart.js';

export default class GraficoRadar extends CustomChart {

  renderChart(data) {
    return (<RadarChart outerRadius={90} width="100%" height="100%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="nombre" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar name="Mike" dataKey="valor" stroke="#000" fill="#29ABE2" fillOpacity={0.6} />
        </RadarChart>
    );
  }
}
