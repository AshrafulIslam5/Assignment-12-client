import React from 'react';
import ClipLoader from "react-spinners/DotLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 40px auto;
  border-color: purple;
`;
const Spinner = () => {
    const color = '#9400d3';
    return (
        <div className='text-center mt-8'>
            <ClipLoader color={color} css={override} size={60}/>
        </div>
    );
};

export default Spinner;