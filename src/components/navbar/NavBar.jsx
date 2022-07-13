import Button from '../button'
import Avatar from '../avatar';
import './style.css'
function NavBar() {
  return (
    <div className='navbar-wrapper'>
      <Button value="Home" />
      <Button value="About" />
      <Avatar />
    </div>
  )
}

export default NavBar;