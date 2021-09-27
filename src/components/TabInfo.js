import { IoIosArrowForward } from 'react-icons/io';
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TabInfo = () => {
  return (
    <div className="d-flex align-items-center justify-content-between px-4 py-3 tab-content">
        <div className="d-flex align-items-center">
          <div className="circle-range me-2">
            <CircularProgressbar
              value={60}
              strokeWidth={3}
              styles={buildStyles({
                textColor: "red",
                pathColor: "turquoise",
                trailColor: "gold"
              })}
            />
          </div>
          <div className="d-flex flex-column justify-content-between measure-info">
            <h4 className="date">Sept 5 2013</h4>
            <small className="percentage"> <span className="measure-type">Body fat</span> <span className="measure-value">-4%</span></small>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <p>-0.4kg <IoIosArrowForward /></p>
        </div>
      </div>
  )
}

export default TabInfo
