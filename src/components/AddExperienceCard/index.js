// ------------------------------ import libraries
import React from 'react';
import { useHistory } from 'react-router-dom';

// ------------------------------ import components
import { Icon } from '../Icons';

// ------------------------------ import styles and images
import { CardStyled } from './styles';

// ------------------------------------ COMPONENT ------------------------------------//

export const AddExperienceCard = () => {
  const history = useHistory();

  function handleClick() {
    history.push('/create-experience');
  }
  return (
    <CardStyled>
      <h3>Add an experience</h3>
      <Icon type="plus" click={handleClick} />
    </CardStyled>
  );
};
