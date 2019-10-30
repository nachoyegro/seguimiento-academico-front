import React from 'react';
import GraficoDeLineas from '../components/GraficoDeLineas';
import GraficoDeBarras from '../components/GraficoDeBarras';
import BasePage from './BasePage';

class Estadisticas extends BasePage {

    state = {
        carrera: 'W',
        materia: '01041',
        alumno: '',
    }

    renderPage() {
        return (
            <GraficoDeBarras titulo={'Estadisticas basicas de materia X'} url={`${process.env.REACT_APP_ESTADISTICAS_URL}/carreras/${this.state.carrera}/materias/${this.state.materia}/basicos?inicio=${this.state.fecha_inicio}&fin=${this.state.fecha_fin}`} />
        )
    }
}

export default Estadisticas;