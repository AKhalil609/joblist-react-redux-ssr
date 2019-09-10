import React, { Component } from "react";
import Home from "./client/views/Home";
import Details from "./client/views/Details";
import Header from "./client/components/Header";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchJobs } from "./actions/jobActions";
import styled from "styled-components";

// Styled Component
const Body = styled.div`
  background-color: #eaeaea;
  height: 100vh;
`;

 /**
 * App is a Class Component that includes the defined routes
 */

export class App extends Component {
   /**
   * life cycle method runs `fetchJobs`
   */
  async componentDidMount() {
    await this.props.fetchJobs();
  }
  render() {
    return (
      <Body className="headerComponent" data-test="appComponent">
        <Header data-test="Head"/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={Details} />
        </Switch>
      </Body>
    );
  }
}

const mapStateToProps = state => ({
  data: state
});

export default connect(
  mapStateToProps,
  { fetchJobs }
)(App);
