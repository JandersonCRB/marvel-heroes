export default theme => ({
  root: {
    minWidth: '90vw',
    minHeight: '80vh',
  },
  titleContainer: {
    height: 60,
    backgroundColor: 'red',
  },
  titleText: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  firstRow: {
    padding: "10px 20px",
  },
  descContainer: {
    padding: "0 10px",
  },
  imgContainer: {
    width: 300,
    height: 300,
    borderRadius: 10,
    overflow: 'hidden',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  boxesContainer: {
    padding: theme.spacing.unit,
  },
  boxRoot: {
    backgroundColor: '#C4C4C4',
    margin: theme.spacing.unit,
  },
});