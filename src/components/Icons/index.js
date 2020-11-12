// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import styles and images
import clock from '../../assets/images/clockIcon.svg';
import close from '../../assets/images/closeIcon.svg';
import search from '../../assets/images/searchIcon.svg';
import location from '../../assets/images/locationIcon.svg';
import Star from '../../assets/images/Star.svg';
import plus from '../../assets/images/plusIcon.svg';
import facebook from '../../assets/images/facebookIcon.svg';
import twitter from '../../assets/images/twitterIcon.svg';
import instagram from '../../assets/images/instagramIcon.svg';
import youtube from '../../assets/images/youtubeIcon.svg';
import addPicture from '../../assets/images/Add-picture.svg';
import arrowLeft from '../../assets/images/Arrow-left.svg';
import arrowRight from '../../assets/images/Arrow-right.svg';
import emptyHeart from '../../assets/images/emptyHeart.svg';
import favoriteHeart from '../../assets/images/favoriteHeart.svg';
import heartBroken from '../../assets/images/heartBrokenIcon.svg';

import { StyledIcon } from './styles';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the icon component. It is one component to display the icons dynamically

// this objet has all the images icons
const icons = {
  clock,
  close,
  search,
  location,
  facebook,
  twitter,
  instagram,
  youtube,
  addPicture,
  arrowLeft,
  arrowRight,
  star: Star,
  plus,
  emptyHeart,
  favoriteHeart,
  heartBroken,
};

// to use the icons set the prop type with one of the keys of icons object
export const Icon = ({ type, click }) => {
  return (
    <StyledIcon
      type="image"
      tabIndex="0"
      src={icons[type]}
      alt={type}
      onClick={click}
    />
  );
};
