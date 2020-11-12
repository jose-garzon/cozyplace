// ------------------------------ import libraries
import React from 'react';
import { useSelector } from 'react-redux';

// ------------------------------ import components
import { HostCard } from '../HostCard';
import { HostTravel } from '../HostTravel';
import { Reviews } from '../Reviews';
import userIcon from '../../assets/images/userIcon.svg';

// ------------------------------ import styles and images
import { BlockExp, DescriptionExp, DetailsHost } from './style';

// ------------------------------------ COMPONENT ------------------------------------//

export const ExperienceHost = () => {
  const current = useSelector(
    (state) => state.experiencesReducer.current,
  );

  const {
    title,
    description,
    location,
    duration,
    tags,
    rating,
    user,
  } = current;
  const experienceUser =
    user?.length > 0 ? user[0]?.fullname : 'Jon Doe';

  function validatePostUserImage() {
    let image;
    if (user?.length === 0) {
      image = userIcon;
    } else if (user && user[0]?.image === '') {
      image = userIcon;
    } else {
      image = user && user[0]?.image;
    }
    return image;
  }
  const userImage = validatePostUserImage();

  return (
    <BlockExp>
      <h1>{title}</h1>
      <DescriptionExp>
        <DetailsHost>
          <HostCard
            userImg={userImage}
            name={experienceUser}
            rating={rating ? rating[0] : null}
          />
          <div>
            <h3>What you will do</h3>
            <p>{description}</p>
          </div>
        </DetailsHost>
        <article>
          <HostTravel
            location={location}
            duration={duration}
            tag={tags ? tags[0].tagname : null}
          />
        </article>
      </DescriptionExp>
    </BlockExp>
  );
};
