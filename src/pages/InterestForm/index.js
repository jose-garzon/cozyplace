// ------------------------------ import libraries
import React from 'react';
import { useHistory } from 'react-router-dom';

// ------------------------------ import components
import { Button } from '../../global-styles/Buttons';

// ------------------------------ import styles and images
import {
  Container,
  Title,
  DescriptText,
  CategorySection,
  SelectionSection,
  TextChoice,
} from './styles';

// -------- import redux actions

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export default () => {
  const history = useHistory();

  return (
    <Container>
      <Title>WHAT ARE YOU UP TO?</Title>
      <DescriptText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid, veritatis maxime sed blanditiis ab, similique magnam
        aperiam vero eius et dolores quidem velit voluptas cupiditate.
      </DescriptText>
      <CategorySection>
        <Button>Adventure Travel</Button>
        <Button>Art And Culture</Button>
        <Button>Wildlife And Nature</Button>
        <Button>Family Holidays</Button>
        <Button>Food And Drink</Button>
      </CategorySection>
      <SelectionSection>
        <TextChoice>
          Awesome Choice: category1, category2, category3
        </TextChoice>
        <Button main onClick={() => history.push('/')}>
          GO
        </Button>
      </SelectionSection>
    </Container>
  );
};
