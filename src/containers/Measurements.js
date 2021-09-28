import Tab from '../components/Tab';
import Header from '../components/Header';
import { selectReadings } from '../reducers/readingSlice';
import { setReadings } from '../reducers/readingSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '../services/request';
import Footer from '../components/Footer';

const Measurements = () => {
  const readings = useSelector(selectReadings);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUser = async () => {
      const { measures } = await getUser();
      dispatch(setReadings(measures))
    }
    fetchUser();
  }, []);
  let content = <h3>Add Measurements To See Them Here.</h3>
  console.log(readings, 'out')

  if(readings?.length) {
    console.log(readings, 'in')
    content = readings.map((reading) => (<Tab />))
  }
  
  return (
    <div className="measurements">
      <Header />
      <div className="tabs">
        { content }       
      </div>
      <Footer url='/measurements/categories/new' />
    </div>
  )
}

export default Measurements
