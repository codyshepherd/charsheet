import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function _renderSection(props) {
    return Object.keys(props.sheets).map( (k) => {
        var title = props.sheets[k].title;
        var screen = props.sheets[k].screen;
        return (
        <ListItem button onClick={() => {props.updateSheet(screen)}}>
            <ListItemText primary={title}/>
        </ListItem>
        )
    });
}

function SectionsList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        {_renderSection(props)}
      </List>
    </div>
  );
}

SectionsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SectionsList);