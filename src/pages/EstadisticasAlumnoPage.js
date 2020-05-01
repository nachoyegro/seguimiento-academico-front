import React from 'react';
import GraficoRadar from '../components/GraficoRadar';
import GraficoDeLineas from '../components/GraficoDeLineas';
import Tabla from '../components/Tabla';
import Widget from '../components/Widget';
import Estadisticas from './Estadisticas';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { getCarreras } from '../helpers/jwt';

class EstadisticasAlumnoPage extends Estadisticas {

  constructor(props) {
    super(props);
    this.titulo = 'Análisis por alumno'
  }

  state = {
    carrera: '',
    alumno: '',
    plan: '',
    fecha_inicio: '',
    fecha_fin: '',
    submitted: false,
  }

  submit = e => {
    e.preventDefault();
    const { carrera, alumno, plan, fecha_inicio, fecha_fin } = e.currentTarget.elements;
    this.setState({ submitted: true, alumno: alumno.value, plan: plan.value, fecha_inicio: fecha_inicio.value, fecha_fin: fecha_fin.value });
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
          onChange={ e => this.setState({carrera: e.target.value})}
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
        <FormControl className="form-estadisticas-input" fullWidth>
          <TextField id="alumno"
            label="Alumno"
            variant="outlined"
            placeholder="Legajo de alumno"
            required={true}
            InputLabelProps={{
              shrink: true,
            }} />
        </FormControl>
        <FormControl className="form-estadisticas-input" fullWidth>
          <TextField id="plan"
            label="Plan"
            variant="outlined"
            placeholder="Plan"
            required={true}
            InputLabelProps={{
              shrink: true,
            }} />
        </FormControl>
        <FormControl className="form-estadisticas-input" fullWidth>
          <TextField id="fecha_inicio"
            label="Fecha Inicio"
            type="date"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }} />
        </FormControl>
        <FormControl className="form-estadisticas-input" fullWidth>
          <TextField id="fecha_fin"
            label="Fecha Fin"
            type="date"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }} />
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary">
          Calcular Estadisticas
              </Button>
      </form>
    )

  }


  renderEstadisticas = () => {
    return (
      <>

        <div className="widgetItem">
          <Widget color='#000' url={`${process.env.REACT_APP_ESTADISTICAS_URL}/alumnos/${this.state.alumno}/porcentaje-carrera?carrera=${this.state.carrera}&plan=${this.state.plan}&inicio=${this.state.fecha_inicio}&fin=${this.state.fecha_fin}`}>Alumnos</Widget>
        </div>
        <div className="item">
          <GraficoRadar titulo={'Porcentajes de aprobacion por area'}
            url={`${process.env.REACT_APP_ESTADISTICAS_URL}/alumnos/${this.state.alumno}/porcentajes-areas?carrera=${this.state.carrera}&plan=${this.state.plan}&inicio=${this.state.fecha_inicio}&fin=${this.state.fecha_fin}`} />
        </div>
        <div className="item">
          <GraficoRadar titulo={'Porcentajes de aprobacion por nucleo'}
            url={`${process.env.REACT_APP_ESTADISTICAS_URL}/alumnos/${this.state.alumno}/porcentajes-nucleos?carrera=${this.state.carrera}&plan=${this.state.plan}&inicio=${this.state.fecha_inicio}&fin=${this.state.fecha_fin}`} />
        </div>
        <div className="item">
          <Tabla titulo={'Notas del alumno'} url={`${process.env.REACT_APP_ESTADISTICAS_URL}/alumnos/${this.state.alumno}/notas?carrera=${this.state.carrera}&plan=${this.state.plan}&inicio=${this.state.fecha_inicio}&fin=${this.state.fecha_fin}`}/>
        </div>
        <div className="item">
          <GraficoDeLineas titulo={'Desempeño del alumno'}
            url={`${process.env.REACT_APP_ESTADISTICAS_URL}/alumnos/${this.state.alumno}/scores?carrera=${this.state.carrera}&plan=${this.state.plan}&inicio=${this.state.fecha_inicio}&fin=${this.state.fecha_fin}`} />
        </div>
      </>
    )
  }

}

export default EstadisticasAlumnoPage;
