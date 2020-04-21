import React from 'react';
import GraficoDeArea from '../components/GraficoDeArea';
import GraficoDeDispersion from '../components/GraficoDeDispersion';
import Tabla from '../components/Tabla';
import Widget from '../components/Widget';
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
    submitted: false,
  }

  submit = e => {
    e.preventDefault();
    const { carrera } = e.currentTarget.elements;
    this.setState({ carrera: carrera.value, submitted: true });
  }

  renderForm = () => {
    return (
      <form onSubmit={e => this.submit(e)}>
        <FormControl className="form-estadisticas-input" fullWidth>
          <TextField id="carrera"
            label="Carrera"
            variant="outlined"
            placeholder="Codigo de carrera"
            required={true}
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
            unitX="%"
            unitY=""
            dataX="Avance"
            dataY="Score"
            nombreX="Avance"
            nombreY="Score"
            url={`${process.env.REACT_APP_ESTADISTICAS_URL}/carreras/${this.state.carrera}/dispersion-score-avance`}>
            
          </GraficoDeDispersion>
        </div>
        <div className="item">
          <GraficoDeArea titulo={'Cantidad de ingresos por semestre'}
          url={`${process.env.REACT_APP_ESTADISTICAS_URL}/carreras/${this.state.carrera}/alumnos`} />
        </div>
        <div className="item">
          <Tabla titulo={'Alumnos por cohorte'} url={`${process.env.REACT_APP_ESTADISTICAS_URL}/carreras/${this.state.carrera}/cantidades-alumnos`}/>
        </div>
        <div className="item">
          <Tabla titulo={'Ingresantes por cohorte'} url={`${process.env.REACT_APP_ESTADISTICAS_URL}/carreras/${this.state.carrera}/cantidades-ingresantes`}/>
        </div>
        
      </>
    )
  }

}

export default EstadisticasCarreraPage;
