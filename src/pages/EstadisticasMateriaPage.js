import React from 'react';
import GraficoDeBarras from '../components/GraficoDeBarras';
import GraficoDeDispersion from '../components/GraficoDeDispersion';
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
                <GraficoDeBarras titulo={'Estadísticas básicas de materia'} url={`${process.env.REACT_APP_ESTADISTICAS_URL}/materias/${this.state.materia}/basicos?inicio=${this.state.fecha_inicio}&fin=${this.state.fecha_fin}&carrera=${this.state.carrera}`} />
              </div>
              <div className="item">
                <GraficoDeBarras titulo={'Detalle de aprobación'} url={`${process.env.REACT_APP_ESTADISTICAS_URL}/materias/${this.state.materia}/detalle-aprobados?inicio=${this.state.fecha_inicio}&fin=${this.state.fecha_fin}&carrera=${this.state.carrera}`} />
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
                    url={`${process.env.REACT_APP_ESTADISTICAS_URL}/materias/${this.state.materia}/dispersion-notas?inicio=${this.state.fecha_inicio}&fin=${this.state.fecha_fin}&carrera=${this.state.carrera}`}>
                    
                </GraficoDeDispersion>
                </div>
            </>
        )
    }
}

export default EstadisticasMateriaPage;