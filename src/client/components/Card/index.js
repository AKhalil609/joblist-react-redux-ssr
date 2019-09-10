import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginTop: "5%"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  link: {
    textDecoration: "none",
    backgroundColor: "#77ADED",
    borderRadius: "7px",

  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const { info } = props;

  return (
    <Card className={classes.card} >
      <CardContent data-test="CardComponent">
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {info ? info.employment_type.toUpperCase() : ""}
        </Typography>
        <Typography variant="h5" component="h2">
          {info ? info.title :""}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Description
        </Typography>
        <Typography variant="body2" component="p">
          {info ? info.description :""}
        </Typography>
      </CardContent>
      <CardActions>
      <Link
          to={`/`}
          className={classes.link}
        >
        <div data-test="Button">
          <Button size="small" >Return</Button>

        </div>
        </Link>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  title: PropTypes.string,
  employment_type: PropTypes.string,
  description: PropTypes.string,
};