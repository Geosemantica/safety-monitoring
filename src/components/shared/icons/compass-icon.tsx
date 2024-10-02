import React, { FC } from 'react';

interface ICompassIconProps {}

const CompassIcon: FC<ICompassIconProps> = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 1.875C9.99747 1.875 8.0399 2.46882 6.37486 3.58137C4.70981 4.69392 3.41206 6.27523 2.64572 8.12533C1.87939 9.97543 1.67888 12.0112 2.06955 13.9753C2.46023 15.9393 3.42454 17.7435 4.84055 19.1595C6.25656 20.5755 8.06066 21.5398 10.0247 21.9305C11.9888 22.3211 14.0246 22.1206 15.8747 21.3543C17.7248 20.5879 19.3061 19.2902 20.4186 17.6251C21.5312 15.9601 22.125 14.0025 22.125 12C22.122 9.3156 21.0543 6.74199 19.1562 4.84383C17.258 2.94567 14.6844 1.87798 12 1.875ZM12 19.875C10.4425 19.875 8.91993 19.4131 7.62489 18.5478C6.32985 17.6825 5.32049 16.4526 4.72445 15.0136C4.12841 13.5747 3.97246 11.9913 4.27632 10.4637C4.58018 8.93606 5.3302 7.53287 6.43154 6.43153C7.53288 5.3302 8.93607 4.58017 10.4637 4.27632C11.9913 3.97246 13.5747 4.12841 15.0136 4.72445C16.4526 5.32049 17.6825 6.32985 18.5478 7.62488C19.4131 8.91992 19.875 10.4425 19.875 12C19.8728 14.0879 19.0424 16.0896 17.566 17.566C16.0896 19.0424 14.0879 19.8728 12 19.875Z"
        fill="inherit"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.097 6.28025L8.97563 11.5835C8.86844 11.8517 8.86844 12.1507 8.97563 12.4188L11.097 17.7221C11.1814 17.9296 11.3259 18.1072 11.5119 18.232C11.698 18.3569 11.917 18.4233 12.1411 18.4229C12.3651 18.4225 12.5839 18.3552 12.7694 18.2296C12.955 18.1041 13.0988 17.926 13.1825 17.7181L15.3038 12.4148C15.411 12.1467 15.411 11.8477 15.3038 11.5796L13.1825 6.27627C13.098 6.06878 12.9535 5.89123 12.7675 5.76638C12.5815 5.64152 12.3624 5.57505 12.1384 5.57548C11.9143 5.57591 11.6955 5.64321 11.51 5.76877C11.3245 5.89433 11.1806 6.07243 11.097 6.28025ZM12.1424 14.2743L13.0512 12.0012L12.1424 9.72806L11.2335 12.0012L12.1424 14.2743Z"
        fill="inherit"
      />
    </svg>
  );
};

export default CompassIcon;