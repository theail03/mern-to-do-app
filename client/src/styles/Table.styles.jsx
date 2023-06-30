import styled from 'styled-components';
import { DeleteOutline } from "@material-ui/icons";
import { Page } from './Page.styled';
import { SimpleButton } from './SimpleButton.styled';

export const Table = styled(Page)`
    margin-right: 25px;
    margin-bottom: 25px;
`;

export const EditButton = styled(SimpleButton)`
    border-radius: 10px;
    background-color: #3bb077;
    color: white;
    margin-right: 20px;
`;

export const DeleteButton = styled(DeleteOutline)`
    color: red;
    cursor: pointer;
`;