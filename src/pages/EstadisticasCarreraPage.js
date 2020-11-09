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
          <GraficoDeDispersion
            titulo='Dispersión de alumnos'
            unitX=""
            unitY=""
            dataX="Promedio"
            dataY="Score"
            nombreX="Promedio"
            nombreY="Score"
            url={`${process.env.REACT_APP_ESTADISTICAS_URL}/carreras/${this.state.carrera}/dispersion-score-promedio?dias=365`}>

          </GraficoDeDispersion>
        </div>
        <div className="item">
          <GraficoDeArea titulo={'Cantidad de ingresos por semestre'}
            url={`${process.env.REACT_APP_ESTADISTICAS_URL}/carreras/${this.state.carrera}/alumnos`} />
        </div>
        <div className="item">
          <Tabla titulo={'Alumnos por cohorte'} url={`${process.env.REACT_APP_ESTADISTICAS_URL}/carreras/${this.state.carrera}/cantidades-alumnos`} />
        </div>
        <div className="item">
          <Tabla titulo={'Alumnos por cohorte'}
            header={[{ title: 'Cohorte', field: 'Cohorte' },
            { title: 'Cursantes', field: 'Cursantes' },
            { title: 'Ingresantes', field: 'Ingresantes' },
            { title: 'Graduados', field: 'Graduados' }]}
            url={`${process.env.REACT_APP_ESTADISTICAS_URL}/carreras/${this.state.carrera}/cantidades-alumnos`} />
        </div>
        <div className="item">
          <Tabla titulo={'Ingresantes por cohorte'}
            header={[{ title: 'Cohorte', field: 'Cohorte' },
            { title: 'Ingresantes', field: 'Ingresantes' }]}
            url={`${process.env.REACT_APP_ESTADISTICAS_URL}/carreras/${this.state.carrera}/cantidades-ingresantes`} />
        </div>

      </>
    )
  }

}

export default EstadisticasCarreraPage;
