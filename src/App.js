import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {alumnos: []}
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/v2/alumnos/?format=json`)
          .then(res => {
            const alumnos = res.data;
            this.setState({ alumnos: alumnos });
          })
    }

    render() {
        return (
            <ul>
                { this.state.alumnos.map(alumno => <li>{alumno.nombre}</li>)}
            </ul>
        );
    }
}

export default App;

