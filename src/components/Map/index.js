// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Landmark } from '../Landmark';
import { useFetchData } from '../../hooks/useFetchData';

// ------------------------------ import styles and images
import { StyledSection, StyledMap, MapImg, Title } from './styles';
import map from '../../assets/images/map.svg';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the features destinations sections.
// it has a map to show the top destinations and shows a card with details by hovering the landmarks.

export const Map = () => {
  const topLocations = useFetchData(
    'https://cozyplace.herokuapp.com/api/show/topLocations',
  );

  return (
    <>
      <Title> Features Destinations </Title>
      <StyledSection>
        <StyledMap>
          <MapImg src={map} alt="map of the world" />
          <Landmark
            data={topLocations.mexico1}
            left={280}
            top={380}
          />
          <Landmark
            data={topLocations.mexico2}
            left={330}
            top={390}
          />
          <Landmark
            data={topLocations.colombia2}
            left={380}
            top={460}
          />
          <Landmark
            data={topLocations.colombia1}
            left={420}
            top={470}
          />
        </StyledMap>
      </StyledSection>
    </>
  );
};
