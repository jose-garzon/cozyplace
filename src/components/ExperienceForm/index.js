// ------------------------------ import libraries
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// ------------------------------ import components
import { Rate } from '../Rate';
import { Icon } from '../Icons';
import { Button } from '../../global-styles/Buttons';
import { InputText, InputDate } from '../../global-styles/Inputs';
import { useGetMousePosition } from '../../hooks/useGetMousePosition';

// ------------------------------ import styles and images
import {
  ExpCreationContainer,
  ExpForm,
  Rating,
  Dropdown,
  Pics,
  Inputs,
  MainInputs,
  SubmitButtons,
} from './styles';

// -------- import redux actions
import { createPost } from '../../utils/createPost';
import { useFetchData } from '../../hooks/useFetchData';
import {
  showIndicator,
  setIndicatorPosition,
} from '../../actions/experiencesActions';
import { setSelection } from '../../actions/userActions';

// ------------------------------------ COMPONENT ------------------------------------//
export const ExperienceForm = () => {
  const dispatch = useDispatch();
  const mousePosition = useGetMousePosition();

  const tags = useFetchData(
    'https://cozyplace.herokuapp.com/api/tag/',
  );
  const [rating, setrating] = useState(1);
  const { token, _id } = useSelector(
    (state) => state.userReducer.userData,
  );
  const [form, setForm] = useState({
    user: _id,
    country: 'Mexico',
    location: 'Cancun',
    duration: '30 Min',
    tags: '5f9b54d3217dd209f45ecc55',
  });
  const history = useHistory();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setForm({
      ...form,
      [e.target.name]: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createPost(form, token);
    if (response.status === 200) {
      dispatch(
        showIndicator({
          status: true,
          message: 'Experience Successfully Created 🎉',
        }),
      );
      dispatch(setIndicatorPosition(mousePosition));
      dispatch(setSelection('favorites'));

      history.push('/user');
    } else if (response.status === 400) {
      dispatch(
        showIndicator({
          status: true,
          message: 'Missing data, fill in all the fields ❌',
        }),
      );
      dispatch(setIndicatorPosition(mousePosition));
    }
  };

  useEffect(() => {
    setForm({ ...form, rating });
  }, [rating]);

  return (
    <ExpCreationContainer>
      <h2>Create your experience</h2>
      <ExpForm onSubmit={handleSubmit}>
        <Inputs>
          <MainInputs>
            <InputText
              type="text"
              name="title"
              required="required"
              placeholder="Create Name of the Experience"
              onChange={handleChange}
            />
            <Dropdown name="country" onChange={handleChange}>
              <option value="Mexico">Mexico</option>
              <option value="Colombia">Colombia</option>
            </Dropdown>
            <Dropdown name="location" onChange={handleChange}>
              <option value="Mexico">Cancun</option>
              <option value="Mexico">Guadalajara</option>
              <option value="Mexico">Mexico City</option>
              <option value="Mexico">Monterrey</option>
              <option value="Mexico">Merida</option>
              <option value="Mexico">Oaxaca</option>
              <option value="Mexico">Puebla</option>
              <option value="Mexico">Queretaro</option>
              <option value="Medellin">Barranquilla</option>
              <option value="Bogota">Bogota</option>
              <option value="Medellin">Bucaramanga</option>
              <option value="Medellin">Cali</option>
              <option value="Medellin">Cartagena</option>
              <option value="Medellin">Medellin</option>
              <option value="Medellin">Santa Marta</option>
            </Dropdown>
            <Dropdown name="tags" onChange={handleChange}>
              {tags.map((tag) => (
                <option key={tag._id} value={tag._id}>
                  {tag.tagname}
                </option>
              ))}
            </Dropdown>
            <Dropdown name="duration" onChange={handleChange}>
              <option value="30 Min">30 Min</option>
              <option value="1 Hour">1 Hour</option>
              <option value="1.5 Hour">1.5 Hour</option>
              <option value="2 Hour">2 Hour</option>
              <option value="2.5 Hour">2.5 Hour</option>
              <option value="3 Hour">3 Hour</option>
              <option value="3.5 Hour">3.5 Hour</option>
              <option value="4 Hour">4 Hour</option>
              <option value="4.5 Hour">4.5 Hour</option>
              <option value="4.5 Hour">1 Day</option>
              <option value="4.5 Hour">2 Days</option>
              <option value="4.5 Hour">3 Days</option>
              <option value="4.5 Hour">4 Days</option>
            </Dropdown>
            <InputDate
              type="date"
              name="date"
              onChange={handleChange}
              required="required"
            />
            <Rating>
              <p>Rating Stars</p>
              <Rate setrating={setrating} rate={rating} />
            </Rating>
          </MainInputs>
          <Pics>
            <label htmlFor="image">
              {form.image ? (
                <img
                  src={form.image}
                  alt="this is your experience"
                  pic="true"
                />
              ) : (
                <Icon type="plus" />
              )}
              <input
                type="file"
                name="image"
                accept="image/jpg,png"
                id="image"
                onChange={handleFile}
              />
            </label>
          </Pics>
        </Inputs>
        <textarea
          name="description"
          maxLength="1500"
          placeholder="Create you description"
          onChange={handleChange}
          required="required"
        />
        <SubmitButtons>
          <Button name="cancel" onClick={() => history.push('/user')}>
            Cancelar
          </Button>
          <Button main type="submit">
            Crear
          </Button>
        </SubmitButtons>
      </ExpForm>
    </ExpCreationContainer>
  );
};
