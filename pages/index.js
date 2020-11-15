import LayoutHoc from "../components/Layout/LayoutHoc";

export default function Home() {
  return (
    <LayoutHoc>
      <div>
        <img
          src="./images/BIGWIN3.png"
          style={{ maxWidth: "100%", minHeight: "100%", margin: 0 }}
        />
      </div>
      <div className="jeckpotDiv" style={{ paddingBottom: "60px" }}>
        <div className="row" >
          <div className="col-sm-12">
            <div id="jeckpot">
              <label>JACKPOT</label>
            </div>
          </div>
        </div>
        <div className="row" style={{paddingLeft: '10%',paddingRight: '10%',marginBottom: 50}} >
          {/* <div className="col-sm-12" >
            <div id="money" >
            <button type="button" className="btn btn-light jp-btn" style={{position: 'absolute'}}>
              sport betting and casio online
            </button>
              <label>1,000,000 $</label>
            </div>
          </div> */}
           <div className="col-sm-12">
            <img src="./images/Group 4.png" width="100%" height="200" />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <button type="button" className="btn btn-light">
              SPORT
            </button>
            <img src="./images/soccer-team-png-16.png" width="90%" height="250px" className="jp-img" />
          </div>

          <div className="col-sm-4">
            <button type="button" className="btn btn-light ">
              CASINO
            </button>
            <img src="./images/girl-casino.png" width="90%" height="250px" className="jp-img" />
          </div>
          <div className="col-sm-4">
            <button type="button" className="btn btn-light">
              GAMES
            </button>
            <img src="./images/casino-mobile-platform.png" width="90%" height="250px" className="jp-img"/>
          </div>
        </div>
      </div>
    </LayoutHoc>
  );
}
