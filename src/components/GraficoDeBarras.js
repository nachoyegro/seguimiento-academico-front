import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import CustomChart from './CustomChart.js';

class GraficoDeBarras extends CustomChart {

  renderChart(data) {
    return <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Materia" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Aprobados" fill="#00b894" />
      <Bar dataKey="Ausentes" fill="#0984e3" />
      <Bar dataKey="Desaprobados" fill="#ff7675" />
      <Bar dataKey="Faltantes" fill="#ffc658" />
    </BarChart>
  }
}

export default GraficoDeBarras;
