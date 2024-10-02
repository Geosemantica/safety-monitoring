import React, { FC } from 'react';

interface ITrashIconProps {}

const TrashIcon: FC<ITrashIconProps> = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.25 5.75H3.75C3.45163 5.75 3.16548 5.86853 2.9545 6.0795C2.74353 6.29048 2.625 6.57663 2.625 6.875C2.625 7.17337 2.74353 7.45952 2.9545 7.6705C3.16548 7.88147 3.45163 8 3.75 8H4.125V20.75C4.125 21.2473 4.32254 21.7242 4.67417 22.0758C5.02581 22.4275 5.50272 22.625 6 22.625H18C18.4973 22.625 18.9742 22.4275 19.3258 22.0758C19.6775 21.7242 19.875 21.2473 19.875 20.75V8H20.25C20.5484 8 20.8345 7.88147 21.0455 7.6705C21.2565 7.45952 21.375 7.17337 21.375 6.875C21.375 6.57663 21.2565 6.29048 21.0455 6.0795C20.8345 5.86853 20.5484 5.75 20.25 5.75ZM17.625 20.375H6.375V8H17.625V20.375ZM7.125 3.125C7.125 2.82663 7.24353 2.54048 7.4545 2.3295C7.66548 2.11853 7.95163 2 8.25 2H15.75C16.0484 2 16.3345 2.11853 16.5455 2.3295C16.7565 2.54048 16.875 2.82663 16.875 3.125C16.875 3.42337 16.7565 3.70952 16.5455 3.9205C16.3345 4.13147 16.0484 4.25 15.75 4.25H8.25C7.95163 4.25 7.66548 4.13147 7.4545 3.9205C7.24353 3.70952 7.125 3.42337 7.125 3.125Z"
        fill="inherit"
      />
    </svg>
  );
};

export default TrashIcon;