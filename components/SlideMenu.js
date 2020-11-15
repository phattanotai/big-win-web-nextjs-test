import React, { useEffect, useState } from "react";

export default function SlideMenu({showMenu,onSubmit}) {
    return (
        <div id="slide-menu" style={{display: showMenu}}>
            dasdsdf

            <div style={{textAlign: 'center'}}>
            <button
              className="btn btn-info"
              type="button"
              style={{ color: "white" }}
              onClick={onSubmit}
            >
              ปิด
            </button>
            </div>
            
        </div>
    )
}
