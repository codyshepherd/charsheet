import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { TextField, DialogActions } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    open: false
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClickOpen = () => {
    this.setState({open: true});
  };

  handleDialogClose = () => {
      this.setState({open: false});
  };

  handleUpdate = (e) => {
      this.props.nameChange(e.target.value);
  };

  detectEnterKey = (e) => {
      if(e.keyCode === 13){
          this.handleDialogClose();
      }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {this.props.charName}
            </Typography>
            <IconButton 
                className={classes.button} 
                aria-label="Edit"
                color="inherit"
                onClick={this.handleClickOpen}
            >
                <EditIcon />
            </IconButton>
            <Dialog
                open={this.state.open}
                onClose={this.handleDialogClose}
                onKeyDown={this.detectEnterKey}
            >
                <DialogContent>
                    <TextField 
                        value={this.props.charName}
                        onChange={this.handleUpdate}
                        autoFocus={true}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleDialogClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleDialogClose} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);