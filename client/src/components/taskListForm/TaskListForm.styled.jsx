import styled from 'styled-components';
import Input from '@material-ui/core/Input';

export const TaskListFormStyled = styled.form`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const TaskListFormSection = styled.div`
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

export const TaskListSaveButton = styled.button`
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

export const TaskListTitleAndCreate = styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;
`;

export const TaskListTitleInput = styled(Input)`
    width: 200px;
`;

export const TaskListFormLeft = styled.div`
    width: 400px;
`;

export const TaskListFormRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const TagsAndCustomFields = styled.div`
    display: flex;
`;