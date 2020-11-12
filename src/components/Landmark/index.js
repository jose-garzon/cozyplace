// ------------------------------ import libraries
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

// ------------------------------ import styles and images
import { LandmarkIcon } from './styles';
import landmarkIcon from '../../assets/images/mapLandmark.svg';
import { useGetMousePosition } from '../../hooks/useGetMousePosition';

// -------- import redux actions
import {
  showLocation,
  hideLocation,
  setMouseCoordinates,
  setLocationData,
} from '../../actions/mapActions';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the landmark icon of the landing page map

export const Landmark = ({ left, top, data }) => {
  const dispatch = useDispatch();
  const mousePosition = useGetMousePosition();
  const section = useRef();

  // this functions show the location card and the coordinates
  function showLocationCard() {
    dispatch(showLocation());
    dispatch(setMouseCoordinates(mousePosition));
    dispatch(setLocationData(data));
  }
  function hideLocationCard() {
    dispatch(hideLocation());
    dispatch(setMouseCoordinates({ x: 0, y: 0 }));
  }

  // this functions show the location card and the coordinates
  // using the keybord
  function focusShowLocationCard() {
    dispatch(showLocation());
    dispatch(
      setMouseCoordinates({
        x:
          section.current.offsetParent.offsetLeft +
          section.current.offsetLeft +
          section.current.clientHeight,
        y:
          section.current.offsetParent.offsetTop +
          section.current.offsetTop,
      }),
    );
    dispatch(setLocationData(data));
  }

  return (
    <LandmarkIcon
      ref={section}
      onMouseEnter={showLocationCard}
      onMouseOut={hideLocationCard}
      onFocus={focusShowLocationCard}
      onBlur={hideLocationCard}
      onClick={showLocationCard}
      type="image"
      src={landmarkIcon}
      left={`${left}px`}
      top={`${top}px`}
      alt="landmark icon"
    />
  );
};
