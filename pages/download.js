import LayoutHoc from "../components/Layout/LayoutHoc";
import React, { useEffect, useState } from "react";

export default function download() {
  const [mobile, setMoblie] = useState(false);
  useEffect(async () => {
    setMoblie(window.matchMedia("only screen and (max-width: 760px)").matches);
  }, []);
  return (
    <LayoutHoc>
      <div id="download">
        <div
          className="slideshow-container"
          style={{ maxWidth: "100%", minHeight: "50vh", margin: 0 }}
        >
          <div>
            <img
              src="./images/1263@2x.png"
              style={{ maxWidth: "100%", minHeight: "50vh", margin: 0 }}
            />
          </div>
          <div className="loadapp">
            <label>DOWNLOAD OUR APP</label>
            <div style={{ textAlign: mobile? '' : "right" }}>
              <img className="imgLoad" src="./images/google-play-badge-2.png" />
              <img className="imgLoad" src="./images/unnamed (-1@2x.png" />
            </div>
          </div>
        </div>
        <div className="jeckpotDiv">
          <div className="row">
            <div className="col-6" style={{ textAlign: "center" }}>
              <div style={{ marginTop: 120 }}>
                <img className="qrLoad" src="./images/Image 8@2x.png" />
              </div>
              <div style={{ marginTop: 50 }}>
                <img className="imgLoad" src="./images/google-play-badge-2.png" />
              </div>
            </div>
            <div className="col-6" style={{ textAlign: "center" }}>
              <div style={{ marginTop: 120 }}>
                <img className="qrLoad" src="./images/Image 8@2x.png" />
              </div>
              <div style={{ marginTop: 50 }}>
                <img className="imgLoad" src="./images/unnamed (-1@2x.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutHoc>
  );
}
