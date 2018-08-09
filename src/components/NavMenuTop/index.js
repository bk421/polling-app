import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import '../../fonts/_fonts.css'

const MenuTop = styled.div`
  min-height: 80%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`
const MainHeader = styled.h2`
  font-size: 8.5vh;
  text-decoration: none;
  cursor: pointer;
  margin: 0;
`
const SubHeader = styled(MainHeader)`
  font-size: 4vh;
`
const SubMenu = styled.div`
  display:none;
  text-align:center;
`
const BACKGROUND = 'background-color: #6CD1EF';
const FORECOLOR = 'color: #fff';
const FONTFAMILY = 'font-family: "rimouskisemibold"';

const NavMenuTop = ({ background, forecolor, fontfamily }) => (
  <MenuTop background={background} color={forecolor} font-family={fontfamily}>
    <MainHeader>about</MainHeader>
    <SubMenu>
      <SubHeader>overview</SubHeader>
      <SubHeader>mission</SubHeader>
      <SubHeader>results</SubHeader>
      <SubHeader>our team</SubHeader>
    </SubMenu>
    <MainHeader>adopt</MainHeader>
    <SubMenu>
      <SubHeader>adoptable dogs</SubHeader>
      <SubHeader>adoption application</SubHeader>
    </SubMenu>
    <MainHeader>help us</MainHeader>
    <SubMenu>
      <SubHeader>foster</SubHeader>
      <SubHeader>volunteer</SubHeader>
      <SubHeader>donate</SubHeader>
    </SubMenu>
    <MainHeader>events</MainHeader>
    <MainHeader>other stuff</MainHeader>
      <SubMenu>
        <SubHeader>sponsors</SubHeader>
        <SubHeader>medical recipients</SubHeader>
        <SubHeader>news/media</SubHeader>
      </SubMenu>
  </MenuTop>
);

NavMenuTop.defaultProps = {
  background: BACKGROUND,
  forecolor: FORECOLOR,
  fontfamily: FONTFAMILY
};

NavMenuTop.propTypes = {
  background: PropTypes.string,
  forecolor: PropTypes.string,
  fontfamily: PropTypes.string,
};

export default NavMenuTop;
