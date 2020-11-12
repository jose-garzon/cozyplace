// ------------------------------ import libraries
import React, { forwardRef } from 'react';
import ReactDom from 'react-dom';
import { useSelector } from 'react-redux';

// ------------------------------ import styles and images
import { Indicator } from './styles';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const ResulIndicator = forwardRef((props, ref) => {
  const { showIndicator, mouseCoordinates } = useSelector(
    (state) => state.experiencesReducer,
  );
  const actionType = showIndicator.message.includes('❌');

  return ReactDom.createPortal(
    <Indicator
      ref={ref}
      actionType={actionType}
      show={showIndicator.status}
      left={`${mouseCoordinates.x}px`}
      top={`${mouseCoordinates.y}px`}
    >
      <div> {showIndicator.message} </div>
    </Indicator>,
    document.getElementById('alert'),
  );
});
