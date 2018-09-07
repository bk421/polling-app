import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import ExpandableNavLink from './ExpandableNavLink'

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

// paramater data array(pda) declarations
var about_pda = {
  toplinktext : 'about',
  sublinks : [
    { mykey: 1, href: '/overview', linktext: 'overview' },
    { mykey: 2, href: '/mission', linktext: 'mission' },
    { mykey: 3, href: '/results', linktext: 'results' },
    { mykey: 4, href: '/team', linktext: 'our team' }
  ]
};
var adopt_pda = {
  toplinktext : 'adopt',
  sublinks : [
    { mykey: 1, href: '/adoptables', linktext: 'adoptable dogs' },
    { mykey: 2, href: '/adopt_application', linktext: 'adoption application' }
  ]
};
var help_pda = {
  toplinktext : 'help us',
  sublinks : [
    { mykey: 1, href: '/foster', linktext: 'foster' },
    { mykey: 2, href: '/volunteer', linktext: 'volunteer' },
    { mykey: 3, href: '/donate', linktext: 'donate' }
  ]
};
var events_pda = {
  toplinktext : 'events',
  sublinks : [
    { mykey: 1, href: '/upcoming_events', linktext: 'upcoming events' },
    { mykey: 2, href: '/recurring_events', linktext: 'recurring events' }
  ]
};
var other_pda = {
  toplinktext : 'other stuff',
  sublinks : [
    { mykey: 1, href: '/sponsors', linktext: 'sponsors' },
    { mykey: 2, href: '/medical', linktext: 'medical recipients' },
    { mykey: 3, href: '/media', linktext: 'news/media' }
  ]
};

const NavMenuTop = (props) => (
  <MenuTop menuTextColor={props.menuTextColor} fontfamily={props.fontfamily}>
    <ExpandableNavLink id='expandable_about' pda={about_pda} menuTextColor={props.menuTextColor} fontfamily={props.fontfamily} />
    <ExpandableNavLink id='expandable_adopt' pda={adopt_pda} menuTextColor={props.menuTextColor} fontfamily={props.fontfamily} />
    <ExpandableNavLink id='expandable_help' pda={help_pda} menuTextColor={props.menuTextColor} fontfamily={props.fontfamily} />
    <ExpandableNavLink id='expandable_events' pda={events_pda} menuTextColor={props.menuTextColor} fontfamily={props.fontfamily} />
    <ExpandableNavLink id='expandable_other' pda={other_pda} menuTextColor={props.menuTextColor} fontfamily={props.fontfamily} />
  </MenuTop>
);

export default NavMenuTop;
