
import Header from "../../components/Layout/Header";
import Sidebar from "./Sidebar";
import ControlSidebar from "../../components/Layout/ControlSidebar";
import Content from "../../components/Layout/Content";
import Footer from "../../components/Layout/Footer";
import PropTypes from 'prop-types';
import React from 'React';

class LayoutHoc extends React.Component {
    render() {
        return <div className="wrapper">
            <Header/>
            <Content title={this.props.contentTitle} titleButton={this.props.contentTitleButton}>
                {this.props.children}
            </Content>
            <Footer rightContent={'Develop by Spider Anonymous Team'} leftContent={<div>Copyright &copy; CM Games 2020</div>}/>
        </div>
    }
}

LayoutHoc.propTypes = {
    contentTitle: PropTypes.string,
    contentTitleButton: PropTypes.element,
};
export default LayoutHoc