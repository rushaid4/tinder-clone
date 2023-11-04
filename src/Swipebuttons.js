import React from 'react';
import "./Swipebuttons.css";
import IconButton from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const swiped = (direction, nameToDelete) => {
  console.log("removing: " + nameToDelete);
};


function Swipebuttons() {
  return (
    <div classaName="swipeButtons">
      <IconButton onClick={swiped} className="swipeButtons__repeat">
        <ReplayIcon fontSize="large"/>
        </IconButton>   

        <IconButton onClick={swiped} className="swipeButtons__left">
        <CloseIcon fontSize="large"/>
        </IconButton>  

        <IconButton onClick={swiped} className="swipeButtons__star">
        <StarRateIcon fontSize="large"/>
        </IconButton>  

        <IconButton onClick={swiped} className="swipeButtons__flash">
        <FlashOnIcon fontSize="large"/>
        </IconButton>  

        <IconButton onClick={swiped} className="swipeButtons__right">
        <FavoriteIcon fontSize="large"/>
        </IconButton>  
        </div>
  )
}

export default Swipebuttons