import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import SectionsList from './List';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

function checkEdit(props) {
  if (props.isEditing){
    return (React.cloneElement(props.activeEditScreen, {
      sheets: props.sheets, 
      updateCharInfoField: props.updateCharInfoField, 
      toggleEdit: props.toggleEdit
    }));
  } else {
    //return (React.cloneElement(props.activeScreen, {sheets: props.sheets, updateCharInfoField: props.updateCharInfoField})); /* Necessary for adding props to component passed in as a prop*/
    return (React.cloneElement(props.activeScreen, {sheets: props.sheets})); /* Necessary for adding props to component passed in as a prop*/
  }
};

function ClippedDrawer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <SectionsList 
            sheets={props.sheets}
            updateSheet={props.updateSheet}
        />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          { checkEdit(props) } 
      </main>
    </div>
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);