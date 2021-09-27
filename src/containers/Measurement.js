import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Header from "../components/Header";
import Card from '../components/Card';

const Measurement = () => {
  return (
    <div className="measurements">
      <Header />
      <div className="text-center measurement">
        <div className="pt-4 pb-3 measurement-heading">
          <h6>7 September 2013</h6>

          <div className="d-flex align-items-center justify-content-between px-4">
          <p className="measurement-goal">Goal 200kg</p>
          <div className="charts">
            <CircularProgressbar
                value={60}
                strokeWidth={3}
                text={`70kg`}
                styles={buildStyles({
                  textColor: "red",
                  pathColor: "turquoise",
                  trailColor: "gold"
                })}
              />
              <small class="unit">Weight(kg)</small>
          </div>
        </div>
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      
    </div>
  )
}

export default Measurement
