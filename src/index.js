import React, { Component } from 'react';
import { render } from 'react-dom';
import Alumno from './components/Alumno.js';
import GraficoDeLineas from './components/GraficoDeLineas.js';

render(<GraficoDeLineas titulo={'Indice de aprobación'} url={'http://127.0.0.1:5000/indiceaprobacion'}/>, document.querySelector('#root'));
