import React, { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { getData } from "../redux/actions";
import "./assets/App.css";

const App = ({ getData }) => {
  useEffect(() => {
    getData();
  }, []);

  return <div>Test</div>;
};

const mapStateToProps = state => ({
  data: state.blocks.data
});

const mapDispatchToProps = {
  getData: getData.processing
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
