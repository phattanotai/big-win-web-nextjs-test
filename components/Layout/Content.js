import PropTypes from "prop-types";

const Content = (props) => {
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
