import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Content = (props) => {
  const [mobile, setMoblie] = useState(false);

  useEffect(() => {
    setMoblie(window.matchMedia("only screen and (max-width: 760px)").matches);
  }, []);

  return (
    <div id="content">
      <div>
        <div>{props.children}</div>
      </div>
      <div>
        <button className="w3-button w3-circle w3-green line-btn">
          <span>
            <a href="https://line.me/R/ti/p/%40662iocjv" target="_blank">
              <img src="/images/line-icon.png" width="40" height="40" />
            </a>
          </span>
        </button>
      </div>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  titleButton: PropTypes.element,
};

export default Content;
