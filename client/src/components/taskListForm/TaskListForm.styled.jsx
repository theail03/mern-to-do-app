import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import { colors } from '../../constants/Theme';

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
        color: ${colors.color1};
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