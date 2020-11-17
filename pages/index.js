import LayoutHoc from "../components/Layout/LayoutHoc";
import React, { useEffect, useState } from "react";
import banner from "../components/functions/banner";
import SlideImages from "../components/SlideImgages";


export default function Home() {
  const [banners, setBanners] = useState(banner);
  const [mobile, setMoblie] = useState(false);
  useEffect(() => {
    setMoblie(window.matchMedia("only screen and (max-width: 760px)").matches);
  }, []);
  return (
    <LayoutHoc>
      <SlideImages imagesArray={banners} nameEl='banners'/>
      <div className="contentDiv" >
        <div className="jeckpotDiv">
          <div className="row">
            <div className="col-sm-12">
              <div id="jeckpot">
                <label>JACKPOT</label>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{
              marginBottom: 50,
              marginTop: 50,
            }}
          >
            <div className="col-sm-12">
              <div id="money" >
                <div 
                  className="alert alert-light jp-btn"
                  style={{ position: "absolute", paddingTop: 8,paddingBottom: 8,color: 'black'}}
                >
                  {mobile && "sport"}
                  {!mobile && "  sport betting and casio online"}
                </div>
                <label style={{'top': mobile ?'35%' : '25%',position: 'relative',fontSize: mobile ? "30px" : "100px"}}>1,000,000 $</label>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <button type="button" className="btn btn-light">
              SPORT
            </button>
            <img
              src="./images/soccer-team-png-16.png"
              width="90%"
              height="250px"
              className="jp-img"
            />
          </div>

          <div className="col-sm-4">
            <button type="button" className="btn btn-light ">
              CASINO
            </button>
            <img
              src="./images/girl-casino.png"
              width="90%"
              height="250px"
              className="jp-img"
            />
          </div>
          <div className="col-sm-4">
            <button type="button" className="btn btn-light">
              GAMES
            </button>
            <img
              src="./images/casino-mobile-platform.png"
              width="90%"
              height="250px"
              className="jp-img"
            />
          </div>
        </div>
      </div>
    </LayoutHoc>
  );
}
