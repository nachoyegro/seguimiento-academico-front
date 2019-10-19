import React, { Component } from 'react';
import GraficoDeLineas from '../components/GraficoDeLineas';
import GraficoDeBarras from '../components/GraficoDeBarras';

class Estadisticas extends Component {

    state = {
        carrera: 'W',
        materia: '01041',
        alumno: '',
    }

    render() {
        return <div>
            <GraficoDeBarras titulo={'Estadisticas basicas de materia X'} url={`${process.env.REACT_APP_ESTADISTICAS_URL}/carreras/${this.state.carrera}/materias/${this.state.materia}/basicos`} />
        </div>
    }
}

export default Estadisticas;