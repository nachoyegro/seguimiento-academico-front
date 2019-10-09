import React, { Component } from 'react';
import { render } from 'react-dom';
import Alumno from './components/Alumno.js';
import GraficoDeLineas from './components/GraficoDeLineas.js';

render(<GraficoDeLineas titulo={'Indice de aprobación'} url={process.env.REACT_APP_INDICE_APROBACION_URL}/>, document.querySelector('#root'));
