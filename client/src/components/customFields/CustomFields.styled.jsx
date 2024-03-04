import styled, { css } from 'styled-components';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';

export const CustomField = styled.div`
    display: flex;
    margin-bottom: 25px;
`;

export const CustomFieldAttributes = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
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
    flex: 1;
    margin-bottom: 10px;
`;

export const CustomFieldInput = styled(Input)`
    ${inputStyles}
`;

export const CustomFieldSelect = styled(Select)`
    ${inputStyles}
`;