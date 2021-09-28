import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = ({ url }) => {
  return (
    <footer className="d-flex align-items-center justify-content-center footer">
      <Link to={url}><span className="plus-icon"><AiOutlinePlus/></span></Link>
    </footer>
  )
}

export default Footer
