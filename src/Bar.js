import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Avatar, TextField, DialogActions } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
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
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

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
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <Avatar className={classes.avatar}>
                    <AddAPhotoIcon/>
                  </Avatar>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Portrait</MenuItem>
                  <MenuItem onClick={this.handleClose}>Options</MenuItem>
                </Menu>
              </div>
            )}
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