import React from 'react';
import BasePage from './BasePage';
import { Link } from 'react-router-dom';
import '../App.css';
import GrainIcon from '@material-ui/icons/Grain';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import pink from '@material-ui/core/colors/pink';

class HomePage extends BasePage {

    renderPage() {
        return (
            <div>
                <p className="bienvenido espaciado-arriba">Bienvenido al sistema de seguimiento académico</p>
                <p className="bienvenido-descripcion espaciado-abajo">Seleccione la categoría que desea visualizar</p>
                <div className="columns is-gapless">
                    <div className="column">
                        <Link to="/estadisticas-carrera" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="service-box">
                                <GrainIcon style={{ fontSize: 100, color: pink[500] }}></GrainIcon>
                                <h2 className="titulo-recuadro">Análisis por Carrera</h2>
                                <p className="texto-recuadro">Crecimiento anual de inscriptos, estado de la carrera, cantidad de estudiantes, etc.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="column">
                        <Link to="/estadisticas-materia" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="service-box">
                                <GroupIcon style={{ fontSize: 100, color: pink[500] }}></GroupIcon>
                                <h2 className="titulo-recuadro">Análisis por Materia</h2>
                                <p className="texto-recuadro">Cantidad de aprobados/desaprobados/ausentes, recursantes, detalle de aprobados</p>
                            </div>
                        </Link>
                    </div>
                    <div className="column">
                        <Link to="/estadisticas-alumno" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="service-box">
                                <PersonIcon style={{ fontSize: 100, color: pink[500] }}></PersonIcon>
                                <h2 className="titulo-recuadro">Análisis por Estudiante</h2>
                                <p className="texto-recuadro">Porcentaje de aprobación por áreas, aprobación por núcleos, cantidad de créditos, etc</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;