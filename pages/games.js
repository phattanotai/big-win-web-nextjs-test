import Link from "next/link";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import LayoutHoc from "../components/Layout/LayoutHoc";
import Router, { useRouter } from "next/router";
import fx from "../components/functions/useUser";
import memberService from "../services/member";
import Slider from "react-slick";
import env from "../env";

export default function games() {
  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  });
  let member;
  let gamesArray = [];
  const router = useRouter();
  const [mobile, setMoblie] = useState(false);
  const [loader, setLoader] = useState('block');
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

  useEffect(async () => {
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
        setGameList(gamesArray);
        console.log(gamesArray)
        setGameShow(gamesArray[0].data);
      }
    }
  }, []);

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
    console.log(url)
    location.replace(url);
  };
  return (
    <LayoutHoc>
      <div id="games">
        <div
          className="slideshow-container"
          style={{ maxWidth: "100%", minHeight: "50vh", margin: 0 }}
        >
          <div>
            <img
              src="./images/3846574@2x.png"
              style={{ maxWidth: "100%", minHeight: "50vh", margin: 0 }}
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

        <div className="games-container">
          <div className="loader" style={{display: loader}}></div>
          <div className="game-menu">
            <Slider {...settings}>
              {gameList.map((b, index) => {
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
