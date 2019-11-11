import React from 'react';
import GraficoDeBarras from '../components/GraficoDeBarras';
import GraficoRadar from '../components/GraficoRadar';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import BasePage from './BasePage';

class EstadisticasAlumnoPage extends BasePage {


  state = {
    carrera: '',
    alumno: '',
    plan: '',
    fecha_inicio: '',
    fecha_fin: '',
    data_set: false
  }

  submit = e => {
    e.preventDefault();
    const { carrera, alumno, plan, fecha_inicio, fecha_fin } = e.currentTarget.elements;
    this.setState({ carrera: carrera.value, alumno: alumno.value, plan: plan.value, fecha_inicio: fecha_inicio.value, fecha_fin: fecha_fin.value });
  }

  renderPage = () => {
    return (
      <div>
        <form onSubmit={e => this.submit(e)}>
          <FormControl fullWidth>
            <TextField id="carrera"
              label="Carrera"
              variant="outlined"
              placeholder="Codigo de carrera"
              InputLabelProps={{
                shrink: true,
              }} />
          </FormControl>
          <FormControl fullWidth>
            <TextField id="alumno"
              label="Alumno"
              variant="outlined"
              placeholder="Legajo de alumno"
              InputLabelProps={{
                shrink: true,
              }} />
          </FormControl>
          <FormControl fullWidth>
            <TextField id="plan"
              label="Plan"
              variant="outlined"
              placeholder="Plan"
              InputLabelProps={{
                shrink: true,
              }} />
          </FormControl>
          <FormControl fullWidth>
            <TextField id="fecha_inicio"
              label="Fecha Inicio"
              type="date"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }} />
          </FormControl>
          <FormControl fullWidth>
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
        <GraficoRadar titulo={'Porcentajes de aprobacion por area'}
          url={`${process.env.REACT_APP_ESTADISTICAS_URL}/alumnos/${this.state.alumno}/porcentajes-areas?carrera=${this.state.carrera}&plan=${this.state.plan}&inicio=${this.state.fecha_inicio}&fin=${this.state.fecha_fin}`} />
      </div>
    )
  }
}

export default EstadisticasAlumnoPage;