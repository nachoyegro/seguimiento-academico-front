import React from 'react';
import GraficoDeArea from '../components/GraficoDeArea';
import GraficoDeDispersion from '../components/GraficoDeDispersion';
import Tabla from '../components/Tabla';
import Widget from '../components/Widget';
import Estadisticas from './Estadisticas';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { getCarreras } from '../helpers/jwt';

class EstadisticasCarreraPage extends Estadisticas {

  constructor(props) {
    super(props);
    this.titulo = 'Análisis por carrera'
  }


  state = {
    carrera: '',
    submitted: false,
  }

  submit = e => {
    e.preventDefault();
    this.setState({ submitted: true });
  }

  renderForm = () => {
    var carreras = getCarreras();
    return (
      <form onSubmit={e => this.submit(e)}>
        <FormControl variant="outlined" className="form-estadisticas-input" fullWidth>
          <InputLabel id="carrera">Carrera</InputLabel>
          <Select
            labelId="carrera"
            id="carrera"
            value={this.state.carrera}
            onChange={e => this.setState({ carrera: e.target.value })}
            label="Carrera"
          >

            <MenuItem value="">
              <em>--</em>
            </MenuItem>

            {carreras.map(row => (
              <MenuItem value={row[0]}>{row[1]}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary">
          <h4 className="texto-boton">Ver</h4>

        </Button>
      </form>
    )

  }

  renderEstadisticas = () => {
    return (
      <>
        <div className="widgetItem">
          <Widget color='#000' url={`${process.env.REACT_APP_ESTADISTICAS_URL}/carreras/${this.state.carrera}/cursantes-actual`}>Alumnos</Widget>
        </div>
        <div className="widgetItem">
          <Widget color='#000' url={`${process.env.REACT_APP_ESTADISTICAS_URL}/carreras/${this.state.carrera}/ingresantes-actual`}>Alumnos</Widget>
        </div>
        <div className="widgetItem">
          <Widget color='#000' url={`${process.env.REACT_APP_ESTADISTICAS_URL}/carreras/${this.state.carrera}/graduados-total`}>Alumnos</Widget>
        </div>
        <div className="item">
          <Tabla titulo={'Dependencia de materias'} 
          header={[{ title: 'Materia', field: 'Materia', width: '70%' }, 
                  { title: 'Promedio de Aprobación', field: 'Promedio de Aprobación', width: '5%'  }, 
                  { title: 'Obligatorias dependientes', field: 'Obligatorias dependientes', width: '5%'  },
                  { title: 'Score', field: 'Score', width: '5%'  } ]}
          description="Se calcula un score en base al promedio de aprobación de los estudiantes y la cantidad de materias obligatorias que dependen de ésta. Este score determina qué materia puede llegar a demorar la carrera de un estudiante.

          Score = (1 − IndiceAprobacion) ∗ CantidadObligatoriasDependientes"
          url={`${process.env.REACT_APP_ESTADISTICAS_URL}/carreras/${this.state.carrera}/materias-traba?plan=2019`} />
        </div>
        <div className="item">
          <GraficoDeArea titulo={'Cantidad de ingresos por semestre'}
            description="Se muestra la cantidad de ingresos semestrales histórico de la carrera. De esta forma, se puede observar en qué momento hubo picos de ingresos y en qué momentos hubo menos."
            url={`${process.env.REACT_APP_ESTADISTICAS_URL}/carreras/${this.state.carrera}/alumnos`} />
        </div>
        <div className="item">
          <Tabla titulo={'Alumnos por cohorte'}
            header={[{ title: 'Cohorte', field: 'Cohorte' },
            { title: 'Cursantes', field: 'Cursantes' },
            { title: 'Ingresantes', field: 'Ingresantes' },
            { title: 'Graduados', field: 'Graduados' }]}
            description="Se obtiene un listado de inscriptos, cursantes, graduados y postulantes por cohorte."
            url={`${process.env.REACT_APP_ESTADISTICAS_URL}/carreras/${this.state.carrera}/cantidades-alumnos`} />
        </div>
        <div className="item">
          <Tabla titulo={'Ingresantes por cohorte'}
            header={[{ title: 'Cohorte', field: 'Cohorte' },
            { title: 'Ingresantes', field: 'Ingresantes' }]}
            description="Dada una carrera, se obtiene la cantidad de ingresantes separadas por año."
            url={`${process.env.REACT_APP_ESTADISTICAS_URL}/carreras/${this.state.carrera}/cantidades-ingresantes`} />
        </div>
        <div className="item">
          <GraficoDeDispersion
            titulo='Dispersión de alumnos'
            unitX=""
            unitY=""
            dataX="Promedio"
            dataY="Score"
            nombreX="Promedio"
            nombreY="Score"
            description="Se muestra un gráfico con la dispersión de los estudiantes con respecto a su promedio general y su desempeño el último año. Uno de los ejes tiene en cuenta el promedio y el otro su score el último año. De esta manera, se puede observar de forma gráfica los estudiantes que se desempeñaron por encima de su historial y cuáles no."
            url={`${process.env.REACT_APP_ESTADISTICAS_URL}/carreras/${this.state.carrera}/dispersion-score-promedio?dias=365`}> 
          </GraficoDeDispersion>
        </div>

      </>
    )
  }

}

export default EstadisticasCarreraPage;
