import React, { FC } from 'react';

export type TArrowIconDirection = 'up' | 'down' | 'left' | 'right';

interface IArrowIconProps {
  direction?: TArrowIconDirection;
}

const ArrowIcon: FC<IArrowIconProps> = ({ direction = 'up' }) => {
  const rotateIcon = (direction: TArrowIconDirection) => {
    switch (direction) {
      case 'up':
        return '0deg';
      case 'right':
        return '90deg';
      case 'down':
        return '180deg';
      case 'left':
        return '270deg';
      default:
        '';
    }
  };

  return (
    <svg
      style={{ rotate: rotateIcon(direction) }}
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.2959 15.7959C20.1914 15.9008 20.0672 15.984 19.9304 16.0408C19.7937 16.0976 19.6471 16.1268 19.499 16.1268C19.351 16.1268 19.2043 16.0976 19.0676 16.0408C18.9309 15.984 18.8067 15.9008 18.7021 15.7959L12 9.09376L5.2959 15.7959C5.08455 16.0073 4.79791 16.126 4.49902 16.126C4.20014 16.126 3.91349 16.0073 3.70215 15.7959C3.4908 15.5846 3.37207 15.298 3.37207 14.9991C3.37207 14.7002 3.4908 14.4135 3.70215 14.2022L11.2021 6.70219C11.3067 6.59731 11.4309 6.5141 11.5676 6.45732C11.7043 6.40054 11.851 6.37131 11.999 6.37131C12.1471 6.37131 12.2937 6.40054 12.4304 6.45732C12.5672 6.5141 12.6914 6.59731 12.7959 6.70219L20.2959 14.2022C20.4008 14.3067 20.484 14.4309 20.5408 14.5676C20.5976 14.7044 20.6268 14.851 20.6268 14.9991C20.6268 15.1471 20.5976 15.2937 20.5408 15.4305C20.484 15.5672 20.4008 15.6914 20.2959 15.7959Z"
        fill="inherit"
      />
    </svg>
  );
};

export default ArrowIcon;
