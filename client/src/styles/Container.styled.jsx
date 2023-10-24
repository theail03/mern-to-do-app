import styled, { css } from 'styled-components';
import Container from '@material-ui/core/Container';

const container = css`
    display: flex;
`;

export const ContainerStyled = styled(Container)`
    ${container}
`;

export const RouteContainer = styled.div`
    ${container}
`;
