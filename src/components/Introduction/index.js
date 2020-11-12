// ------------------------------ import libraries
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ------------------------------ import styles and images
import { Button } from '../../global-styles/Buttons';
import { Title, StyledIntroduction, Description } from './styles';

// -------- import redux actions
import { openSign } from '../../actions/userActions';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the description of the app in the landing page.

export const Introduction = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userReducer.userData);
  const validToken = token ? Object.keys(token).length > 0 : null;

  // this function open the sign in modal
  const openSignModal = () => dispatch(openSign());

  return (
    <StyledIntroduction>
      <Title>Cozy Place</Title>
      {validToken ? null : (
        <>
          <Description>
            For decades travellers have reached for Lonely Planet
            books when looking to plan and execute their perfect trip,
            but now, they can also let Lonely Planet Experiences lead
            the way.
          </Description>
          <Button big onClick={openSignModal}>
            Sign up
          </Button>
        </>
      )}
    </StyledIntroduction>
  );
};
