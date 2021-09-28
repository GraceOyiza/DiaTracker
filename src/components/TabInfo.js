import { IoIosArrowForward } from 'react-icons/io';
import { format } from 'date-fns';
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TabInfo = ({ percentage, title, date, unit }) => {
    return (
      <div className="d-flex align-items-center justify-content-between px-4 py-3 tab-content">
        <div className="d-flex align-items-center">
          <div className="circle-range me-2">
            <CircularProgressbar
              value={percentage}
              strokeWidth={5}
              styles={buildStyles({
                textColor: "red",
                pathColor: "#97E493",
                trailColor: "#999999"
              })}
            />
          </div>
          <div className="d-flex flex-column justify-content-between measure-info">
            <h4 className="date">{format(new Date(date), 'MMM d yyyy')}</h4>
            <small className="percentage"> <span className="measure-type">{title}</span> <span className="measure-value">{percentage}</span></small>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <p>{percentage} {unit} <IoIosArrowForward /></p>
        </div>
      </div>
    )
}

export default TabInfo
