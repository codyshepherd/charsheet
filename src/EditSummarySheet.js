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
import Button from '@material-ui/core/Button';

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

class EditSummarySheet extends React.Component {

    _renderTableRows(props){
        return Object.keys(props.sheets.charInfo.fields).map( (k) => {
            let cval = props.sheets.charInfo.fields[k];
            return (
            <TableRow>
              <TableCell>
                {k.charAt(0).toUpperCase() + k.substr(1).toLowerCase()}
              </TableCell>
              <TableCell>
                {cval}
              </TableCell>
            </TableRow>
            )
        });
    };

    componentWillUnmount() {
      if (this.bufferSaved) { this.props.saveCharacter(); }
      this.bufferSaved = false;
    }

  render() {
    const { classes } = this.props;
    return (
        <div>
        <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
                {this.props.sheets.summary.title}
            </Typography>
            <Table className={classes.table}>
            <TableBody>
                {this._renderTableRows(this.props)}
            </TableBody>
            </Table>
            <Typography variant="headline" component="h4" color="secondary">
                The summary is just a roll-up. Please edit information
                via respective sheets
            </Typography>
        </Paper>
        </div>
    );
  }
}

EditSummarySheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditSummarySheet);

