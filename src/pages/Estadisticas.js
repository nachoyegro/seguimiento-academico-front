import React from 'react';
import BasePage from './BasePage';

class Estadisticas extends BasePage {

    renderPage = () => {
        return (
            <div>
                <p className="bienvenido">{this.titulo}</p>
                <div className="form-estadisticas center">
                    {this.renderForm()}
                </div>
                {this.renderEstadisticas()}
            </div>
        )
    }

}

export default Estadisticas;