import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavMenuBottomSVG from './NavMenuBottomSVG'

import '../../fonts/_fonts.css'

const NavMenuBottomContainer = styled.div`
height: 75px;
bottom: 1rem;
position: absolute;
/* text-align: center; */
width: 100%;
z-index: 1002;
`
const NavMenuBottom_svgContainer = styled.div`
    height: 100%;
    max-height: 75px;
    min-height: 65px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    min-width: 0;
    min-height: 0;
`
const NavMenuBottom = () => (
  <NavMenuBottomContainer>
    <NavMenuBottom_svgContainer>
      <NavMenuBottomSVG/>
    </NavMenuBottom_svgContainer>
  </NavMenuBottomContainer>
);

export default NavMenuBottom;
