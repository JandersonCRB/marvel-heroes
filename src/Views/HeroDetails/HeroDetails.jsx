import React from 'react';

// Material-ui
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const HeroDetails = ({ classes, hero, onClose }) => (
  <Dialog
    open
    onClose={onClose}
    PaperProps={{
      square: true,
      component: Grid,
      className: classes.root,
    }}
  >
    <Grid className={classes.titleContainer} container justify="center" alignItems="center">
      <Typography className={classes.titleText}>
        {hero.name}
      </Typography>
    </Grid>
    <Grid className={classes.firstRow} container>
      <Grid className={classes.imgContainer} item>
        <img src={hero.thumbnail} alt={hero.name} width="100%" height="100%" />
      </Grid>
      <Grid className={classes.descContainer} item xs container wrap="nowrap">
        <Typography>
          <b>{'Description:'}</b>
        </Typography>
        <Typography>
          {hero.description || 'This hero has no description.'}
        </Typography>
      </Grid>
    </Grid>
    <Grid className={classes.boxesContainer} container>
      <Grid item xs={12} sm={6}>
        <Box classes={classes} title="Comics" content={hero.comics} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box classes={classes} title="Series" content={hero.series} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box classes={classes} title="Stories" content={hero.stories} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box classes={classes} title="Events" content={hero.events} />
      </Grid>
    </Grid>
  </Dialog>
);

const Box = ({ classes, title, content }) => (
  <Grid className={classes.boxRoot}>
    <List
      component="nav"
      subheader={<ListSubheader component="div">{title}</ListSubheader>}
      // className={classes.root}
    >
      <Divider />
      {content.map(text => (
        <ListItem key={text}>
          <ListItemText inset primary={text} />
        </ListItem>
      ))}
    </List>
  </Grid>
);

export default withStyles(styles)(HeroDetails);
