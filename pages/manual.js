import LayoutHoc from "../components/Layout/LayoutHoc";
import React, { useEffect, useState } from "react";

export default function manual() {
  const [mobile, setMoblie] = useState(false);
  useEffect(async () => {
    setMoblie(window.matchMedia("only screen and (max-width: 760px)").matches);
  }, []);
  return (
    <LayoutHoc>
      <div id="manual">
        <div className="jeckpotDiv">
          <div className="row">
            <div className="col-12">
              <div className="manualHeader">
                <label>คู่มือ</label>
              </div>
            </div>
            <div
              className="col-6"
              style={{
                textAlign: "center",
                borderRight: "3px solid rgb(250, 209, 107)",
              }}
            >
              <div className="manualText w3-card-4">
                <label>คู่มือการติดตั้ง</label>
              </div>
              <div style={{ marginTop: 20 }}>
                <img className="qrLoad" src="./images/Image 8@2x.png" />
              </div>
              <div style={{ marginTop: 50 }}>
                <img className="imgLoad" src="./images/google-play-badge-2.png" />
              </div>
            </div>
            <div className="col-6" style={{ textAlign: "center" }}>
            <div className="manualText w3-card-4">
                <label>คู่มือการติดตั้ง</label>
              </div>
              <div style={{ marginTop: 20 }}>
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
