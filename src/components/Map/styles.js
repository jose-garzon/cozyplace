// ------------------------------ import libraries
import styled from 'styled-components';
import { media } from '../../global-styles/MediaQueries';

// ------------------------------ import variables
import { colors, spacing } from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const StyledSection = styled.section`
  margin: ${spacing.space3} 0 ${spacing.space3} ${spacing.space4};
  overflow: auto;

  ${media.mobile} {
    margin: 0;
  }

  &::-webkit-scrollbar {
    width: 0;
    height: 8px;
    background: ${colors.secondaryBackgroundColor};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    ${colors.mainBackgroundColor}
  }
`;

export const StyledMap = styled.div`
  position: relative;
  width: 1500px;
  margin: 0 auto;
`;

export const MapImg = styled.img`
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin: ${spacing.space3} 0 ${spacing.space3} ${spacing.space4};
  ${media.mobile} {
    margin-left: ${spacing.space2};
  }
`;
