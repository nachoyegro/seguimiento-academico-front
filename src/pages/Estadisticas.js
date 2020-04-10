import React from 'react';
import BasePage from './BasePage';

class Estadisticas extends BasePage {

    renderEstadisticasSiSubmit = () => {
        if(this.state.submitted) {
            return ( this.renderEstadisticas() );
        }
    }

    renderPage = () => {
        return (
            <div>
                <p className="bienvenido">{this.titulo}</p>
                <div className="form-estadisticas center">
                    {this.renderForm()}
                </div>
                {this.renderEstadisticasSiSubmit()}
            </div>
        )
    }

}

export default Estadisticas;