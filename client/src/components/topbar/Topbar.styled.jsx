import styled from 'styled-components';
import { simpleButton } from '../../styles/SimpleButton.styled';

export const TaskListFormStyled = styled.form`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const TopbarStyled = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 999;
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
    color: blue;
`;

export const TopRight = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoutButton = styled.button`
    ${simpleButton}
    background-color: red;
    color: white;
    margin-right: 20px;
`;