import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function _renderEditRows(props) {
    return Object.keys(props.sheets.charInfo.fields).map( (k) => {
        let val = props.sheets.charInfo.fields[k];
        return (
        <TableRow>
          <TableCell>
            {k.charAt(0).toUpperCase() + k.substr(1).toLowerCase()}
          </TableCell>
          <TableCell>
              val
            {/*
            <TextField>
                value={val}
            </TextField>
            */}
          </TableCell>
        </TableRow>
        )
    });
};

function EditCharInfoSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          {props.sheets.charInfo.title}
        </Typography>
        <Table className={classes.table}>
          <TableBody>
            {_renderEditRows(props)}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

EditCharInfoSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditCharInfoSheet);