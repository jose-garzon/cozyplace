// ------------------------------ import libraries
import React from 'react';
import { useHistory } from 'react-router-dom';

// ------------------------------ import components
import { Header } from '../../components/Header';

// ------------------------------ import styles and images
import { Styled404, Section, Description } from './styles';
import { Button } from '../../global-styles/Buttons';

// ------------------------------------ COMPONENT ------------------------------------//
// this page is rendered when the route does not exist.

export default () => {
  const history = useHistory();

  return (
    <Styled404>
      <Header />
      <Section>
        <h1>404</h1>
        <Description>
          <p>Oops!</p>
          <p>Seems like you can't land here</p>
          <div>
            <Button main onClick={() => history.push('/')}>
              Go home
            </Button>
          </div>
        </Description>
      </Section>
    </Styled404>
  );
};
