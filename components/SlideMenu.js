import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import menu from "./functions/menu";
import Link from "next/link";

export default function SlideMenu({ showMenu, onSubmit }) {
  const router = useRouter();
  const [path, setPath] = useState(menu);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (router.pathname) {
      setPath(
        path.map((item) =>
          item.pathName === router.pathname
            ? { ...item, active: "w3-blue" }
            : item
        )
      );
    }

    if (Boolean(Cookies.get("member"))) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <div id="slide-menu" style={{ display: showMenu }}>
      <div className="container" style={{ textAlign: "center", marginTop: 30 }}>
        <ul
          className="nav flex-column"
          style={{ display: isLogin ? "block" : "none" }}
        >
          {path.map((b, index) => {
            if (b.login) {
              if (b.show) {
                return (
                  <li className="nav-item" key={index}>
                    <Link href={b.pathName}>
                      <a
                        className={`nav-link ${b.active}`}
                        style={{ padding: "5px" }}
                      >
                        {b.textTh}
                      </a>
                    </Link>
                  </li>
                );
              }
            }
          })}
        </ul>
        <ul
          className="nav flex-column"
          style={{ display: isLogin ? "none" : "block" }}
        >
          {path.map((b, index) => {
            if (b.notLogin) {
              if (b.show) {
                return (
                  <li className="nav-item" key={index}>
                    <Link href={b.pathName}>
                      <a
                        className={`nav-link ${b.active}`}
                        style={{ padding: "5px" }}
                      >
                        {b.textTh}
                      </a>
                    </Link>
                  </li>
                );
              }
            }
          })}
        </ul>
        <div>
          <button
            className="w3-button w3-block w3-light-blue"
            type="button"
            style={{ color: "white", marginTop: "80%" }}
            onClick={onSubmit}
          >
            ปิด
          </button>
        </div>
      </div>
    </div>
  );
}
