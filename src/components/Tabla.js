import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CustomChart from './CustomChart.js';

class Tabla extends CustomChart {

    transformData(data) {
        /*  
            :data tiene que tener la forma de lista de objects
            const datos = [ 
                {"nombre": "Objetos 2", "inscriptos": 30, "aprobados": 20, "desaprobados": 2, "ausentes": 8},
                {"nombre": "Base de datos", "inscriptos": 50, "aprobados": 30, "desaprobados": 15, "ausentes": 5},
            ]

            Devuelve un array de objects de la forma

            [
                ["nombre", "inscriptos", "aprobados", "desaprobados", "ausentes"],
                ["Objetos 2", "30", "20", "2", "8"],
                ["Base de datos", "50", "30", "15", "5"],
            ]

        */
        var headers = Object.keys(data[0]);
        var body = data.map( row => Object.values(row) );
        body.unshift(headers);
        return body;
    }
    
    renderChart(data) {
        var rows = this.transformData(data);
        return (
            <Table aria-label="simple table" className="tabla">
                <TableBody>
                {rows.map(row => (
                    <TableRow key={row[0]}>
                    <TableCell component="th" scope="row">
                        {row[0]}
                    </TableCell>
                    <TableCell align="right">{row[1]}</TableCell>
                    <TableCell align="right">{row[2]}</TableCell>
                    <TableCell align="right">{row[3]}</TableCell>
                    <TableCell align="right">{row[4]}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        );
    }
}

export default Tabla;