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
    gap: 20px;
`;

export const TaskListTitleInput = styled(Input)`
    flex: 1;
`;

export const TaskListFormLeft = styled.div`
    flex: 1;
`;

export const TaskListFormRight = styled.div`
    flex: 1;
`;

export const TagsAndCustomFields = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: 992px) {
        flex-direction: column;
    }
`;