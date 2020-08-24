import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
//import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import {
  red
} from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className = {classes.root} >
    <CardHeader 
      title = "Shrimp and Chorizo Paella"
      subheader = "September 14, 2016" />
    <CardMedia className = {classes.media}
      // image = "https://firebasestorage.googleapis.com/v0/b/image-460d4.appspot.com/o/images%2F1.jpg?alt=media&token=53687e29-aa24-4a83-b1d0-e49f6765d2a7"
      image = {props.url}
      title = "Paella dish" />
    </Card>
  );
}