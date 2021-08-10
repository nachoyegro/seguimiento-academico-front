import React from 'react';
import GraficoDeBarras from '../components/GraficoDeBarras';
import GraficoDeDispersion from '../components/GraficoDeDispersion';
import Tabla from '../components/Tabla';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Estadisticas from './Estadisticas';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { getCarreras } from '../helpers/jwt';

class EstadisticasMateriaPage extends Estadisticas {

  constructor(props) {
    super(props);
    this.titulo = 'Análisis por materia'
  }


  state = {
    carrera: '',
    materia: '',
    fecha_inicio: '',
    fecha_fin: '',
    submitted: false
  }

  submit = e => {
    e.preventDefault();
    const { materia, fecha_inicio, fecha_fin } = e.currentTarget.elements;
    this.setState({ submitted: true, materia: materia.value, fecha_inicio: fecha_inicio.value, fecha_fin: fecha_fin.value });
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
        <FormControl className="form-estadisticas-input" fullWidth>
          <TextField id="materia"
            label="Materia"
            variant="outlined"
            placeholder="Codigo de materia"
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
          Ver
                    </Button>
      </form>
    )
  }



  renderEstadisticas = () => {
    return (
      <>
        <div className="item">
          <GraficoDeBarras titulo={'Estadísticas básicas de materia'} 
          description="Análisis de cuántos estudiantes aprobaron, desaprobaron, quedaron ausentes y cuántos faltan aprobarla dentro del período elegido."
          url={`${process.env.REACT_APP_ESTADISTICAS_URL}/materias/${this.state.materia}/basicos?inicio=${this.state.fecha_inicio}&fin=${this.state.fecha_fin}&carrera=${this.state.carrera}`} />
        </div>
        <div className="item">
          <GraficoDeBarras titulo={'Detalle de aprobación'} 
          description="Detalle de la forma en que aprobaron los estudiantes esta materia en el rango seleccionado."
          url={`${process.env.REACT_APP_ESTADISTICAS_URL}/materias/${this.state.materia}/detalle-aprobados?inicio=${this.state.fecha_inicio}&fin=${this.state.fecha_fin}&carrera=${this.state.carrera}`} />
        </div>
        <div className="item">
          <Tabla titulo={'Recursantes'}
            description="Se analizan los recursantes y la cantidad de veces que la recursaron. Para este análisis se tiene en cuenta el semestre de la fecha fin. Es decir, si se pide un análisis hasta la fecha 12/12/2019, se calcularán los recursantes de la materia pedida durante las inscripciones del segundo semestre del 2019."
            header={[{ title: 'Legajo', field: 'Legajo' },
            { title: 'Veces que recursa', field: 'Cantidad' }]}
            url={`${process.env.REACT_APP_ESTADISTICAS_URL}/materias/${this.state.materia}/recursantes?carrera=${this.state.carrera}&fecha=${this.state.fecha_fin}`} />
        </div>
        <div className="item">
          <GraficoDeDispersion
            titulo='Dispersión de notas con respecto al promedio'
            unitX=""
            unitY=""
            dataX="Promedio"
            dataY="Nota"
            nombreX="Promedio"
            nombreY="Nota"
            description="Análisis de la dispersión de notas dentro del período elegido. En el eje vertical se muestra el promedio general del alumno, mientras que en el eje horizontal se muestra la nota obtenida."
            url={`${process.env.REACT_APP_ESTADISTICAS_URL}/materias/${this.state.materia}/dispersion-notas?inicio=${this.state.fecha_inicio}&fin=${this.state.fecha_fin}&carrera=${this.state.carrera}`}>

          </GraficoDeDispersion>
        </div>
      </>
    )
  }
}

export default EstadisticasMateriaPage;