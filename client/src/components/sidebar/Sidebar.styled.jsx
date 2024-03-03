import styled, { css } from 'styled-components';
import {
    List,
    PlaylistAddTwoTone,
  } from "@material-ui/icons";

export const SidebarStyled = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    background-color: rgb(251, 251, 255);
    position: sticky;
    top: 50px;
    z-index: 1;    
`;

export const SidebarWrapper = styled.div`
    padding: 20px;
    color: #555;
`;

export const SidebarMenu = styled.div`
    margin-bottom: 10px;
`;

export const SidebarTitle = styled.h3`
    font-size: 13px;
    color: rgb(187, 186, 186);
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
        background-color: rgb(240, 240, 255);
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
  