import React from "react";
import mark from "../images/icons/gps.png";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import mapboxgl from "!mapbox-gl";
// import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";

// mapboxgl.workerClass = MapboxWorker;
const Map = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 13.5568675,
    longitude: 78.4862495,
    width: "100vw",
    height: "80vh",
    zoom: 12,
  });
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2
        style={{
          color: "white",
          marginBottom: "5rem",
          display: "block",
          fontWeight: "700",
        }}
      >
        OUR <span style={{ color: "#00ffffdf" }}>LOCATION</span>
      </h2>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1Ijoia29zdXJpIiwiYSI6ImNsa2U3NjlmNzAxMm8zZG9kd3RyaWhiMDUifQ.mjzR1O78DHj0tpd6ChNMaA"
        onViewportChange={(viewport) => setViewport(viewport)}
        mapStyle={"mapbox://styles/mapbox/navigation-night-v1"}
      >
        <Marker latitude={13.5568675} longitude={78.4862495}>
          <div className="marker">
          
            <a
              href="https://www.google.com/maps/@13.5697642,78.4762071,17z?entry=ttu"
              target="_blank"
            >
              <img
                src={mark}
                alt="Our Location"
                style={{ height: "50px", width: "48px" }}
              />
            </a>
          </div>
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Map;
