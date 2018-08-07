import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import '../../fonts/_fonts.css'

const MBWrapper = styled.div`
  position:absolute;
  width: 100%;
  bottom: 1rem;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const MBContent = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  margin: 0 auto;
`
const menu-button = styled.div`
width: 100%;
height: 100%;
position: absolute;
border-radius: 50%;
transition: all 1.0s cubic-bezier(0.19, 1, 0.22, 1);
z-index: 999;
`
const menu-link = styled(Link)`
border-radius: 50%;
width: 100%;
height: 100%;
position: absolute;
z-index: 1002;
`
const menu-icon = styled.span`
position: absolute;
width: 20px;
height: 14px;
margin: auto;
left: 0;
top: 0;
right: 0;
bottom: 1px;
`
const menu-line = styled.span`
background-color: #333;
height: 2px;
width: 100%;
border-radius: 2px;
position: absolute;
left: 0;
transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`
const menu-line-1 = styled(menu-line)`
  top: 0;
`
const menu-line-2 = styled(menu-line)`
  top: 0;
  bottom: 0;
  margin: auto;
`
const menu-line-3 = styled(menu-line)`
  bottom: 0;
`
const BACKGROUND = 'background-color: #6CD1EF';

const MenuButton = ({ menubackground }) => (
  <MBWrapper>
    <MBContent>
      <menu-button background={menubackground}/>
      <menu-link>
        <menu-icon>
          <menu-line-1></menu-line-1>
          <menu-line-2></menu-line-2>
          <menu-line-3></menu-line-3>
        </menu-icon>
      </menu-link>
    </MBContent>
  </MBWrapper>
);

MenuButton.defaultProps = {
  background: BACKGROUND
};

MenuButton.propTypes = {
  background: PropTypes.string
};

export default MenuButton;
