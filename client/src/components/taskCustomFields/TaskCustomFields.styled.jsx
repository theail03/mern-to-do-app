import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import { FormLabelStyled } from '../../styles/FormLabel.styled';

export const TaskCustomField = styled.div`
    display: flex; 
    align-items: center;
    justify-content: end;

    & > label {
        margin-right: 25px;
    }
`;

export const TaskCustomFieldsStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;

export const TaskCustomFieldInput = styled(Input)`
    flex: 1;
    margin-bottom: 10px;
`;

export const TaskCustomFieldsLabel = styled(FormLabelStyled)`
    height: 25px;
`;