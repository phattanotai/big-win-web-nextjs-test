import React, { useEffect, useState } from "react";
import Link from "next/link";
import LayoutHoc from "../components/Layout/LayoutHoc";
import SlideImages from "../components/SlideImgages";
import banner from "../components/functions/banner";
import fx from "../components/functions/useUser";
import memberService from "../services/member";
import Slider from "react-slick";
import Cookies from "js-cookie";
import env from "../env";
export default function home() {
  let member;
  let gamesArray = [];
  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  });
  const [banners, setBanners] = useState(banner);
  const [loader, setLoader] = useState('block');
  const [mobile, setMoblie] = useState(false);
  const [gameList, setGameList] = useState([]);
  const [gameShow, setGameShow] = useState([]);
  const [gameType, setGameType] = useState(0);
  const [gameSlot, setGameSlot] = useState(null);
  const [slot, setSlot] = useState(false);
  const [memberData, setMemberDate] = useState({
    agent_code: "",
    balance: "",
    id: "",
    mem_username: "",
    token: "",
  });

  const seleteGame = (tyle,name) => {
    if(name === 'Slot'){
      setSlot(true);
    }else{
      setSlot(false);
    }
    setGameSlot(null);
    setGameType(tyle);
    setGameShow(gameList[tyle].data);
  };

  const seleteSlotGame = (tyle) => {
    setGameSlot(tyle);
    setGameShow(gameList[gameType].data[tyle].data);
  };
  const playGame = (g) => {
    const url =  `${env.endpoint_game}/${g.game_brand}/launch/${g.game_code}/${memberData.agent_code}/${memberData.mem_username}`;
    location.replace(url);
  };
  useEffect(async () => {
    setMoblie(window.matchMedia("only screen and (max-width: 760px)").matches);
    if (Boolean(Cookies.get("member"))) {
      member = fx.decode(Cookies.get("member"));
      const checkMobile = window.matchMedia(
        "only screen and (max-width: 760px)"
      ).matches;
      setMemberDate(member);
      setMoblie(checkMobile);
      if (checkMobile) {
        setSettings({
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: checkMobile ? 2 : 3,
          slidesToScroll: checkMobile ? 2 : 3,
        });
      }

      const gamesResult = await memberService.loadgameAll(member.agent_code);
      if (gamesResult.data.status === 2000) {
        for await (const i of gamesResult.data.data[5].gamelist) {
          Object.entries(i).forEach(([key, value]) => {
            let game_name;
            let slot = [];
            if (key === "Hits") {
              game_name = "เกมส์ฮิต";
            } else if (key === "Card") {
              game_name = "เกมส์การ์ด";
            } else if (key === "Slot") {
              game_name = "เกมส์สล็อต";
              for (const l of value){
                Object.entries(l).forEach(([key2, value2]) => {
                  slot.push({
                    name: key2,
                    img: value2.img,
                    data: value2.data,
                  });
                });
              }
            } else if (key === "FishHunter") {
              game_name = "เกมส์ยิงปลา";
            } else if (key === "LiveCasino") {
              game_name = "คาสิโนสด";
            }else if (key === "Livecasino") {
              game_name = "คาสิโนสด";
            } else if (key === "Fish") {
              game_name = "เกมส์ยิงปลา";
            } else if (key === "Arcade") {
              game_name = "เกมส์อาเขต";
            }

            if (key === "Slot") {
              gamesArray.push({
                textTh: game_name,
                textEn: key,
                data: slot,
              });
            } else {
              gamesArray.push({
                textTh: game_name,
                textEn: key,
                data: value,
              });
            }
          });
        }
        setLoader('none');
        console.log(gamesArray)
        setGameList(gamesArray);
        setGameShow(gamesArray[0].data);
      }
    }
  }, []);
  return (
    <LayoutHoc>
      <div id="home">
        <SlideImages imagesArray={banners} nameEl="banners" />
        <div className="contentDiv">
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
                <div id="money">
                  <div
                    className="alert alert-light jp-btn"
                    style={{
                      position: "absolute",
                      paddingTop: 8,
                      paddingBottom: 8,
                      color: "black",
                    }}
                  >
                    {mobile && "sport"}
                    {!mobile && "  sport betting and casio online"}
                  </div>
                  <label
                    style={{
                      top: mobile ? "35%" : "25%",
                      position: "relative",
                      fontSize: mobile ? "30px" : "100px",
                    }}
                  >
                    1,000,000 $
                  </label>
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
                <Link href="/games">
                    GAMES
                </Link>
               
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
        <div className="games-container">
          <div className="loader" style={{display: loader}}></div>
          <div className="game-menu">
            <Slider {...settings}>
              {gameList.map((b, index) => {
                if(b.textTh){
                  return (
                    <div key={index}>
                      <li
                        className="nav-item"
                        onClick={() => {
                          seleteGame(index,b.textEn);
                        }}
                      >
                        <a className="nav-link">
                          {b.textTh}
                        </a>
                      </li>
                    </div>
                  );
                }
              })}
            </Slider>
          </div>
          <div className="row">
            {gameShow.map((b, index) => {
              if (!slot) {
                return (
                  <div className="col-sm-2 col-6" key={b._id}>
                    <div className="img-container">
                      <img
                        src={`${env.endpoint_img}/${b.game_img}`}
                        alt={b.game_brand}
                        name={b.game_name}
                        className="image"
                        style={{ objectFit: "contain", marginTop: 30 }}
                      />
                      <div className="middle">
                        <div className="game-text">{b.game_name}</div>
                        <button
                          className="game-btn btn btn-info   w3-round-xxlarge"
                          onClick={() => {
                            playGame(b);
                          }}
                        >
                          เล่น
                        </button>
                      </div>
                    </div>
                  </div>
                );
              } else {   
                if (gameSlot !== null) {
                  return (
                    <div className="col-sm-2 col-6" key={b._id}>
                      <div className="img-container">
                        <img
                          src={`${env.endpoint_img}/${b.game_img}`}
                          alt={b.game_brand}
                          name={b.game_name}
                          className="image"
                          style={{ objectFit: "contain", marginTop: 30 }}
                        />
                        <div className="middle">
                          <div className="game-text">{b.game_name}</div>
                          <button
                            className="game-btn btn btn-info   w3-round-xxlarge"
                            onClick={() => {
                              playGame(b);
                            }}
                          >
                            เล่น
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="col-sm-2 col-6" key={index}>
                      <div className="img-container">
                        <img
                          src={`${env.endpoint_img}/${b.img}`}
                          alt={b.img}
                          name={b.img}
                          className="image"
                          style={{ objectFit: "contain", marginTop: 30 }}
                        />
                        <div className="middle">
                          <div className="game-text">{b.name}</div>
                          <button
                            className="game-btn btn btn-info   w3-round-xxlarge"
                            onClick={() => {
                              seleteSlotGame(index);
                            }}
                          >
                            เลือก
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
              }
            })}
          </div>
        </div>
      </div>
    </LayoutHoc>
  );
}
