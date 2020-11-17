import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

const Content = (props) => {
  const [mobile, setMoblie] = useState(false);

  useEffect(async () => {
    setMoblie(window.matchMedia("only screen and (max-width: 760px)").matches);
  }, []);

  return (
    <div id="content" >
      <div >
        <div >{props.children}</div>
      </div>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  titleButton: PropTypes.element,
};

export default Content;
