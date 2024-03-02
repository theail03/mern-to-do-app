import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import { boxStyles } from '../../constants/Theme';

export const TaskListFormStyled = styled.form`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    ${boxStyles}
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
    width: 500px;
`;

export const TaskListTitleInput = styled(Input)`
    width: 400px;
`;

export const TaskListFormLeft = styled.div`
    width: 440px;
`;

export const TaskListFormRight = styled.div`
    width: 440px;
`;

export const TagsAndCustomFields = styled.div`
    display: flex;
`;