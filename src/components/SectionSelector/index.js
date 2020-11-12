// ------------------------------ import libraries
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ------------------------------ import styles and images
import { Selector } from './styles';

// -------- import redux actions
import {
  getFavoriteExperiences,
  getUserExperiences,
  setSelection,
} from '../../actions/userActions';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const SectionSelector = () => {
  const dispatch = useDispatch();

  const { _id, token, favorite } = useSelector(
    (state) => state.userReducer.userData,
  );

  useEffect(() => {
    dispatch(setSelection('favorites'));
    dispatch(getFavoriteExperiences(_id, token));
  }, [favorite]);

  function setMyExperiences() {
    dispatch(setSelection('my experiences'));
    dispatch(getUserExperiences(_id, token));
  }
  function setFavorites() {
    dispatch(setSelection('favorites'));
    dispatch(getFavoriteExperiences(_id, token));
  }

  return (
    <Selector>
      <h3 tabIndex="0" onClick={setFavorites}>
        Favorites
      </h3>
      <h3 tabIndex="0" onClick={setMyExperiences}>
        My experiences
      </h3>
    </Selector>
  );
};
