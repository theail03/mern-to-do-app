import styled, { css } from 'styled-components';
import { colors } from '../constants/Theme';

export const simpleButton = css`
    background-color: ${(props) => props.backgroundColor};
    color: ${colors.color3};
    margin-right: 20px;

    border: none;
    height: 28px;
    padding: 0px 10px;
    cursor: pointer;
    
    /* font */
    font-size: 14px;
    font-weight: 500;

    display: flex;
    align-items: center;
`;

export const SimpleButton = styled.button`
    ${simpleButton}
`;
