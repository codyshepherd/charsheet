import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function Portrait(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/beh.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.sheets.charInfo.fields.name}
          </Typography>
          <Typography component="p">
            Maybe we can link this section up to a brief character description somewhere.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary">
            Edit
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

Portrait.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portrait);
