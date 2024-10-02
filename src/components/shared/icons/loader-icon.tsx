import React, { FC } from 'react';

interface ILoaderIconProps {}

const LoaderIcon: FC<ILoaderIconProps> = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.125 12c0 2.6853-1.0667 5.2607-2.9655 7.1595C17.2607 21.0583 14.6853 22.125 12 22.125c-2.68532 0-5.26065-1.0667-7.15946-2.9655C2.94174 17.2607 1.875 14.6853 1.875 12c0-3.98622 2.31844-7.62559 5.90625-9.27184.13481-.06573.28141-.10384.43117-.11208.14975-.00824.29964.01354.44086.06407.14121.05053.27089.12879.38142.23017.11053.10138.19967.22384.26218.36018.06251.13633.09713.28379.10182.4337s-.02064.29924-.07451.43922c-.05386.13997-.13517.26777-.23915.37586-.10397.10809-.22851.1943-.36629.25356C5.92875 6.05347 4.125 8.89034 4.125 12c0 2.0886.82968 4.0916 2.30653 5.5685C7.90838 19.0453 9.91142 19.875 12 19.875c2.0886 0 4.0916-.8297 5.5685-2.3065C19.0453 16.0916 19.875 14.0886 19.875 12c0-3.10966-1.8037-5.94653-4.5938-7.22716-.1377-.05926-.2623-.14547-.3662-.25356-.104-.10809-.1853-.23589-.2392-.37586-.0539-.13998-.0792-.28931-.0745-.43922.0047-.14991.0393-.29737.1018-.4337.0625-.13634.1517-.2588.2622-.36018.1105-.10138.2402-.17964.3814-.23017.1412-.05053.2911-.07231.4409-.06407.1497.00824.2963.04635.4312.11208C19.8066 4.37441 22.125 8.01378 22.125 12Z"
      />
    </svg>
  );
};

export default LoaderIcon;
