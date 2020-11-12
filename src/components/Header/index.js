// ------------------------------ import libraries
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

// ------------------------------ import styles and images
import {
  StyledHeader,
  Brand,
  Logo,
  LinkedLogo,
  Image,
  MenuProfile,
} from './styles';
import { Button } from '../../global-styles/Buttons';
import logo from '../../assets/images/logo.svg';
import userIcon from '../../assets/images/userIcon.svg';

// -------- import redux actions
import { openLogin, openSign } from '../../actions/userActions';

// ------------------------------------ COMPONENT ------------------------------------//
// This is the header. It change if the user is logged.
// In the landing page it shows the login and sign up buttons.
// When the user is logged it shows the user picture and a link to home page.

export const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { token, image } = useSelector(
    (state) => state.userReducer.userData,
  );
  const userImage = image === '' ? userIcon : image;

  // this functions open the modal
  const openLoginModal = () => dispatch(openLogin());
  const openSignModal = () => dispatch(openSign());
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <StyledHeader>
      <Brand>
        <LinkedLogo to="/">
          <Logo src={logo} alt="Cozy place logo" />
        </LinkedLogo>
      </Brand>
      {token ? (
        history.location.pathname === '/user' ? null : (
          <MenuProfile>
            <Link to="/user">
              <Image src={userImage} alt="" />
            </Link>
            <ul>
              <Button onClick={logout}>logout</Button>
            </ul>
          </MenuProfile>
        )
      ) : (
        <div>
          <Button onClick={openLoginModal}>login</Button>
          {window.innerWidth <= 400 ? null : (
            <Button main onClick={openSignModal}>
              Sign up
            </Button>
          )}
        </div>
      )}
    </StyledHeader>
  );
};
