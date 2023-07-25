import styled from 'styled-components';
import { simpleButton } from '../../styles/SimpleButton.styled';

export const ImportButton = styled.label`
    ${simpleButton}
    background-color: lightskyblue;
    color: white;
    margin-right: 20px;
`;

export const ImportInput = styled.input`
    display: none;
`;