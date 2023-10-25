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

    & > input {
        padding: 10px;
    }

    & > select {
        padding: 10px;
    }
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