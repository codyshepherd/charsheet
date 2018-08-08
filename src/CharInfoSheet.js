import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  titleText: {
    fontFamily: '"MedievalSharp", cursive',
    fontSize: 28
  },
});

function _renderTableRows(props){
    return Object.keys(props.sheets.charInfo.fields).map( (k) => {
        let val = props.sheets.charInfo.fields[k];
        return (
        <TableRow>
          <TableCell>
            {k.charAt(0).toUpperCase() + k.substr(1).toLowerCase()}
          </TableCell>
          <TableCell>
            {val}
          </TableCell>
        </TableRow>
        )
    });
};

function CharInfoSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography style={styles.titleText} variant="headline" component="h3">
          {props.sheets.charInfo.title}
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

CharInfoSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharInfoSheet);
