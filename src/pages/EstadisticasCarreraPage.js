import React from 'react';
import GraficoDeArea from '../components/GraficoDeArea';
import Estadisticas from './Estadisticas';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

class EstadisticasCarreraPage extends Estadisticas {

  constructor(props) {
    super(props);
    this.titulo = 'Análisis por carrera'
  }


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
        <FormControl className="form-estadisticas-input" fullWidth>
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
          <h4 className="texto-boton">Ver</h4>

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
