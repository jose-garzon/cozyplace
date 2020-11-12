// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Icon } from '../Icons';

// ------------------------------ import styles and images
import logo from '../../assets/images/logo.svg';
import {
  StyledFooter,
  Description,
  Rights,
  ListsGroup,
  List,
} from './styles';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the footer. It has a short description and the rights declaration.
// Also has the list of destinations and interests.
// Finally it has the social network links

export const Footer = () => {
  return (
    <StyledFooter>
      <Description>
        <Rights>
          <img src={logo} alt="logo cozy place" />
          <p>
            For decades travellers have reached for Lonely Planet
            books when looking to plan and execute their perfect trip,
            but now, they can also let Lonely Planet Experiences lead
            the way.
          </p>
          <p>L©2020 Thousand Sunny. All rights reserved.</p>
        </Rights>
        <ListsGroup>
          <List>
            <li>destinations</li>
            <li>Mexico</li>
            <li>Colombia</li>
          </List>
          <List>
            <li>interests</li>
            <li>Adventure Travel</li>
            <li>Art and Culture</li>
            <li>Wildlife and Nature</li>
            <li>Family Holidays</li>
            <li>Food and Drinks</li>
          </List>
        </ListsGroup>
      </Description>
    </StyledFooter>
  );
};
