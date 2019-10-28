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
            <GraficoDeBarras titulo={'Estadisticas basicas de materia X'} url={`${process.env.REACT_APP_ESTADISTICAS_URL}/carreras/${this.state.carrera}/materias/${this.state.materia}/basicos?inicio=2001-10-10&fin=2019-10-10`} />
        )
    }
}

export default Estadisticas;