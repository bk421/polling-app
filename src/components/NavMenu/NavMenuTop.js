import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import '../../fonts/_fonts.css'

const MenuTop = styled.div`
  min-height: 80%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${props => props.menuTextColor ? props.menuTextColor : 'black'};
  font-family: ${props => props.menuTextColor ? props.fontfamily : "Arial"};
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

const NavMenuTop = (props) => (
  <MenuTop menuTextColor={props.menuTextColor} fontfamily={props.fontfamily}>
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

export default NavMenuTop;
