import React from 'react';

// Material-ui
import Grid from '@material-ui/core/Grid';

// Components
import HeroCard from './HeroCard/HeroCard';
import HeroDetails from './HeroDetails/HeroDetails';

// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

// Others
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as HeroesActions from '../store/actions';

class Heroes extends React.Component {

  componentDidMount() {
    const { fetchMore } = this.props;
    let offset = 0;
    // Fetch the first 20 characters
    fetchMore(offset);
    window.addEventListener('scroll', function() {
      // Add a listener that is called when user reaches the end of page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        offset += 20;
        fetchMore(offset);
      }
    });
  }

  openDetails = (id) => {
    const { selectCharacter } = this.props;
    selectCharacter(id);
  }
  
  closeDetails = () => {
    const { selectCharacter } = this.props;
    selectCharacter(null);
  }

  render() {
    const { classes, heroes, selectedHero } = this.props;

    return (
      <Grid className={classes.root} container justify="center">
        {selectedHero && <HeroDetails hero={selectedHero} onClose={this.closeDetails} />}
        {heroes.map(hero => (
          <Grid key={hero.id} item style={{ width: 'max-content'}}>
            <HeroCard hero={hero} clicked={this.openDetails}/>
          </Grid>
        ))}
      </Grid>
    );
  }
} 


const mapStateToProps = state => ({
  heroes: state.heroes.characters,
  selectedHero: state.heroes.selectedCharacter,
});

const mapDispatchToProps = dispatch => bindActionCreators(HeroesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Heroes));
