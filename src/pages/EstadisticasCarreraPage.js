import React from 'react';
import GraficoDeArea from '../components/GraficoDeArea';
import Estadisticas from './Estadisticas';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

class EstadisticasCarreraPage extends Estadisticas {


  state = {
    carrera: '',
    data_set: false
  }

  submit = e => {
    e.preventDefault();
    const { carrera } = e.currentTarget.elements;
    this.setState({ carrera: carrera.value });
  }

  renderForm = () => {
    return (
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
        <GraficoDeArea titulo={'Cantidad de ingresos por semestre'}
          url={`${process.env.REACT_APP_ESTADISTICAS_URL}/carreras/${this.state.carrera}/alumnos`} />
      </>
    )
  }

}

export default EstadisticasCarreraPage;