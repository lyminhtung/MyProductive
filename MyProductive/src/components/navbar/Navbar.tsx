import './Navbar.css'
import clock_logo from '../../assets/clock_logo.png'
function Navbar() {
  return (
    <div className='navbar_container'>
        <div className='navbar_logo_container'>
            <div>
                <img className='navbar_logo' src={clock_logo} alt="" />
            </div>
            <div className='navbar_title_logo'> 
                <h3 style={{padding:0 , margin:0}}>My</h3>
                <h3 style={{padding:0, margin: 0}}>Productive</h3>
            </div>
        </div>
        <div className='navbar_date_container'>
            <div><p className='navbar_date'>Thursday</p></div>
            <div><p style={{color : '#5998F1'}} className='nvabar_time'>24/07/2025</p></div>
        </div>
    </div>
  )
}

export default Navbar
