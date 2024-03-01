import { css } from 'styled-components';

// Theme.jsx
export const primaryFont = 'Source Sans Pro, sans-serif';

export const shadowStyles = css`
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

export const boxStyles = css`
    padding: 20px;
    ${shadowStyles}
`;

export const multiselectStyles = {
    chips: {
        background: "gray",
    },
    option: {
        background: "inherit",
        color: "inherit"  
    }
};
  