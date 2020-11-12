// ------------------------------ import libraries
import React, { forwardRef, useState } from 'react';
import ReactDom from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import JwtDecode from 'jwt-decode';

// ------------------------------ import components
import { Icon } from '../Icons';

// ------------------------------ import styles and images
import { Modal, Form } from './styles';
import { InputText } from '../../global-styles/Inputs';
import { Button } from '../../global-styles/Buttons';
import lightLogo from '../../assets/images/logo-light.svg';
import createUser from '../../utils/Register';
import loginUser from '../../utils/Login';
import { useGetMousePosition } from '../../hooks/useGetMousePosition';

// -------- import redux actions
import {
  openLogin,
  closeModal,
  getUserData,
} from '../../actions/userActions';
import {
  showIndicator,
  setIndicatorPosition,
} from '../../actions/experiencesActions';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the modal to login or sign up. It change according to the displayModal state
// if the state login is true, show the login modal.
// if the state sign is true, show the sign up modal.

export const LoginModal = forwardRef(() => {
  const mousePosition = useGetMousePosition();
  const displayModal = useSelector(
    (state) => state.userReducer.displayModal,
  );
  const history = useHistory();
  const dispatch = useDispatch();

  // this function close the modal
  const closeModalCard = () => dispatch(closeModal());

  const [form, setForm] = useState();
  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  // submit the form to the store and close the modal.
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (displayModal.login) {
      try {
        const login = await loginUser(form);

        if (login.data.Message === 'Auth success') {
          const { id } = JwtDecode(login.data.token);
          dispatch(getUserData(id, login.data.token));
          history.push('/');
        }
      } catch (error) {
        dispatch(
          showIndicator({
            status: true,
            message: 'Invalid email or password ❌',
          }),
        );
        dispatch(setIndicatorPosition(mousePosition));
      }
    } else if (displayModal.sign) {
      const register = await createUser(form);
      if (register.data.email === form.email) {
        dispatch(
          showIndicator({
            status: true,
            message: 'Thanks for join us!! 🎉',
          }),
        );
        dispatch(setIndicatorPosition(mousePosition));
        closeModalCard();
        dispatch(openLogin());
      } else {
        dispatch(
          showIndicator({
            status: true,
            message: 'This user could not register, try again ❌',
          }),
        );
        dispatch(setIndicatorPosition(mousePosition));
      }
    }
  };

  // this validate if the display Modal state is true to display it.
  if (displayModal.login || displayModal.sign) {
    return ReactDom.createPortal(
      <Modal>
        <Form onSubmit={handleSubmit}>
          <Icon type="close" click={closeModalCard} />
          <img src={lightLogo} alt="Logo" />
          {displayModal.login && <h1>login</h1>}
          {displayModal.sign && (
            <>
              <h1>Sign up</h1>
              <InputText
                aria-label="fullname"
                type="text"
                placeholder="Name"
                name="fullname"
                required
                onChange={handleInput}
              />
            </>
          )}
          <InputText
            aria-label="email"
            type="email"
            placeholder="email"
            name="email"
            required
            onChange={handleInput}
          />
          {displayModal.sign && (
            <InputText
              aria-label="username"
              type="text"
              placeholder="Username"
              name="username"
              required
              onChange={handleInput}
            />
          )}
          <InputText
            aria-label="password"
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={handleInput}
          />
          <Button type="submit" submit>
            {displayModal.login && 'Login'}
            {displayModal.sign && 'Sign up'}
          </Button>
        </Form>
      </Modal>,

      document.getElementById('modal'),
    );
  }
  return null;
});
