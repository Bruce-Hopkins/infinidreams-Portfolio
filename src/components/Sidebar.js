import React from "react";
import PropTypes from "prop-types"
import Scrollspy from 'react-scrollspy'
import smoothscroll from 'smoothscroll-polyfill';

class Sidebar extends React.Component {
  componentDidMount() {
    smoothscroll.polyfill();
  }

  render() {
    return (
    

      <div className={this.props.hide ? 'sidebar sidebar-show' : ' sidebar'}>
          <Scrollspy className="sidebar-group" items={ ["Who-Am-I", "Skills", "Projects", "Contact"]} currentClassName="is-current">
              <a href="#Who-Am-I"> Who Am I? </a>
              <a href="#Skills"> Skills </a>
              <a href="#Projects"> Projects </a>
              <a href="#Contact"> Contact </a>
          </Scrollspy>
      </div>
    )
  }
}

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
}

export default Sidebar
