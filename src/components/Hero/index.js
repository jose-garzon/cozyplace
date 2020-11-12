// ------------------------------ import libraries
import React from 'react';
import { useHistory } from 'react-router-dom';

// ------------------------------ import components
import { Header } from '../Header';
import { SearchBar } from '../SearchBar';
import { Introduction } from '../Introduction';

// ------------------------------ import styles and images
import { StyledHero, HeroImage } from './styles';
import heroPicture from '../../assets/images/heroPicture.jpg';

// ------------------------------------ COMPONENT ------------------------------------//
// the Hero is the first component in each page. It have the header and the seachbar.
// It change if user is logged.
// In landing it show and extra component, Intrduction. It shows the name and a short description of the app.

export const Hero = ({ focus, image = heroPicture }) => {
  const history = useHistory();

  return (
    <StyledHero>
      <HeroImage src={image} alt="main image of the page" />
      <Header />
      {history.location.pathname === '/' ? (
        <>
          <Introduction />
          <SearchBar focus={focus} />
        </>
      ) : null}
    </StyledHero>
  );
};
