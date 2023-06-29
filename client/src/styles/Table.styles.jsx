import styled from 'styled-components';
import { DeleteOutline } from "@material-ui/icons";
import { Page } from './Page.styled';

export const Table = styled(Page)`
    margin-right: 25px;
    margin-bottom: 25px;
`;

export const EditButton = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
`;

export const DeleteButton = styled(DeleteOutline)`
    color: red;
    cursor: pointer;
`;