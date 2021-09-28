import { IoIosArrowForward } from 'react-icons/io';
import { formatDate } from '../services/common';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from 'react-router-dom';
import { selectReadings, setReading } from '../reducers/readingSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const TabInfo = ({ percentage, title, date, unit, id }) => {
  const readings = useSelector(selectReadings);
  const dispatch = useDispatch();

  const handleClick = async () => {
    const reading = readings.find((measure) => measure.id === id)
    dispatch(setReading(reading))
  }
    return (
      <Link onClick={handleClick} to={`measurements/${id}`} >
        <div className="d-flex align-items-center justify-content-between px-4 py-3 tab-content">
          <div className="d-flex align-items-center">
            <div className="circle-range me-2">
              <CircularProgressbar
                value={percentage}
                strokeWidth={5}
                styles={buildStyles({
                  pathColor: "#97E493",
                  trailColor: "#999999"
                })}
              />
            </div>
            <div className="d-flex flex-column justify-content-between measure-info">
              <h4 className="date">{formatDate(date)}</h4>
              <small className="percentage"> <span className="measure-type">{title}</span> <span className="measure-value">{parseFloat(percentage).toFixed(1)}</span></small>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <p>{parseFloat(percentage).toFixed(1)} {unit} <IoIosArrowForward /></p>
          </div>
        </div>
      </Link>
    )
}

export default TabInfo
