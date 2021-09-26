import React from 'react'

const Tab = () => {
  return (
    <div className="tab">
      <h6 className="tab-title">Today</h6>
      <div className="d-flex align-items-center justify-content-between tab-content">
        <div className="d-flex align-items-center">
          <div className="circle-range">O</div>
          <div className="measure-info">
            <h4 className="date">Sept 5 2013</h4>
            <small className="percentage"> <span className="measure-type">Body fat</span> <span className="measure-value">-4%</span></small>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <p>-0.4kg<i>&gt;</i></p>
        </div>
      </div>
    </div>
  )
}

export default Tab
