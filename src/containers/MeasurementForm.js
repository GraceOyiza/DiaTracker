import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import FormContainer from './FormContainer';
import Form from '../components/Form';
// import { login  } from '../reducers/userSlice';

const schema = yup.object().shape({
  value: yup.string().required('Measurement is required'),
  date: yup.string().required('Date is required'),
});

const MeasurementForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const handleOnsubmit = async userObj => {
    const { title, unit, goal } = userObj;

    const userData = new FormData();

    userData.append('value', title);
    userData.append('date', goal);
    userData.append('unit', unit);
    // login(userData);
  };
  return (
    <div className="measure__form">
      <FormContainer title="What do you want to measure">
      <Form handleSubmit={handleSubmit(handleOnsubmit)}>
        <div className="form-group">
          <span>Value</span>
          <input { ...register("value") } type="number" className="form-control" id="value" step="0.01" name="value" />
          <small className="text-danger">{errors?.value?.message}</small>
        </div>
        <div className="form-group">
          <span>Date</span>
          <input { ...register("date") } type="datetime-local" className="form-control" id="date" name="date" />
          <small className="text-danger">{errors?.date?.message}</small>
        </div>
        <button type="submit" className="btn btn-primary mt-4">Submit</button>
      </Form>
    </FormContainer>
    </div>
  )
}

export default MeasurementForm
