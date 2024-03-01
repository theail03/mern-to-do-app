import styled from 'styled-components';
import { Delete, Edit, Visibility, GetApp, Add } from "@material-ui/icons";
import  { DataGrid } from "@material-ui/data-grid";
import { withStyles } from '@material-ui/core';

// Function that accepts an Icon and returns a styled icon
const createStyledIcon = (Icon, color) => styled(Icon)`
    color: ${color || "gray"};
    cursor: pointer;
    // center the icon vertically
    vertical-align: middle;
    margin-right: 20px;
`;

export const AddButton = createStyledIcon(Add);
export const SeeButton = createStyledIcon(Visibility);
export const ExportButton = createStyledIcon(GetApp);
export const EditButton = createStyledIcon(Edit);
export const DeleteButton = createStyledIcon(Delete, "red");

export const TableActions = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
`;

export const DataGridStyled = withStyles({
    row: {
        // change color of <a> tags in rows
        '& a': {
            color: 'inherit',
        },
    },
})(DataGrid);