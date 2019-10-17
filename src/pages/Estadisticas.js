import React, {Component} from 'react';
import GraficoDeLineas from '../components/GraficoDeLineas';
import GraficoDeBarras from '../components/GraficoDeBarras';

class Estadisticas extends Component {
    render() {
        return <GraficoDeBarras titulo={'Estadisticas basicas de materia X'} url={process.env.REACT_APP_ESTADISTICAS_BASICAS_URL}/>

    }
}

export default Estadisticas;