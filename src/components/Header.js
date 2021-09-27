import { AiOutlinePlus } from 'react-icons/ai'

const Header = ({ clickHandler, showIcon }) => {
  let icon = ''
  if(showIcon) {
    icon = <span className=" position-absolute plus-icon"><AiOutlinePlus onClick={clickHandler} /></span>
  }
  return (
    <div className="d-flex align-items-end justify-content-center position-relative header">
      <h3 className="heading">DiaTrack</h3>
      {icon}
    </div>
  )
}

export default Header
