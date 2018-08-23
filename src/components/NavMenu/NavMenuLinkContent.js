import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavMenuTop from './NavMenuTop';
import NavMenuBottom from './NavMenuBottom';

//import '../../fonts/_fonts.css'

const NavMenuWrapper = styled.div`
  background-color: transparent;
  height: 100%;
  width: 100%;
  position: fixed;
  top:0;
  left:0;
  opacity: ${props => props.menuOpen ? '1' : '0'};
  visibility: ${props => props.menuOpen ? 'visible' : 'hidden'};
  text-align: center;
  transition: opacity 2.0s ease-in-out 0.4s;
  z-index: 1001;
`;
const NavMenuHRContainer = styled.div`
  width:100%;
  position: fixed;
  bottom: 6rem;
`;
const NavMenuHR = styled.hr`
    margin: 0 auto;
    width: 70%;
    border-style: solid;
    color: white;
    border-width: 1.1px;
`;
const MENUTEXTCOLOR = '#fff';
const FONTFAMILY = 'rimouskisemibold';

const NavMenuLinkContent = (props) => (
  <NavMenuWrapper menuOpen={props.menuOpen}>
    <NavMenuTop menuTextColor={MENUTEXTCOLOR} fontfamily={FONTFAMILY} />
    <NavMenuHRContainer>
      <NavMenuHR />
    </NavMenuHRContainer>
    <NavMenuBottom />
  </NavMenuWrapper>
);

export default NavMenuLinkContent;
