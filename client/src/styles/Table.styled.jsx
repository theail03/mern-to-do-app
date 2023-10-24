import styled, { css } from 'styled-components';
import { DeleteOutline, EditOutlined, VisibilityOutlined, GetAppOutlined, AddOutlined } from "@material-ui/icons";
import { Page } from './Page.styled';
import { SimpleButton } from './SimpleButton.styled';
import  { DataGrid } from "@material-ui/data-grid";
import { colors } from '../constants/Theme';
import { withStyles } from '@material-ui/core';

export const Table = styled(Page)`
    margin-right: 25px;
    margin-top: 25px;
    margin-bottom: 75px;
`;

const rowActionButton = css`
    cursor: pointer;
    // center the icon vertically
    vertical-align: middle;
    margin-right: 20px;
`;

export const AddButton = styled(AddOutlined)`
    color: ${colors.color2};
    ${rowActionButton}
`;

export const SeeButton = styled(VisibilityOutlined)`
    color: ${colors.color2};
    ${rowActionButton}
`;

export const ExportButton = styled(GetAppOutlined)`
    color: ${colors.color2};
    ${rowActionButton}
`;

export const EditButton = styled(EditOutlined)`
    color: ${colors.color2};
    ${rowActionButton}
`;

export const DeleteButton = styled(DeleteOutline)`
    color: ${colors.color2};
    ${rowActionButton}
`;

export const TableActions = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
    margin-bottom: 20px;
`;

export const TableActionsButton = styled(SimpleButton)`
    background-color: ${(props) => props.backgroundColor};
    color: ${colors.color3};
    margin-right: 20px;
`;

export const DataGridStyled = withStyles({
    row: {
        // change color of <a> tags in rows
        '& a': {
            color: colors.color2,
        },
    },
})(DataGrid);