import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import LayoutHoc from "../components/Layout/LayoutHoc";
import Router, { useRouter } from "next/router";
import fx from "../components/functions/useUser";
import memberService from "../services/member";
import Slider from "react-slick";
import env from "../env";
import Games from "../components/Games";

export default function games() {
  const [mobile, setMoblie] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const checkMobile = window.matchMedia(
        "only screen and (max-width: 760px)"
      ).matches;
      setMoblie(checkMobile);

    }
    fetchData();
  }, []);

  
  return (
    <LayoutHoc>
      <div id="games">
        <div
          className="slideshow-container"
          style={{
            maxWidth: "100%",
            minHeight: mobile ? "25vh" : "50vh",
            margin: 0,
          }}
        >
          <div>
            <img
              src="./images/3846574@2x.png"
              style={{
                maxWidth: "100%",
                minHeight: mobile ? "25vh" : "50vh",
                margin: 0,
              }}
            />
          </div>
          <div className="loadapp">
            <label>DOWNLOAD OUR APP</label>
            <div style={{ textAlign: mobile ? "" : "right" }}>
              <img className="imgLoad" src="./images/google-play-badge-2.png" />
              <img className="imgLoad" src="./images/unnamed (-1@2x.png" />
              {/* <img
                src="./images/slot-2@2x.png"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100vh",
                  margin: 0,
                  position: "absolute",
                  top: "0px",
                  left: "250%",
                  display: mobile ? "none" : "flex",
                }}
              /> */}
            </div>
          </div>
        </div>
        <Games/>
      </div>
    </LayoutHoc>
  );
}
