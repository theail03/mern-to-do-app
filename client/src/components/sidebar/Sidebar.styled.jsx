import styled, { css } from 'styled-components';
import {
    List,
    PlaylistAddTwoTone,
  } from "@material-ui/icons";
import { colors } from '../../constants/Theme';

export const SidebarStyled = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    background-color: ${colors.color5};
    position: sticky;
    top: 50px;
`;

export const SidebarWrapper = styled.div`
    padding: 20px;
    color: ${colors.color4};
`;

export const SidebarMenu = styled.div`
    margin-bottom: 10px;
`;

export const SidebarTitle = styled.h3`
    font-size: 13px;
    color: ${colors.color3};
`;

export const SidebarList = styled.ul`
    list-style: none;
    padding: 5px;
`;

export const SidebarListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;

    &:hover {
        background-color: ${colors.color2};
    }
`;

const sidebarIcon = css`
    margin-right: 5px;
    font-size: 20px !important;
`;

export const SidebarListIcon = styled(List)`
    ${sidebarIcon}
`;

export const SidebarAddIcon = styled(PlaylistAddTwoTone)`
    ${sidebarIcon}
`;
  