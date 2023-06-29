import React from 'react'
import './Topbar.css'
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Link } from 'react-router-dom';
const Topbar = () => {
  return (
    <div className='topbar'>
    <div className='topbarWrapper bg-gradient-to-r  from-[#ad5389] to-[#3c1053] text-slate-50'>
        <div className='topLeft'>
        <span className="logo">
          <Link to='/'>  
          Maduka SMEs
          </Link>
          </span>
        </div>
        <div className='topRight'>
        <div className="topbarIconContainer">
                <NotificationsNone />
                <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                <Language />
                <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                <Settings />
              </div>
              <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
    </div>
        </div>
  )
}

export default Topbar