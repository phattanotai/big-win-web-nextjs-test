import React, { useEffect } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

const useUser = (pathname, redirectIfFound ) => {
  if (Cookies.get("user") && redirectIfFound) {
    console.log("user:=>"+Cookies.get("user"));
    useEffect(() => {
      const { pathname } = Router;
      if (pathname == "/") {
        Router.push("/admin");
      }
    }, []);
  } else {
    useEffect(() => {
      const { pathname } = Router;
        Router.push("/");
    }, []);
  }


};

export { useUser };
