import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import menu from "./functions/menu";

export default function SlideMenu({ showMenu, onSubmit }) {
  const router = useRouter();
  const [path, setPath] = useState(menu);

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
  }, []);

  return (
    <div id="slide-menu" style={{ display: showMenu }}>
      <div className="container" style={{ textAlign: "center", marginTop: 30 }}>
        <ul className="nav flex-column">
          {path.map((b, index) => {
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
