import Tab from '../components/Tab';
import Header from '../components/Header';

const Measurements = () => {
  const addIconHandle = () => {
    console.log('Clicked')
  }
  return (
    <div className="measurements">
      <Header clickHandler={addIconHandle} />
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
