import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import '../../fonts/_fonts.css';

const MBWrapper = styled.div`
  background-color: transparent;
  position:fixed;
  width: 100%;
  bottom: 1rem;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1020;
`;
const MBContent = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  margin: 0 auto;
`;

const Menubutton = styled.div`
background-color: #6CD1EF;
width: 100%;
height: 100%;
position: absolute;
border-radius: 50%;
z-index: 1009;
`;
const Menulink = styled.div`
background-color: ${props => props.menuOpen ? '#FFFFFF' : '#6CD1EF'};
cursor: pointer;
border-radius: 50%;
width: 100%;
height: 100%;
position: absolute;
z-index: 1010;
transition: all .4s ease-out;
`;

const Menuicon = styled.span`
position: absolute;
width: 20px;
height: 14px;
margin: auto;
left: 0;
top: 0;
right: 0;
bottom: 1px;
`;
const Menuline = styled.span`
background-color: #333;
height: 2px;
width: 100%;
border-radius: 2px;
position: absolute;
left: 0;
transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;
const Menuline1 = styled(Menuline)`
  top: 0;
  transform: ${props => props.menuOpen ? 'translateY(7px) translateY(-50%) rotate(-135deg)' : 'translate(0)'};
`;
const Menuline2 = styled(Menuline)`
  top: 0;
  bottom: 0;
  margin: auto;
  opacity: ${props => props.menuOpen ? '0' : '1'};
`;
const Menuline3 = styled(Menuline)`
  bottom: 0;
  transform: ${props => props.menuOpen ? 'translateY(-7px) translateY(50%) rotate(135deg)' : 'translate(0)'};
`;


const Menubackground = '#6CD1EF';

const MenuButtonComponent = (props) => (
      <MBWrapper>
        <MBContent>
          <Menubutton menuOpen={props.menuOpen}/>
          <Menulink onClick={props.menuOpenToggleFunc} menuOpen={props.menuOpen}>
            <Menuicon menuOpen={props.menuOpen}>
              <Menuline1 menuOpen={props.menuOpen}></Menuline1>
              <Menuline2 menuOpen={props.menuOpen}></Menuline2>
              <Menuline3 menuOpen={props.menuOpen}></Menuline3>
            </Menuicon>
          </Menulink>
        </MBContent>
      </MBWrapper>
    );

export default MenuButtonComponent;
