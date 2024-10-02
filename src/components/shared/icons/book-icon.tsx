import React, { FC } from 'react';

interface IBookIconProps {}

const BookIcon: FC<IBookIconProps> = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 4.125H15C14.4377 4.12482 13.8814 4.23995 13.3654 4.46328C12.8494 4.68662 12.3847 5.0134 12 5.42344C11.6153 5.0134 11.1506 4.68662 10.6346 4.46328C10.1186 4.23995 9.56226 4.12482 9 4.125H3C2.50272 4.125 2.02581 4.32254 1.67417 4.67418C1.32254 5.02581 1.125 5.50272 1.125 6V18C1.125 18.4973 1.32254 18.9742 1.67417 19.3258C2.02581 19.6775 2.50272 19.875 3 19.875H9C9.49728 19.875 9.97419 20.0725 10.3258 20.4242C10.6775 20.7758 10.875 21.2527 10.875 21.75C10.875 22.0484 10.9935 22.3345 11.2045 22.5455C11.4155 22.7565 11.7016 22.875 12 22.875C12.2984 22.875 12.5845 22.7565 12.7955 22.5455C13.0065 22.3345 13.125 22.0484 13.125 21.75C13.125 21.2527 13.3225 20.7758 13.6742 20.4242C14.0258 20.0725 14.5027 19.875 15 19.875H21C21.4973 19.875 21.9742 19.6775 22.3258 19.3258C22.6775 18.9742 22.875 18.4973 22.875 18V6C22.875 5.50272 22.6775 5.02581 22.3258 4.67418C21.9742 4.32254 21.4973 4.125 21 4.125ZM9 17.625H3.375V6.375H9C9.49728 6.375 9.97419 6.57254 10.3258 6.92418C10.6775 7.27581 10.875 7.75272 10.875 8.25V18.0759C10.2947 17.7789 9.65194 17.6243 9 17.625ZM20.625 17.625H15C14.3479 17.6246 13.7051 17.7798 13.125 18.0778V8.25C13.125 7.75272 13.3225 7.27581 13.6742 6.92418C14.0258 6.57254 14.5027 6.375 15 6.375H20.625V17.625ZM15.375 9H18.375C18.6734 9 18.9595 9.11853 19.1705 9.32951C19.3815 9.54048 19.5 9.82663 19.5 10.125C19.5 10.4234 19.3815 10.7095 19.1705 10.9205C18.9595 11.1315 18.6734 11.25 18.375 11.25H15.375C15.0766 11.25 14.7905 11.1315 14.5795 10.9205C14.3685 10.7095 14.25 10.4234 14.25 10.125C14.25 9.82663 14.3685 9.54048 14.5795 9.32951C14.7905 9.11853 15.0766 9 15.375 9ZM19.5 13.875C19.5 14.1734 19.3815 14.4595 19.1705 14.6705C18.9595 14.8815 18.6734 15 18.375 15H15.375C15.0766 15 14.7905 14.8815 14.5795 14.6705C14.3685 14.4595 14.25 14.1734 14.25 13.875C14.25 13.5766 14.3685 13.2905 14.5795 13.0795C14.7905 12.8685 15.0766 12.75 15.375 12.75H18.375C18.6734 12.75 18.9595 12.8685 19.1705 13.0795C19.3815 13.2905 19.5 13.5766 19.5 13.875Z"
        fill="inherit"
      />
    </svg>
  );
};

export default BookIcon;
