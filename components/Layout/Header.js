import Link from "next/link";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Header.module.css";
import LoginModal from "../LoginModal";
import RegisterModal from "../RegisterModal";
import SlideMenu from "../SlideMenu";
import Router, { useRouter } from "next/router";
import menu from "../functions/menu";
import fx from '../functions/useUser';

const Header = (props) => {
  const router = useRouter();
  const [mobile, setMoblie] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [login, setLogin] = useState("none");
  const [notLogin, setNotLogin] = useState("none");
  const [slideMenu, setSlideMenu] = useState("none");
  const [path, setPath] = useState(menu);
  const [memberData,setMemberDate] = useState({});
  
  useEffect(async () => {
    if (Boolean(Cookies.get("member"))) {
      setLogin("block");
      setNotLogin("none");
      setIsLogin(true);

      setMemberDate(fx.decode(Cookies.get("member")));
    } else {
      setNotLogin("block");
      setLogin("none");
      setIsLogin(false);
    }
    setMoblie(window.matchMedia("only screen and (max-width: 760px)").matches);
    setPath(
      path.map((item) =>
        item.pathName === router.pathname ? { ...item, active: "active" } : item
      )
    );
  }, []);

  const openLoginModal = () => {
    $("#loginModal").modal("show");
  };
  const logout = () => {
    Cookies.remove("member");
    Router.push("/");
  };
  const openSlideMenu = () => {
    if (slideMenu === "none") {
      setSlideMenu("block");
    } else {
      setSlideMenu("none");
    }
  };
  const closeSlideMenu = () => {
    setSlideMenu("none");
  };
  return (
    <div id="header">
      <nav className="navbar navbar-light bg-dark justify-content-between ">
        <div style={{ marginLeft: 30 }}>
          <img src="/images/bw-4.png" alt="" width="80vw" height="50vh" />
        </div>
        <form
          className="form-inline"
          style={{ display: mobile ? "none" : "flex" }}
        >
          <button
            type="button"
            className="btn btn-primary h-btn"
            onClick={openLoginModal}
            style={{
              padding: "5px",
              marginRight: 5,
              display: notLogin,
            }}
          >
            เข้าสู่ระบบ
          </button>
          <button
            type="button"
            className="btn btn-info h-btn"
            style={{
              padding: "5px",
              marginRight: 5,
              display: notLogin,
            }}
          >
            <Link href="/register">สมัครสมาชิก</Link>
          </button>

          <button
            type="button"
            className="btn"
            style={{
              padding: "5px",
              marginRight: 5,
              display: login,
            }}
          >
            <div className="icon-user-regular"></div>
          </button>
          <div
            style={{ fontSize: "12px", marginRight: "10px", marginLeft: "5px",display: login, }}
          >
            <div>
          <span>{memberData.mem_username}</span>
            </div>
            <div>
              <span>{`${memberData.balance} TB`}</span>
            </div>
          </div>
          <button
            type="button"
            className="btn  "
            style={{
              padding: "5px",
              marginRight: 5,
              display: login,
              color: 'rgb(250, 209, 107)'
            }}
          >
            <div className="fas fa-redo"></div>
          </button>
          <button
            type="button"
            className="btn  "
            onClick={logout}
            style={{
              padding: "5px",
              marginRight: 5,
              display: login,
            }}
          >
            <div className="icon-signout-solid"></div>
          </button>
        </form>
        <form
          className="form-inline"
          style={{ display: mobile ? "flex" : "none" }}
        >
          <a className="nav-link" href="#" style={{ padding: "5px" }}>
            <button
              className="navbar-toggler pull-right"
              type="button"
              style={{ color: "white" }}
              onClick={openSlideMenu}
            >
              <i className="fas fa-bars" />
            </button>
          </a>
        </form>
      </nav>
      <nav
        className="navbar navbar-light bg-dark justify-content-between"
        style={{ display: mobile ? "none" : "flex" }}
      >
        <div style={{ marginLeft: 30 }}></div>
        <form
          className="form-inline"
          style={{ display: isLogin ? "block" : "none" }}
        >
          <ul className="nav nav-pills">
            {path.map((b, index) => {
              if (b.login) {
                return (
                  <li className="nav-item" key={index}>
                    <a
                      className={`nav-link ${b.active}`}
                      href={b.pathName}
                      style={{ padding: "5px" }}
                    >
                      {b.textTh}
                    </a>
                  </li>
                );
              }
            })}
          </ul>
        </form>
        <form
          className="form-inline"
          style={{ display: !isLogin ? "block" : "none" }}
        >
          <ul className="nav nav-pills">
            {path.map((b, index) => {
              if (b.notLogin) {
                return (
                  <li className="nav-item" key={index}>
                    <a
                      className={`nav-link ${b.active}`}
                      href={b.pathName}
                      style={{ padding: "5px" }}
                    >
                      {b.textTh}
                    </a>
                  </li>
                );
              }
            })}
          </ul>
        </form>
      </nav>
      <LoginModal />
      <RegisterModal />
      <SlideMenu showMenu={slideMenu} onSubmit={closeSlideMenu} />
    </div>
  );
};

export default Header;
