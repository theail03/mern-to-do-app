import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import { FormLabelStyled } from '../../styles/FormLabel.styled';
import { boxStyles } from "../../constants/Theme.jsx";

export const TaskFormLabel = styled(FormLabelStyled)`
    width: 100px;
    height: 20px;
`;

export const SelectTaskList = styled(Select)`
`;

export const TaskFormStyled = styled.form`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    ${boxStyles}
`;

export const TaskFormSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    & > input {
        padding: 10px;
    }

    & > select {
        padding: 10px;
    }    
`;

export const TaskTitleAndCreate = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
`;

export const TaskTitleInput = styled(Input)`
    flex: 1;
`;

export const TaskFormLeft = styled.div`
    flex: 1;
`;

export const TaskFormRight = styled.div`
    flex: 1;
`;

export const TaskInfo = styled.div`
    display: flex;
    gap: 20px;
`;