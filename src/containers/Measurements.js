import Tab from '../components/Tab';
import Header from '../components/Header';
import { selectUser } from '../reducers/userSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Measurements = () => {
  const user = useSelector(selectUser);
  useEffect(() => {
    const fetchUser = async () => {
      
    }

    fetchUser();
  })
  
  return (
    <div className="measurements">
      <Header />
      <div className="tabs">
        <Tab />       
        <Tab />       
        <Tab />       
        <Tab />       
        <Tab />       
        <Tab />       
        <Tab />       
      </div>
    </div>
  )
}

export default Measurements
