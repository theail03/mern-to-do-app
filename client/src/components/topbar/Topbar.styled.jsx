import styled from 'styled-components';
import { MenuItem } from "@material-ui/core";
import { withStyles } from '@material-ui/core';
import { shadowStyles } from '../../constants/Theme';

export const TopbarStyled = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 999;
    ${shadowStyles}
`;
  
export const TopbarWrapper = styled.div`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.span`
    font-weight: bold;
    font-size: 30px;
    color: darkblue;
    cursor: default;
`;

export const TopLeft = styled.div`
    display: flex;
    align-items: center;
`;

export const TopRight = styled.div`
    display: flex;
    align-items: center;
`;

export const MenuItemStyled = withStyles({
    root: {
      fontFamily: '"Source Sans Pro", sans-serif',
      padding: '4px 16px', // Adjust this value to decrease the padding as needed
    }
  })(MenuItem);
