import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import brand from "../../services/brand";
import LoginModal from "../LoginModal";
import Cookies from "js-cookie";
import Link from "next/link";
import Router, { useRouter } from "next/router";

const Footer = (props) => {
  const [mobile, setMoblie] = useState(false);
  const [brands, setBrands] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const [login, setLogin] = useState("none");
  const [notLogin, setNotLogin] = useState("none");

  useEffect(async () => {
    const data = await brand.getBrandsSort();
    setBrands(data.data.data);
    setMoblie(window.matchMedia("only screen and (max-width: 760px)").matches);
    if (Boolean(Cookies.get("member"))) {
      setLogin("block");
      setNotLogin("none");
      setIsLogin(true);
    } else {
      setNotLogin("block");
      setLogin("none");
      setIsLogin(false);
    }
  }, []);
  const openModal = () => {
    $("#loginModal").modal("show");
  };
  const logout = () =>{
    Cookies.remove("member");
    Router.push("/");
  }
  return (
    <>
      <footer className="main-footer clearfix">
        <div
          className="container "
          style={{
            margin: "auto",
            textAlign: "center",
            marginBottom: mobile ? "50px" : "0px",
          }}
        >
          <div className="addCredit">
            <h3>ช่องทางการติดต่อ</h3>
            <a href="https://line.me/R/ti/p/%40662iocjv" target="_blank">
              <img
                src="/images/Image 8.png"
                alt="1X2 Gaming slot"
                width={mobile ? "50%" : "10%"}
                height={mobile ? "50%" : "8%"}
                style={{ objectFit: "contain", marginTop: 30 }}
              />
            </a>
          </div>
          <div style={{ marginBottom: 30, marginTop: 30 }}>
            <img
              src="/images/bw-4.png"
              alt="1X2 Gaming slot"
              width="25%"
              height="20%"
              style={{ objectFit: "contain" }}
            />
          </div>
          {brands.map((b, index) => {
            return (
              <Link href="" key={`${b._id}`}>
                <a>
                  <img
                    src={"https://BigWin1234.com/public/" + b.brand_img}
                    alt="1X2 Gaming slot"
                    width="40px"
                    height="40px"
                    style={{ objectFit: "contain", margin: "0px 5px  10px" }}
                  />
                </a>
              </Link>
            );
          })}
        </div>
        <div
          id="menu-bottom"
          style={{
            position: "fixed",
            bottom: 0,
            display: mobile ? "flex" : "none",
          }}
        >
          <nav className="footer-menu navbar navbar-light  justify-content-between">
            <div
              className="row"
              style={{ width: "100vw", textAlign: "center",display: isLogin? 'none' : 'flex' }}
            >
              <div className="col-6">
                <a className="nav-link" href="#" onClick={openModal}>
                  เข้าสู่ระบบ
                </a>
              </div>
              <div className="col-6">
                <Link href="/register">
                  <a className="nav-link">สมัครสมาชิก</a>
                </Link>
              </div>
            </div>
            <div className="row"  style={{ width: "100vw", textAlign: "center",display: !isLogin? 'none' : 'flex' }}>
              <div className="col-6">
                <a className="nav-link" href="#" onClick={logout}>
                  ออกจากระบบ
                </a>
              </div>
              <div className="col-6">
                <a className="nav-link" href="#">
                  โปรไฟล์
                </a>
              </div>
            </div>
          </nav>
        </div>

        <div
          className="row"
          style={{
            bottom: 0,
            display: mobile ? "none " : "flex",
          }}
        >
          <div className="col-6" style={{ textAlign: "left" }}>
            {props.leftContent && props.leftContent}
          </div>
          <div className="col-6" style={{ textAlign: "right" }}>
            {props.rightContent && props.rightContent}
          </div>
        </div>
        <LoginModal />
      </footer>
    </>
  );
};

Footer.propTypes = {
  leftContent: PropTypes.element,
  rightContent: PropTypes.string,
};

export default Footer;
