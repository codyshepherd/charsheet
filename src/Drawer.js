import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import SectionsList from './List';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 800,
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
  paper: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  card: {
    flexGrow: 1,
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

function checkEdit(props) {
  if (props.isEditing){
    return (React.cloneElement(props.activeEditScreen, {
      sheets: props.sheets, 
      updateCharInfoField: props.updateCharInfoField, 
      toggleEdit: props.toggleEdit
    }));
  } else {
    //return (React.cloneElement(props.activeScreen, {sheets: props.sheets, updateCharInfoField: props.updateCharInfoField}));
    return (React.cloneElement(props.activeScreen, {sheets: props.sheets})); 
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
        <Paper className={classes.paper}>
          <List style={{display: 'flex', flexDirection: 'row'}}>
            <ListItem style={{display: 'block'}}>
              <Typography variant="display2">
                {props.sheets.charInfo.fields.name}
              </Typography>
              <Typography variant="display1">
                {props.sheets.charInfo.fields.class}
              </Typography>
              <Typography variant="display1">
                {props.sheets.charInfo.fields.race}
              </Typography>
              <Typography variant="display1">
                {props.sheets.charInfo.fields.alignment}
              </Typography>
            </ListItem>
            <ListItem>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image=""
                  title="Contemplative Reptile"
                />
              </Card>
            </ListItem>
          </List>
        </Paper>
          { checkEdit(props) } 
      </main>
    </div>
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);