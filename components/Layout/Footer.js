import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import brand from "../../services/brand";
import LoginModal from "../LoginModal";
import Cookies from "js-cookie";

const Footer = (props) => {
  const [mobile, setMoblie] = useState(false);
  const [brands, setBrands] = useState([]);
  const [login, setLogin] = useState(Boolean(Cookies.get("member")));
  useEffect(async () => {
    const data = await brand.getBrandsSort();
    setBrands(data.data.data);
    setMoblie(window.matchMedia("only screen and (max-width: 760px)").matches);
  }, []);
  const openModal = () => {
    $("#exampleModal").modal("show");
  };

  return (
    <>
      <footer
        className="main-footer clearfix bg-dark"
        style={{ marginTop: "50px", position: "relative" }}
      >
        <div
          className="container "
          style={{
            margin: "auto",
            textAlign: "center",
            marginBottom: mobile ? "50px" : "0px",
          }}
        >
          <div className="addCredit">
            <h3>ช่องทางการเติมเงิน</h3>
            <img
              src="/images/Image 8.png"
              alt="1X2 Gaming slot"
              width="10%"
              height="8%"
              style={{ objectFit: "contain", marginTop: 30 }}
            />
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
              <a href="" key={`${b._id}`}>
                <img
                  src={"https://BigWin1234.com/public/" + b.brand_img}
                  alt="1X2 Gaming slot"
                  width="40px"
                  height="40px"
                  style={{ objectFit: "contain", margin: "0px 5px  10px" }}
                />
              </a>
            );
          })}
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

        <div id="menu-bottom"
          style={{
            position: "fixed",
            bottom: 0,
            display: mobile ? "flex" : "none",
          }}
        >
          <nav className="navbar navbar-light bg-dark justify-content-between ">
            <div
              className="row"
              style={{ width: "100vw", textAlign: "center" }}
            >
              {!login && (
                <>
                  <div className="col-6">
                    <a className="nav-link" href="#" onClick={openModal}>
                      เข้าสู่ระบบ
                    </a>
                  </div>
                  <div className="col-6">
                    <a className="nav-link" href="#">
                      สมัครสมาชิก
                    </a>
                  </div>
                </>
              )}
              {login && (
                <>
                  <div className="col-6">
                    <a className="nav-link" href="#" onClick={openModal}>
                      ออกจากระบบ
                    </a>
                  </div>
                  <div className="col-6">
                    <a className="nav-link" href="#">
                      โปรไฟล์
                    </a>
                  </div>
                </>
              )}
            </div>
          </nav>
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
