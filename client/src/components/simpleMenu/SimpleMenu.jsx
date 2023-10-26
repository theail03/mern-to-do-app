import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import { SimpleButton } from '../../styles/SimpleButton.styled';
import { colors } from '../../constants/Theme';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <SimpleButton backgroundColor={colors.color2}
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {props.buttonText ?? "Menu"} <ArrowDropDownIcon fontSize="small"/>
      </SimpleButton>
      <Menu
        id="fade-menu"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        {props.children}
      </Menu>
    </div>
  );
}
