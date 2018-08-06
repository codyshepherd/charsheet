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
        //return <ListItem primaryText={props.sheets[k].title}/>;
        return (
        <ListItem button>
            <ListItemText primary={props.sheets[k].title}/>
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