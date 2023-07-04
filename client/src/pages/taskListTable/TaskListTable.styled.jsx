import styled from 'styled-components';
import { simpleButton, SimpleButton } from '../../styles/SimpleButton.styled';

export const SeeTasksButton = styled(SimpleButton)`
    border-radius: 10px;
    background-color: blue;
    color: white;
    margin-right: 20px;
`;

export const ExportListButton = styled(SimpleButton)`
    border-radius: 10px;
    background-color: purple;
    color: white;
    margin-right: 20px;
`;

export const ImportButton = styled.label`
    ${simpleButton}
    background-color: lightskyblue;
    color: white;
    margin-right: 20px;
`;

export const ImportInput = styled.input`
    display: none;
`;