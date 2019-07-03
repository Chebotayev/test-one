import React, { useEffect, useRef, Fragment } from "react";
import { connect } from "react-redux";
import { getData, addCoordinates } from "../redux/actions";
import Arrow from "./Arrow";
import "./assets/App.css";

const App = ({
  getData,
  addCoordinates,
  data,
  btcCoordinates,
  mainCoordinates
}) => {
  const btc = {};
  const main = {};

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (btc && main) addCoordinates({ btc, main });
  }, [data]);

  if(btcCoordinates["11"]) console.log(btcCoordinates["11"])

  return (
    <div>
      <div className="wrapper">
        {data.btc.map(({ id }) => (
          <div
            ref={ref => {
              if (ref !== null)
                return (btc[id] = ref.getBoundingClientRect());
            }}
            className="top"
            key={id}
          >
            <div>BTC</div>
            <div>{id}</div>
          </div>
        ))}
      </div>
      <div className="wrapper">
        {data.main.map(({ id, verifiedIn }) => (
          <Fragment key={id}>
            <div
              ref={ref => {
                if (ref !== null)
                  return (main[id] = ref.getBoundingClientRect());
              }}
              className="bottom"
            >
              {id}
            </div>
            {verifiedIn && btcCoordinates[verifiedIn] && mainCoordinates[id] && (
              <Arrow
                xStart={mainCoordinates[id].x}
                xEnd={btcCoordinates[verifiedIn].x}
                yStart={mainCoordinates[id].y}
                yEnd={btcCoordinates[verifiedIn].y}
              />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.blocks.data,
  btcCoordinates: state.blocks.coordinates.btc,
  mainCoordinates: state.blocks.coordinates.main
});

const mapDispatchToProps = {
  getData: getData.processing,
  addCoordinates
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
