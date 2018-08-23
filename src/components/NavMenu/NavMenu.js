import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MenuButtonComponent from "./MenuButton"
import NavMenuLinkContent from "./NavMenuLinkContent"

import '../../fonts/_fonts.css';

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
    console.log("MenuButtonComponent constructed");
  }

  toggleMenu = () => {
    console.log("menu button clicked");
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <div>
        <NavMenuLinkContent menuOpen={this.state.menuOpen}></NavMenuLinkContent>
      </div>
)
}
};

export default NavMenu;
