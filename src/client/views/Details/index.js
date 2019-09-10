import React from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import NotFound from "../../components/NotFound";
import _ from "lodash";
import PropTypes from "prop-types";

/**
   * Details view Component
   * @route '/:id' 
   * recives the state from props and passes the `data` to the
   * Card component to show job details
   */

const index = props => {

  // shows Loading component when the loading state value= `false` 
  if (props.data.loading) {
    return (
      <div data-test="LoadingComponent">
        <Loading />
      </div>
    );
  }

  let viewedJob = _.find(
    props.data.data,
    // eslint-disable-next-line
    job => job.id == props.match.params.id
  );
  
  return (
    <React.Fragment>
      <div data-test="DetailsComponent">
        <Container fixed>
          <div data-test="Card">
            {viewedJob?<Card info={viewedJob} />:<NotFound />}
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

index.propTypes = {
  currentPage: PropTypes.number,
  data: PropTypes.object,
  jobCount: PropTypes.number,
  loading: PropTypes.bool,
  totalPages: PropTypes.number,
  viewed: PropTypes.array
};

function mapStateToProps(state) {
  return {
    data: state.jobs
  };
}

export default connect(mapStateToProps)(index);
