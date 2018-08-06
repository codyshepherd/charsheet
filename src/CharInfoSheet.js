import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function EditCharInfoSheet(props){};

function CharInfoSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          {props.sheets.charInfo.fields.charName}
        </Typography>
        <Typography component="p">
          This will hold character info.
        </Typography>
      </Paper>
    </div>
  );
}

CharInfoSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharInfoSheet);