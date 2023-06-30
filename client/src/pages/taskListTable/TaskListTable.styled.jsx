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

export const TableActions = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
    margin-bottom: 20px;
`;

export const ExportAllButton = styled(SimpleButton)`
    background-color: lightpink;
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