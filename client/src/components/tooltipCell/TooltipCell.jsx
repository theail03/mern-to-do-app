import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { CellTruncate } from './TooltipCell.styled';

function TooltipCell(props) {
    return (
        <Tooltip title={props.data}>
            <CellTruncate>{props.data}</CellTruncate>
        </Tooltip>
    );
}

export default TooltipCell;