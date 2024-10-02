import React, { FC } from 'react';

interface IFunnelIconProps {}

const FunnelIcon: FC<IFunnelIconProps> = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.0895 4.11656C21.9426 3.78436 21.7023 3.50198 21.3979 3.30376C21.0935 3.10554 20.7381 3.00001 20.3748 3H3.87482C3.51163 3.00004 3.15626 3.10555 2.8519 3.30373C2.54754 3.5019 2.30729 3.78421 2.16034 4.11635C2.01339 4.44848 1.96606 4.81614 2.0241 5.17467C2.08215 5.53319 2.24307 5.86714 2.48732 6.13594L2.49857 6.14906L8.74982 12.8203V19.875C8.74977 20.2145 8.84187 20.5476 9.0163 20.8388C9.19074 21.13 9.44095 21.3684 9.74026 21.5285C10.0396 21.6887 10.3767 21.7645 10.7158 21.7481C11.0548 21.7316 11.3831 21.6234 11.6654 21.435L14.6654 19.4353C14.9223 19.2639 15.1328 19.0318 15.2784 18.7595C15.424 18.4872 15.5 18.1831 15.4998 17.8744V12.8203L21.7501 6.14906L21.7614 6.13594C22.0058 5.86728 22.1669 5.53343 22.2251 5.17495C22.2834 4.81646 22.2363 4.44878 22.0895 4.11656ZM13.757 11.3897C13.4306 11.7369 13.2491 12.1957 13.2498 12.6722V17.6737L10.9998 19.1737V12.6722C11.0005 12.1957 10.8191 11.7369 10.4926 11.3897L4.74013 5.25H19.5095L13.757 11.3897Z"
        fill="inherit"
      />
    </svg>
  );
};

export default FunnelIcon;
