import styled, { css } from 'styled-components';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';

export const CustomField = styled.div`
    display: flex;
    margin-bottom: 25px;
    justify-content: space-between;
`;

export const CustomFieldAttributes = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CustomFieldAttribute = styled.div`
    display: flex;
    align-items: center;

    & > label {
        width: 75px;
    }
`;

export const CustomFieldButtons = styled.div`
    margin-top: 15px;
`;

const inputStyles = css`
    width: 200px;
    margin-bottom: 10px;
`;

export const CustomFieldInput = styled(Input)`
    ${inputStyles}
`;

export const CustomFieldSelect = styled(Select)`
    ${inputStyles}
`;