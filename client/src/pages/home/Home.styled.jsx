import styled from 'styled-components';
import { boxStyles } from '../../constants/Theme';

export const Box = styled.div`
    ${boxStyles}
    flex: 1;
`;

export const ResponsiveRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    gap: 20px;

    @media (max-width: 992px) {
        flex-direction: column;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    gap: 20px;
`;

export const BoxTitle = styled.h2`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
`;

export const BoxContent = styled.p`
    font-weight: 300;
`;
