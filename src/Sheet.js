import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Sheet extends React.Component {
  handleNameChange = event => {
    this.props.updateCharInfoField("name", event.target.value);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={3}>
            {this.props.isEditing &&
             <TextField
             id="name"
             label="Name"
             value={this.props.name}
             colors="inherit"
             className={classes.textField}
             onChange={this.handleNameChange}
             margin="normal"
             />
            }
          </Grid>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={6}>
          </Grid>

        {/*
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
         */}

        </Grid>
      </div>
    );
  }
}

Sheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sheet);
