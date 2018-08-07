import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { Str } from './ADD2';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: 400,
    overflow: 'auto',
  },
});

function _renderRow(fields) {
  return Object.keys(fields).map( (k) => {
    let val = fields[k];
    if (k == "score"){
      return (
      <TableCell>
        <Typography variant="body2">
          {val}
        </Typography>
      </TableCell>
      )
    }
    return (
      <TableCell>
        <Typography variant="body1">
          {k}
        </Typography>
        <Typography variant="body1">
          {val}
        </Typography>
      </TableCell>
    )
  });
};

function _renderTableRows(props) {
  return Object.keys(props.sheets.stats.fields).map( (k) => {
    let val = props.sheets.stats.fields[k];
    return (
    <TableRow>
      <TableCell>
        <Typography variant="display1">
          {k.toUpperCase()}
        </Typography>
      </TableCell>
        {_renderRow(val)}
    </TableRow>
    )
  });
};

function StatsSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          {props.sheets.stats.title}
        </Typography>
        <Typography component="p">
          This will hold stats info.
        </Typography>
        <Table className={classes.table}>
          <TableBody>
            {_renderTableRows(props)}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

StatsSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatsSheet);