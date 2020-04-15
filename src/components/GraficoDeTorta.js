import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import CustomChart from './CustomChart.js';

class GraficoDeTorta extends CustomChart {

  renderChart(data) {
    return <div className="chart">
              <BarChart data={data}>
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
            </div>
  }
}

export default GraficoDeTorta;
