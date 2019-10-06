import React, { Component } from 'react';
import { render } from 'react-dom';
import Alumno from './components/Alumno.js';
import IndiceAprobadosChart from './components/IndiceAprobadosChart.js';

render(<IndiceAprobadosChart url={'http://127.0.0.1:5000/indiceaprobacion'}/>, document.querySelector('#root'));
