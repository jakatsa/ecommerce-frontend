import React from 'react'
import './Navbar.css';
import toggle_light from '../../assets/night.png';
import toggle_dark from '../../assets/day.png';

const Navbar = ({theme, setTheme}) => {

    const toggle_mode = ()=>{
      theme ==  "light" ? setTheme("dark") :  setTheme("light");
    }
 
  return (
    <div className='navbar'>
        <ul>
            <li>Home</li>
            <li>Login</li>
        </ul>

        <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? toggle_light: toggle_dark} alt="" className='toggle-icon'/>

    </div>
    
  )
}

export default Navbar
