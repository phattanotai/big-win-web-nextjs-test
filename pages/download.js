import LayoutHoc from "../components/Layout/LayoutHoc";
import { useEffect, useState } from "react";

export default function download() {
  const [mobile, setMoblie] = useState(false);
  useEffect(() => {
    setMoblie(window.matchMedia("only screen and (max-width: 760px)").matches);
  }, []);
  return (
    <LayoutHoc>
      <div id="download">
        <div
          className="slideshow-container"
          style={{ maxWidth: "100%", minHeight: mobile? "25vh" : "50vh", margin: 0 }}
        >
          <div>
            <img
              src="./images/1263@2x.png"
              style={{ maxWidth: "100%", minHeight: mobile? "25vh" : "50vh", margin: 0 }}
            />
          </div>
          <div className="loadapp">
            <label>DOWNLOAD OUR APP</label>
            <div style={{ textAlign: mobile? 'left' : "right" }}>
              <img className="imgLoad" src="./images/google-play-badge-1@2x.png" />
              <img className="imgLoad" src="./images/unnamed (-1@2x.png" />
            </div>
          </div>
        </div>
        <div className="downloadDiv">
        <div className="bg-image"></div>
          <div className="row" style={{ paddingTop: mobile? 70 : 120 }}>
            <div className="col-6" style={{ textAlign: "center",borderRight: "3px solid rgb(250, 209, 107)", }}>
              <div >
                <img className="qrLoad" src="./images/Image 8@2x.png" />
              </div>
              <div style={{ marginTop: 50 }}>
                <img className="imgLoad" src="./images/google-play-badge-1@2x.png" />
              </div>
            </div>
            <div className="col-6" style={{ textAlign: "center" }}>
              <div >
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
