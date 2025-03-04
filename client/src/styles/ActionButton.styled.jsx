import styled, { css } from 'styled-components';

export const actionButton = css`
    background-color: teal;
    color: white;

    border: none;
    border-radius: 5px;
    height: 28px;
    padding: 0px 10px;
    cursor: pointer;
    
    /* font */
    font-size: 14px;
    font-weight: 500;

    display: flex;
    align-items: center;
`;

export const ActionButton = styled.button`
    ${actionButton}
`;
