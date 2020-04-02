import React from 'react';
import GraficoDeBarras from '../components/GraficoDeBarras';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Estadisticas from './Estadisticas';

class EstadisticasMateriaPage extends Estadisticas {

    constructor(props) {
        super(props);
        this.titulo = 'Análisis por materia'
    }


    state = {
        carreras: '',
        materia: '',
        fecha_inicio: '',
        fecha_fin: '',
        data_set: false
    }

    submit = e => {
        e.preventDefault();
        const { carreras, materia, fecha_inicio, fecha_fin } = e.currentTarget.elements;
        this.setState({ carreras: carreras.value, materia: materia.value, fecha_inicio: fecha_inicio.value, fecha_fin: fecha_fin.value });
    }

    renderForm = () => {
        return (
            <form onSubmit={e => this.submit(e)}>
                <FormControl className="form-estadisticas-input" fullWidth>
                    <TextField id="carreras"
                        label="Carreras"
                        variant="outlined"
                        placeholder="Codigos de Carreras"
                        InputLabelProps={{
                            shrink: true,
                        }} />
                </FormControl>
                <FormControl className="form-estadisticas-input" fullWidth>
                    <TextField id="materia"
                        label="Materia"
                        variant="outlined"
                        placeholder="Codigo de materia"
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
                <GraficoDeBarras titulo={'Estadisticas basicas de materia'} url={`${process.env.REACT_APP_ESTADISTICAS_URL}/materias/${this.state.materia}/basicos?inicio=${this.state.fecha_inicio}&fin=${this.state.fecha_fin}&carreras=${this.state.carreras}`} />
            </>
        )
    }
}

export default EstadisticasMateriaPage;