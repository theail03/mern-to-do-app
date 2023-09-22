import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { CellTruncate } from './TooltipCell.styled';
import { Link } from "react-router-dom";

function TooltipCell(props) {
    return (
        <Tooltip title={props.data}>
            {/* cell type */}
            { props.cellType === "link" ? 
                <CellTruncate>
                    <Link
                        to={{ pathname: props.pathname }}
                    >
                        { props.data }
                    </Link>
                </CellTruncate>
            // default to text
            : 
                <CellTruncate>{ props.data }</CellTruncate>
            }
        </Tooltip>
    );
}

export default TooltipCell;