import { AiOutlinePlus } from 'react-icons/ai'

const Footer = () => {
  const clickHandler = () => {
    console.log('Clicked')
  }
  return (
    <footer className="d-flex align-items-center justify-content-center footer">
      <span className="plus-icon"><AiOutlinePlus onClick={clickHandler} /></span>
    </footer>
  )
}

export default Footer
