import React from "react";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import TableList from "../../components/TableList";
import Button from "@material-ui/core/Button";
import { changePage } from "../../../actions/jobActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function index(props) {
  const Content = styled.div`
    margin: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;

    ul {
      margin-top: inherit;
    }
  `;

  const Buttons = styled.div`
    margin-top: 2vh;
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: space-around;

    button {
      width: 110px;
    }
  `;

  /**
   * Home Component
   * @route '/' 
   * recives the state from props and passes the `data` to the
   * TableList component to list the data in a table
   */

  return (
    <Content data-test="HomeComponent">
      <Typography data-test="header" variant="h5" component="h3">
        Our Open Positions
      </Typography>
      <TableList data-test="Table" jobData={props.data} />
      <Buttons data-test="Buttons">
        <Button
          variant="contained"
          color="secondary"
          onClick={() =>
            props.changePage(-1, props.data.currentPage, props.data.data)
          }
          disabled={props.data.currentPage === 0}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            props.changePage(1, props.data.currentPage, props.data.data)
          }
          disabled={props.data.currentPage === props.data.totalPages - 1}
        >
          Next
        </Button>
      </Buttons>
    </Content>
  );
}

index.propTypes = {
  currentPage: PropTypes.number,
  data: PropTypes.object,
  jobCount: PropTypes.number,
  loading: PropTypes.bool,
  totalPages: PropTypes.number,
  viewed: PropTypes.array,
  changePage: PropTypes.func
};

function mapStateToProps(state) {
  return {
    data: state.jobs
  };
}

export default connect(
  mapStateToProps,
  { changePage }
)(index);
