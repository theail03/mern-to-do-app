import styled from 'styled-components';
import { simpleButton } from '../../styles/SimpleButton.styled';

export const SeeTasksButton = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: blue;
    color: white;
    cursor: pointer;
    margin-right: 20px;
`;

export const ExportListButton = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: purple;
    color: white;
    cursor: pointer;
    margin-right: 20px;
`;

export const TableActions = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
    margin-bottom: 20px;
`;

export const ExportAllButton = styled.button`
    ${simpleButton}
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