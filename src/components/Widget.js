import React from 'react';
import CustomChart from './CustomChart.js';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = theme => ({
    root: {
        minWidth: 100,
        color: '#123'
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      data: {
          marginLeft: '0px'
      },
      center: {
        margin: 'auto',
        width: '50%',
        padding: '10px'
      }
    });

class Widget extends CustomChart {

  renderChart(data){
    const { classes } = this.props;
    return (
      <Card className={this.props.color} variant="outlined">
      <CardContent>
        <div className={classes.center}>
          {this.props.children}
          <Typography className={classes.data} variant="h4" component="h2">
            { data.valor }
          </Typography>
        </div>
        <Typography variant="body2" component="p">
            { data.nombre }
        </Typography>
      </CardContent>
    </Card>
    )
  }

}

export default withStyles(useStyles)(Widget);