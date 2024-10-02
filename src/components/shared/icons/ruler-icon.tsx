import React, { FC } from 'react';

interface IRulerIconProps {}

const RulerIcon: FC<IRulerIconProps> = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.3266 6.61313L17.3869 1.67438C17.2128 1.50019 17.0061 1.36201 16.7785 1.26774C16.551 1.17346 16.3071 1.12494 16.0608 1.12494C15.8145 1.12494 15.5706 1.17346 15.3431 1.26774C15.1156 1.36201 14.9088 1.50019 14.7347 1.67438L1.67347 14.7347C1.49928 14.9088 1.3611 15.1155 1.26682 15.3431C1.17255 15.5706 1.12402 15.8145 1.12402 16.0608C1.12402 16.3071 1.17255 16.551 1.26682 16.7785C1.3611 17.006 1.49928 17.2128 1.67347 17.3869L6.61315 22.3256C6.78727 22.4998 6.99401 22.638 7.22154 22.7323C7.44908 22.8266 7.69295 22.8751 7.93925 22.8751C8.18554 22.8751 8.42942 22.8266 8.65695 22.7323C8.88449 22.638 9.09122 22.4998 9.26534 22.3256L22.3266 9.26532C22.5008 9.0912 22.639 8.88447 22.7332 8.65693C22.8275 8.4294 22.876 8.18552 22.876 7.93923C22.876 7.69293 22.8275 7.44905 22.7332 7.22152C22.639 6.99398 22.5008 6.78725 22.3266 6.61313ZM7.93878 20.4694L3.53253 16.0631L6.00003 13.5938L8.20503 15.7988C8.41637 16.0101 8.70302 16.1288 9.0019 16.1288C9.30079 16.1288 9.58743 16.0101 9.79878 15.7988C10.0101 15.5874 10.1289 15.3008 10.1289 15.0019C10.1289 14.703 10.0101 14.4164 9.79878 14.205L7.59378 12L9.00003 10.5938L11.2041 12.7988C11.4154 13.0101 11.7021 13.1288 12.001 13.1288C12.2999 13.1288 12.5865 13.0101 12.7978 12.7988C13.0092 12.5874 13.1279 12.3008 13.1279 12.0019C13.1279 11.703 13.0092 11.4164 12.7978 11.205L10.5938 9.00001L12 7.59376L14.205 9.79876C14.4164 10.0101 14.703 10.1288 15.0019 10.1288C15.3008 10.1288 15.5874 10.0101 15.7988 9.79876C16.0101 9.58741 16.1289 9.30077 16.1289 9.00188C16.1289 8.703 16.0101 8.41635 15.7988 8.20501L13.5938 6.00001L16.0641 3.53063L20.4703 7.93688L7.93878 20.4694Z"
        fill="inherit"
      />
    </svg>
  );
};

export default RulerIcon;