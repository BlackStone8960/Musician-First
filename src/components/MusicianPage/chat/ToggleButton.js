import React from 'react';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const ToggleButton = ({ isHidden, isClicked }) => {
  return (
    <div onClick={isClicked} className={isHidden ? "toggle-button-up" : "toggle-button-down"}>
      {isHidden ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
    </div>
  )
}

export default ToggleButton
