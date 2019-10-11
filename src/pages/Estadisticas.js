import React, {Component} from 'react';
import GraficoDeLineas from '../components/GraficoDeLineas';

class Estadisticas extends Component {
    render() {
        return <GraficoDeLineas titulo={'Indice de aprobación'} url={process.env.REACT_APP_INDICE_APROBACION_URL}/>

    }
}

export default Estadisticas;