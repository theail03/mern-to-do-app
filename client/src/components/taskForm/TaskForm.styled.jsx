import styled from 'styled-components';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';

export const TaskFormLabel = styled(FormLabel)`
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
`;

export const TaskFormSection = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    & > label {
        color: gray;
        font-weight: 1;
        margin-bottom: 0px;
    }

    & > input {
        padding: 10px;
    }

    & > select {
        padding: 10px;
    }    
`;

export const TaskSaveButton = styled.button`
    height: 30px;
    margin-top: 10px;
    padding: 7px 10px;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-weight: 600;
    cursor: pointer;
    align-self: center;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const TaskInfo = styled.div`
    display: flex;
`;