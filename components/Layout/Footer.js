import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import brand from "../../services/brand";
import LoginModal from "../LoginModal";
import Cookies from "js-cookie";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import fx from '../functions/useUser';
import env from "../../env";

const Footer = (props) => {
  const [mobile, setMoblie] = useState(false);
  const [brands, setBrands] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [memberData,setMemberDate] = useState({});
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

      setMemberDate(fx.decode(Cookies.get("member")));
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
          <div style={{marginTop: 20}}>
            <p>
            เว็บเกมส์ออนไลน์ ครบวงจรที่ดีที่สุด พร้อมให้ทดลองด้วยตัวเอง ด้วยระบบที่ทันสมัย คาสิโนสด จากต่างประเทศ
            </p>
            <p>
            เรา คือเว็บไซต์เกมส์ไลน์ครบวงจรทั้ง บาคาร่า คาสิโน สล็อต รูเล็ต เสือมังกร เดิมพันกีฬาออนไลน์
            </p>
            <p>
            เรามีแอดมินที่คอยช่วยดูแลมากมาย และบริการ 24 ชม. หมดปัญหาการตอบลูกค้าช้าด้วยระบบออโต้ที่รวดเร็ว เว็บไซต...
            </p>


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
                    src={`${env.endpoint_img}/${b.brand_img}`}
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
              <div className="col-12">
                <a className="nav-link" href="#" onClick={openModal}>
                  เข้าสู่ระบบ
                </a>
              </div>
              {/* <div className="col-6">
                <Link href="/register">
                  <a className="nav-link">สมัครสมาชิก</a>
                </Link>
              </div> */}
            </div>
            <div className="row"  style={{ width: "100vw", textAlign: "center",display: !isLogin? 'none' : 'flex' }}>
              <div className="col-6">
                <a className="nav-link" href="#" onClick={logout}>
                  ออกจากระบบ
                </a>
              </div>
              <div className="col-6">
              <div
            style={{ fontSize: "12px", marginRight: "10px", marginLeft: "5px", }}
          >
            <div>
                <span>username : </span>
                <span>{memberData.mem_username}</span>
            </div>
            <div>
              <span>เครดิต : </span>
              <span>{`${memberData.balance} TB`}</span>
            </div>
          </div>
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
