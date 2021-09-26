import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import FormContainer from './FormContainer';
import Form from '../components/Form';
import { login  } from '../reducers/userSlice';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const handleOnsubmit = async userObj => {
    const { email, password } = userObj;

    const userData = new FormData();

    userData.append('email', email);
    userData.append('password', password);
    login(userData);
  };
  return (
    <FormContainer title="Login">
      <Form handleSubmit={handleSubmit(handleOnsubmit)}>
        <div className="form-group">
          <span>Email address</span>
          <input { ...register("email") } type="email" className="form-control" id="email" name="email" />
          <small className="text-danger">{errors?.email?.message}</small>
        </div>
        <div className="form-group">
          <span>Password</span>
          <input { ...register("password") } type="password" className="form-control" id="password" name="password" />
          <small className="text-danger">{errors?.password?.message}</small>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </Form>
    </FormContainer>
  );
};

export default Login;
