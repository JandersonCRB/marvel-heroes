import React, { useState, useEffect } from 'react';

// Material-ui
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

// Components
import HeroCard from './HeroCard/HeroCard';

// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Heroes = ({ classes }) => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    axios.get('https://gateway.marvel.com:443/v1/public/characters?apikey=c5389db0d89e848d8cef484407cee443&offset=40')
      .then(r => {
        const { results } = r.data.data;
        setHeroes(results);
      })
  }, []);

  return (
    <Grid className={classes.root} container justify="center">
      {heroes.map(hero => (
        <Grid key={hero.id} item style={{ width: 'max-content'}}>
          <HeroCard hero={hero} />
        </Grid>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(Heroes);
