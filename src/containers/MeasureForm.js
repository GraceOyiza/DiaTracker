import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import FormContainer from './FormContainer';
import Form from '../components/Form';
// import { login  } from '../reducers/userSlice';

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  goal: yup.string().required('Goal is required'),
  unit: yup.string().required('Unit is required'),
});

const MeasureForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const handleOnsubmit = async userObj => {
    const { title, unit, goal } = userObj;

    const userData = new FormData();

    userData.append('title', title);
    userData.append('goal', goal);
    userData.append('unit', unit);
    // login(userData);
  };
  return (
    <div className="measure__form">
      <FormContainer title="What do you want to measure">
      <Form handleSubmit={handleSubmit(handleOnsubmit)}>
        <div className="form-group">
          <span>Title</span>
          <input { ...register("title") } type="title" className="form-control" id="title" name="title" />
          <small className="text-danger">{errors?.title?.message}</small>
        </div>
        <div className="form-group">
          <span>Goal</span>
          <input { ...register("goal") } type="number" className="form-control" id="goal" name="goal" />
          <small className="text-danger">{errors?.goal?.message}</small>
        </div>
        <div className="form-group">
          <span>Unit</span>
          <input { ...register("unit") } type="text" className="form-control" id="unit" name="unit" />
          <small className="text-danger">{errors?.unit?.message}</small>
        </div>
        <button type="submit" className="btn btn-primary mt-4">Submit</button>
      </Form>
    </FormContainer>
    </div>
  )
}

export default MeasureForm
