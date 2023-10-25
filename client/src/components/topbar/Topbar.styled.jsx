import styled from 'styled-components';
import { colors } from '../../constants/Theme';

export const TaskListFormStyled = styled.form`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const TopbarStyled = styled.div`
    width: 100%;
    height: 50px;
    background-color: ${colors.color2};
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
    color: ${colors.color4};
    cursor: default;
`;

export const TopRight = styled.div`
    display: flex;
    align-items: center;
`;
