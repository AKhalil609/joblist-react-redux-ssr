import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import Loading from "../Loading";
import { changePage } from "../../../actions/jobActions";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const useStyles = makeStyles(theme => ({
  paper: {
    maxWidth: 520,
    margin: "auto",
    overflow: "hidden"
  },
  root: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "6px",
    boxShadow: "0 2px 0 rgba(90,97,105,.11), 0 4px 8px rgba(90,97,105,.12), 0 10px 10px rgba(90,97,105,.06), 0 7px 70px rgba(90,97,105,.1)",
  },
  inline: {
    display: "inline"
  },
  rightEnd: {
    display: "contents"
  },
  test: {
    color: "#FF6D59"
  },
  progress: {
    position: "absolute",
    top: "4px",
    left: " 12px"
  },
  listTitle: {
    display: "flex",
    marginTop: "10px"
  },
  links: {
    textDecoration: "none",
    color:"black",
    '& li:hover':{
      backgroundColor: '#d0d0d0',
    }
  },

}));

  /**
 * Takes the list of jobs from the `viewed` state element as props and returns a list of jobs
 * @param {object} props - amazon reviews provided from the api.
 */

function AlignItemsList(props) {
  const classes = useStyles();
  let { loading, viewed } = props.jobData;
  
  if (loading) {
    return <Loading />;
  }
  return (
    <List data-test="tableComponent" className={classes.root} >
      {viewed.map((job, index) => {
        return (
          <Link
          className={classes.links}
          key={index}
          to={`/${job.id}`}
          details = {job}
        >
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={job.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {job.employment_type.toUpperCase()}
                    </Typography>
                    {`__${job.description.slice(0, 50)}...`}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            </Link>
        );
      })}
    </List>
  );
}

AlignItemsList.propTypes = {
    currentPage: PropTypes.number,
    data: PropTypes.object,
    jobCount: PropTypes.number,
    loading: PropTypes.bool,
    totalPages: PropTypes.number,
    viewed: PropTypes.array
  };

function mapStateToProps(state) {
  return {
    data: state.results
  };
}

export default connect(mapStateToProps,{changePage})(AlignItemsList);
