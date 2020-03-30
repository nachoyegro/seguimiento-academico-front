import React from 'react';
import BasePage from './BasePage';
import Widget from '../components/Widget';
import { withStyles } from '@material-ui/core/styles';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';


const useStyles = theme => ({
      carrot: {
        color: "#fff",
        backgroundColor: "#e67e22",
      },
      violet: {
          color: "#fff",
          backgroundColor: "#9b59b6"
      },
      icon: {
          fontSize: 50,
          marginLeft: '-10px'
      },
})

class HomePage extends BasePage {

    renderPage() {
        const { classes } = this.props;
        return (
            <Widget color={classes.violet} url={`${process.env.REACT_APP_ESTADISTICAS_URL}/widget`}>
                <EmojiEmotionsIcon className={classes.icon}></EmojiEmotionsIcon>
            </Widget>
        )
    }
}

export default withStyles(useStyles)(HomePage);