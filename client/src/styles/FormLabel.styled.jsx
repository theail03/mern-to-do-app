import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core';
import { primaryFont } from '../constants/Theme';

export const FormLabelStyled = withStyles({
    root: {
        fontFamily: primaryFont
    }
})(FormLabel);