import styled from 'styled-components';
import { simpleButton } from '../../styles/SimpleButton.styled';
import { colors } from '../../constants/Theme';

export const ImportButton = styled.label`
    ${simpleButton}
    background-color: ${colors.color5};
    color: ${colors.color3};
    margin-right: 20px;
`;

export const ImportInput = styled.input`
    display: none;
`;