import React from 'react';
import BaseComponent from './BaseComponent.js'
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = theme => ({
  data: {
    marginLeft: '0px'
  },
  center: {
    margin: 'auto',
    width: '50%',
    padding: '10px'
  }
});

class Widget extends BaseComponent {

  renderContainer(data) {
    const { classes } = this.props;
    return (
      <div className="widget">
        <Card variant="outlined">
          <CardContent>
            <div className={classes.center}>
              {this.props.children}
              <Typography className={classes.data} variant="h4" component="h2">
                {data.valor}
              </Typography>
            </div>
            <Typography variant="body2" component="p">
              {data.nombre}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }

}

export default withStyles(useStyles)(Widget);