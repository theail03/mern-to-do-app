import styled from 'styled-components';
import { DeleteOutline, EditOutlined, VisibilityOutlined, GetAppOutlined, AddOutlined } from "@material-ui/icons";
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

export const AddButton = createStyledIcon(AddOutlined);
export const SeeButton = createStyledIcon(VisibilityOutlined);
export const ExportButton = createStyledIcon(GetAppOutlined);
export const EditButton = createStyledIcon(EditOutlined);
export const DeleteButton = createStyledIcon(DeleteOutline, "red");

export const TableActions = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
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