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

class EditCharInfoSheet extends React.Component {
    state = {
        fieldBuffer : {},
        bufferSaved : false
    }

    constructor(props) {
        super(props);

       this.saveBuffers = this.saveBuffers.bind(this);
       this.updateFieldBuffer = this.updateFieldBuffer.bind(this);
       //this.renderEditRows = this.renderEditRows.bind(this);
    };

    saveBuffers() {
        for(let k in this.state.fieldBuffer) {
            this.props.updateCharInfoField(k, this.state.fieldBuffer[k]);
        }
        this.bufferSaved = true;
        this.props.toggleEdit();
    };

    updateFieldBuffer(k, v) {
        this.setState(prev => ({ 
            ...prev,
            fieldBuffer: {
                ...prev.fieldBuffer,
                [k]: v
            }})
        );
    }

    renderEditRows() {
        //return Object.keys(this.state.fieldBuffer).map( (k) => {
        return Object.keys(this.props.sheets.charInfo.fields).map( (k) => {
            let val = this.props.sheets.charInfo.fields[k];
            return (
            <TableRow>
              <TableCell>
                {k.charAt(0).toUpperCase() + k.substr(1).toLowerCase()}
              </TableCell>
              <TableCell>
                <TextField
                    id={k}
                    defaultValue={val}
                    //onChange={(e) => {props.updateCharInfoField(k, e.target.value)}}
                    onChange={(e) => {this.updateFieldBuffer(k, e.target.value)}}
                />
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
                {this.props.sheets.charInfo.title}
            </Typography>
            <Table className={classes.table}>
            <TableBody>
                {this.renderEditRows()}
            </TableBody>
            </Table>
            <Button color="secondary" onClick={this.props.toggleEdit}>
                Cancel
            </Button>
            <Button color="secondary" onClick={this.saveBuffers}>
                Save
            </Button>
        </Paper>
        </div>
    );
  }
}

EditCharInfoSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditCharInfoSheet);

