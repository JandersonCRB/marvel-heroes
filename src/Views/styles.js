import bg from './bg.png';

export default theme => ({
  root: {
    minHeight: '100vh',
    padding: theme.spacing.unit * 2,
    background: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  },
});
