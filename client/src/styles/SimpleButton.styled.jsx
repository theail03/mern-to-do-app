import styled, { css } from 'styled-components';

export const simpleButton = css`
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    
    /* font */
    font-size: 14px;
    font-weight: 500;
`;

export const SimpleButton = styled.button`
    ${simpleButton}
`;
