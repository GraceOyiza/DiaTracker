import { AiOutlinePlus } from 'react-icons/ai'

const Header = ({ clickHandler }) => {
  return (
    <div className="d-flex align-items-end justify-content-center position-relative header">
      <h3 className="heading">DiaTrack</h3>
      <span className=" position-absolute plus-icon"><AiOutlinePlus onClick={clickHandler} /></span>
    </div>
  )
}

export default Header
