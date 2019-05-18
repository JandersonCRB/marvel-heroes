import React from 'react';

// Material-ui
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const HeroCard = ({ classes, hero, clicked }) => {
  const { extension, path } = hero.thumbnail;
  const thumb = `${path}.${extension}`;
  return (
    <Paper className={classes.root} square>
      <Grid 
        className={classes.mainContainer}
        container
        component={ButtonBase}
        onClick={() => clicked(hero.id)}
      >
        <Grid container style={{ height: 280 }}>
          <Grid
            className={classes.titleContainer}
            container
            justify="center"
            alignItems="center"
          >
            <Typography className={classes.titleText}>
              {hero.name}
            </Typography>
            <img src={thumb} alt={hero.name} width="100%" height="250" />
          </Grid>
          <Divider />
        </Grid>
      </Grid>
    </Paper>
  )
};

export default withStyles(styles)(HeroCard);
