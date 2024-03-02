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
    width: 200px;
`;

export const TaskFormStyled = styled.form`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    ${boxStyles}
`;

export const TaskFormSection = styled.div`
    width: 400px;
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
    width: 500px;
`;

export const TaskTitleInput = styled(Input)`
    width: 400px;
`;

export const TaskFormLeft = styled.div`
    width: 440px;
`;

export const TaskFormRight = styled.div`
`;

export const TaskInfo = styled.div`
    display: flex;
`;