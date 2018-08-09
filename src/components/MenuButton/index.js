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
const Menubutton = styled.div.attrs({
  mybg: props => props.databg || 'white',
})`
background-color: ${props => props.mybg};
width: 100%;
height: 100%;
position: absolute;
border-radius: 50%;
transition: all 1.0s cubic-bezier(0.19, 1, 0.22, 1);
z-index: 999;
`
const Menulink = styled(Link)`
border-radius: 50%;
width: 100%;
height: 100%;
position: absolute;
z-index: 1002;
`
const Menuicon = styled.span`
position: absolute;
width: 20px;
height: 14px;
margin: auto;
left: 0;
top: 0;
right: 0;
bottom: 1px;
`
const Menuline = styled.span`
background-color: #333;
height: 2px;
width: 100%;
border-radius: 2px;
position: absolute;
left: 0;
transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`
const Menuline1 = styled(Menuline)`
  top: 0;
`
const Menuline2 = styled(Menuline)`
  top: 0;
  bottom: 0;
  margin: auto;
`
const Menuline3 = styled(Menuline)`
  bottom: 0;
`
const Menubackground = '#6CD1EF';

const MenuButton = () => (
  <MBWrapper>
    <MBContent>
      <Menubutton databg={Menubackground}></Menubutton>
      <Menulink>
        <Menuicon>
          <Menuline1></Menuline1>
          <Menuline2></Menuline2>
          <Menuline3></Menuline3>
        </Menuicon>
      </Menulink>
    </MBContent>
  </MBWrapper>
);

// menu_button.defaultProps = {
//   color: menubackground
// };
//
// menu_button.propTypes = {
//   color: PropTypes.string
// };

export default MenuButton;
