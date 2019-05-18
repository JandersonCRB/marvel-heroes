export default theme => ({
  root: {
    margin: theme.spacing.unit,
    minHeight: 280,
    width: 320,
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  mainContainer: {
    height: 280,
  },
  titleContainer: {
    marginTop: theme.spacing.unit,
    height: 60,
    backgroundColor: 'red',
  },
  titleText: {
    color: '#ffffff',
    fontSize: 20,
  },
});
