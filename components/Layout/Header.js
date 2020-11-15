import Link from "next/link";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Header.module.css";
import LoginModal from "../LoginModal";
import RegisterModal from "../RegisterModal";
import SlideMenu from "../SlideMenu";

const Header = (props) => {
  const [mobile, setMoblie] = useState(false);
  const [login, setLogin] = useState(Boolean(Cookies.get("member")));
  const [slideMenu, setSlideMenu] = useState('none');
  
  useEffect(async () => {
    setMoblie(window.matchMedia("only screen and (max-width: 760px)").matches);
  }, []);

  const openLoginModal = () => {
    $("#loginModal").modal("show");
  };
  const openRegisterModal = () => {
    $("#registerModal").modal("show");
  };
  const openSlideMenu = () => {
    if(slideMenu === 'none'){
      setSlideMenu('block');
    }else{
      setSlideMenu('none');
    }
  };
  const closeSlideMenu = () => {
    setSlideMenu('none');
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
          {!login && (
            <>
              <button
                type="button"
                className="btn btn-primary h-btn"
                onClick={openLoginModal}
                style={{
                  padding: "5px",
                  marginRight: 5,
                }}
              >
                เข้าสู่ระบบ
              </button>
              <button
                type="button"
                className="btn btn-info h-btn"
                onClick={openRegisterModal}
                style={{
                  padding: "5px",
                  marginRight: 5,
                }}
              >
                สมัครสมาชิก
              </button>
            </>
          )}
          {login && (
            <>
              <button
                type="button"
                className="btn btn-primary h-btn"
                onClick={openLoginModal}
                style={{
                  padding: "5px",
                  marginRight: 5,
                }}
              >
                ออกจากระบบ
              </button>
            </>
          )}
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
      <nav className="navbar navbar-light bg-dark justify-content-between ">
        <div style={{ marginLeft: 30 }}></div>
        <form
          className="form-inline"
          style={{ display: mobile ? "none" : "flex" }}
        >
          <a className="nav-link" href="#" style={{ padding: "5px" }}>
            หน้าแรก
          </a>
          <a className="nav-link" href="#">
            เกมส์
          </a>
          <a className="nav-link" href="#">
            คาสิโนสด
          </a>
          <a className="nav-link" href="#">
            ดาวน์โหลด
          </a>
          <a className="nav-link" href="#">
            คู่มือ
          </a>
        </form>
      </nav>
      <LoginModal />
      <RegisterModal />
      <SlideMenu showMenu={slideMenu} onSubmit={closeSlideMenu}/>
    </div>
  );
};

export default Header;
