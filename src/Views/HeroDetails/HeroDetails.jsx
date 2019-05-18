import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';

const HeroDetails = ({ hero, onClose }) => (
  <Dialog
    open
    onClose={onClose}
    PaperProps={{
      square: true,
    }}
  >
    <Grid container>
      details
    </Grid>
  </Dialog>
);

export default HeroDetails;
