import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: 400,
    overflow: 'auto',
  },
  title: {
    paddingBottom: theme.spacing.unit * 2,
  }
});

class StatsSheet extends React.Component {
  state = {
    first: false,
  }

  // fields: a dict of substats with first key "score"
  renderRow = (fields) => {
    let score = fields["score"][1];
    var i = 0;
    return Object.keys(fields).map( (k) => {  // k should be a dict key
      let tag = fields[k][0]
      let val = fields[k][1];
      if (k === "score"){
        return (
        <TableCell>
          {/*
          <Typography variant="body2" style={{fontWeight: "bold", fontSize: 20}}>
            {(val==="") ? "0" : val}
          </Typography>
          */}
          <Button variant="fab" color="secondary" disableRipple disableFocusRipple>
            <Typography style={{fontWeight: "bold", fontSize: 20, color: "white"}}>
              {(val==="") ? "0" : val}
            </Typography>
          </Button>
        </TableCell>
        )
      }
      return (
        <TableCell>
          <Typography variant="body1" style={{fontWeight: "bold"}}>
            {tag}
          </Typography>
          <Typography variant="body1">
            {(val==="") ? "0" : val}
          </Typography>
        </TableCell>
      )
    });
  };

  renderTableRows = () => {
    return Object.keys(this.props.sheets.stats.fields).map( (k) => { // k should be one of Str, Dex, Int, etc
      let val = this.props.sheets.stats.fields[k];  // val should be a dict of substats beginning with "score"
      return (
      <TableRow>
        <TableCell>
          <Typography variant="headline">
            {k.toUpperCase()}
          </Typography>
        </TableCell>
          {this.renderRow(val)}
      </TableRow>
      )
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            {this.props.sheets.stats.title}
          </Typography>
          <Typography className={classes.title} variant="subheading" component="p">
            Character ability stats and substats.
          </Typography>
          <Table className={classes.table}>
            <TableBody>
              {this.renderTableRows()}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

StatsSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatsSheet);
