import React from 'react';
import GraficoDeLineas from '../components/GraficoDeLineas';
import GraficoDeBarras from '../components/GraficoDeBarras';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import BasePage from './BasePage';

class EstadisticasMateriaPage extends BasePage {


    state = {
        materia: '',
        fecha_inicio: '',
        fecha_fin: '',
        data_set: false
    }

    submit = e => {
        e.preventDefault();
        const { materia, fecha_inicio, fecha_fin } = e.currentTarget.elements;
        this.setState({ materia: materia.value, fecha_inicio: fecha_inicio.value, fecha_fin: fecha_fin.value });
    }

    renderPage = () => {
        return (
            <div>
                <form onSubmit={e => this.submit(e)}>
                    <FormControl fullWidth>
                        <TextField id="materia"
                            label="Materia"
                            variant="outlined"
                            placeholder="Codigo de materia"
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
                <GraficoDeBarras titulo={'Estadisticas basicas de materia X'} url={`${process.env.REACT_APP_ESTADISTICAS_URL}/carreras/P/materias/${this.state.materia}/basicos?inicio=${this.state.fecha_inicio}&fin=${this.state.fecha_fin}`} />
            </div>
        )
    }
}

export default EstadisticasMateriaPage;