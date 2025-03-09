import React from 'react'
import { SvgIcon } from "@mui/material";

const BasicDetail = ({color}) => {
  return (
    <SvgIcon fontSize='small'>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.3337 8.33268V12.4993C18.3337 16.666 16.667 18.3327 12.5003 18.3327H7.50033C3.33366 18.3327 1.66699 16.666 1.66699 12.4993V7.49935C1.66699 3.33268 3.33366 1.66602 7.50033 1.66602H11.667"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18.3337 8.33268H15.0003C12.5003 8.33268 11.667 7.49935 11.667 4.99935V1.66602L18.3337 8.33268Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.83301 10.834H10.833"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.83301 14.166H9.16634"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SvgIcon>
  );
}

export default BasicDetail