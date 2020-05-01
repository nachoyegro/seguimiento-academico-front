import React from 'react';
import BasePage from './BasePage';

class Estadisticas extends BasePage {

    constructor(props) {
        super(props);
      }

    renderEstadisticasSiSubmit = () => {
        if(this.state.submitted) {
            return ( this.renderEstadisticas() );
        }
    }

    renderPage = () => {
        return (
            <div className="content">
                <div className="form-estadisticas center">
                    <p className="bienvenido espaciado-abajo">{this.titulo}</p>
                    {this.renderForm()}
                </div>
                <div className="estadisticas center">
                    {this.renderEstadisticasSiSubmit()}
                </div>
            </div>
        )
    }

}

export default Estadisticas;