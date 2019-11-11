import React from 'react';
import BasePage from './BasePage';

class Estadisticas extends BasePage {

    renderPage = () => {
        return (
            <div>
                {this.renderForm()}
                {this.renderEstadisticas()}
            </div>
        )
    }

}

export default Estadisticas;