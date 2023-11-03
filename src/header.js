import React from 'react'
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';


function Header() {

  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontsize="large" className="header_icon" />
      </IconButton>

      <img className="header_logo"
        src="https://yt3.googleusercontent.com/ytc/APkrFKbmQS9QOVt_tdJafBowXAZgl2ET3Gv6h3H261ee=s900-c-k-c0x00ffffff-no-rj"
        alt=" logo" />

      <IconButton>
        <ForumIcon fontSize='large' className="header_icon" />
      </IconButton>

    </div>



  )
}

export default Header;