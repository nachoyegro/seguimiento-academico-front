import React from 'react';
import BasePage from './BasePage';
import Widget from '../components/Widget';
import { withStyles } from '@material-ui/core/styles';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { Link } from 'react-router-dom';
import '../App.css';
import GrainIcon from '@material-ui/icons/Grain';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import pink from '@material-ui/core/colors/pink';

const useStyles = theme => ({
    carrot: {
        color: "#fff",
        backgroundColor: "#e67e22",
    },
    violet: {
        color: "#fff",
        backgroundColor: "#9b59b6"
    },
    icon: {
        fontSize: 50,
        marginLeft: '-10px'
    },
})

class HomePage extends BasePage {

    renderPage() {
        const { classes, nombre } = this.props;
        return (
            <div>
                <h1 className="bienvenido">Bienvenido al módulo de estadísticas de seguimiento académico</h1>
                <p className="bienvenido-descripcion">Seleccione el tipo de estadística que desea visualizar</p>
                <div className="columns is-gapless">
                    <div className="column">
                        <Link to="/estadisticas-carrera" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="service-box">
                                <GrainIcon style={{ fontSize: 100, color: pink[500] }}></GrainIcon>
                                <h2 className="titulo-recuadro">Estadísticas por Carrera</h2>
                                <p className="texto-recuadro">Se puede ver el crecimiento anual de inscriptos, qué materias son traba, estado de la carrera, etc.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="column">
                        <Link to="/estadisticas-materia" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="service-box">
                                <GroupIcon style={{ fontSize: 100, color: pink[500] }}></GroupIcon>
                                <h2 className="titulo-recuadro">Estadísticas por Materia</h2>
                                <p className="texto-recuadro">Se puede ver la cantidad de aprobados/desaprobados/ausentes, cantidad de recursantes, detalle de aprobados, etc</p>
                            </div>
                        </Link>
                    </div>
                    <div className="column">
                        <Link to="/estadisticas-alumno" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="service-box">
                                <PersonIcon style={{ fontSize: 100, color: pink[500] }}></PersonIcon>
                                <h2 className="titulo-recuadro">Estadísticas por Alumno</h2>
                                <p className="texto-recuadro">Se puede ver el porcentaje de aprobación por áreas, por núcleos, cantidad de créditos, etc</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(useStyles)(HomePage);