import React from 'react';
import BaseComponent from './BaseComponent.js'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Widget extends BaseComponent {

  renderContainer(data) {
    return (
      <div className="widget">
        <Card variant="outlined">
          <CardContent>
            <div>
              <Typography className="widget-data" variant="h4" component="h2">
                {data.valor}
              </Typography>
            </div>
            <div>
            <Typography className="widget-desc" variant="body2" component="p">
              {data.nombre}
            </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

}

export default Widget;