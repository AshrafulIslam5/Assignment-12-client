import React from 'react';
import ClipLoader from "react-spinners/DotLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  border-color: purple;
`;
const HeaderSpinner = () => {
    const color = '#9400d3';
    return (
        <div className='text-center'>
            <ClipLoader color={color} css={override} size={45} speedMultiplier={7}/>
        </div>
    );
};

export default HeaderSpinner;