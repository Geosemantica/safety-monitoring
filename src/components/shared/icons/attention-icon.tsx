import React, { FC } from 'react';

type TAttentionIconType = 'outlined' | 'filled';
type TAttentionIconShape = 'elipse' | 'rec';

interface IAttentionIconProps {
  type?: TAttentionIconType;
  shape?: TAttentionIconShape;
  done?: boolean;
}
// indicatorAlert ICON
const AttentionIcon: FC<IAttentionIconProps> = ({ shape = 'elipse', type = 'outlined', done = false }) => {
  const getIcon = (type: TAttentionIconType) => {
    switch (type) {
      case 'outlined':
        return (
          <>
            {shape === 'elipse' ? (
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 22 22"
                fill="inherit"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 20.625C16.3157 20.625 20.625 16.3157 20.625 11C20.625 5.68426 16.3157 1.375 11 1.375C5.68426 1.375 1.375 5.68426 1.375 11C1.375 16.3157 5.68426 20.625 11 20.625ZM11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z"
                  fill="inherit"
                />
                <path
                  d="M9.625 15.1319C9.625 14.9513 9.66057 14.7725 9.72967 14.6057C9.79877 14.4389 9.90005 14.2873 10.0277 14.1596C10.1554 14.0319 10.307 13.9306 10.4738 13.8615C10.6406 13.7924 10.8194 13.7569 11 13.7569C11.1806 13.7569 11.3594 13.7924 11.5262 13.8615C11.693 13.9306 11.8446 14.0319 11.9723 14.1596C12.1 14.2873 12.2012 14.4389 12.2703 14.6057C12.3394 14.7725 12.375 14.9513 12.375 15.1319C12.375 15.4965 12.2301 15.8463 11.9723 16.1041C11.7144 16.362 11.3647 16.5069 11 16.5069C10.6353 16.5069 10.2856 16.362 10.0277 16.1041C9.76987 15.8463 9.625 15.4965 9.625 15.1319ZM9.75975 6.875C9.74144 6.70153 9.7598 6.52615 9.81365 6.36024C9.8675 6.19433 9.95562 6.04159 10.0723 5.91193C10.189 5.78228 10.3316 5.6786 10.491 5.60764C10.6503 5.53667 10.8228 5.5 10.9972 5.5C11.1717 5.5 11.3442 5.53667 11.5035 5.60764C11.6629 5.6786 11.8055 5.78228 11.9222 5.91193C12.0389 6.04159 12.127 6.19433 12.1809 6.36024C12.2347 6.52615 12.2531 6.70153 12.2348 6.875L11.7535 11.6971C11.7373 11.8866 11.6507 12.063 11.5106 12.1916C11.3706 12.3202 11.1874 12.3916 10.9972 12.3916C10.8071 12.3916 10.6239 12.3202 10.4839 12.1916C10.3438 12.063 10.2572 11.8866 10.241 11.6971L9.75975 6.875Z"
                  fill="inherit"
                />
              </svg>
            ) : shape === 'rec' ? (
              done ? (
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 22 22"
                  fill="inherit"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.55636 0.59812C10.3538 -0.199373 11.6463 -0.199373 12.4438 0.59812L21.4019 9.55754C22.1994 10.355 22.1994 11.6462 21.4019 12.4423L12.4438 21.4017C11.6463 22.1992 10.3552 22.1992 9.55911 21.4017L0.598308 12.4436C0.408647 12.2544 0.258177 12.0295 0.155511 11.782C0.0528453 11.5345 0 11.2692 0 11.0013C0 10.7333 0.0528453 10.468 0.155511 10.2205C0.258177 9.97302 0.408647 9.74819 0.598308 9.55892L9.55636 0.59812ZM11.4813 1.56061C11.3537 1.43299 11.1806 1.36129 11.0001 1.36129C10.8196 1.36129 10.6465 1.43299 10.5188 1.56061L1.55942 10.5187C1.4318 10.6463 1.3601 10.8194 1.3601 10.9999C1.3601 11.1804 1.4318 11.3535 1.55942 11.4812L10.5188 20.4406C10.6465 20.5682 10.8196 20.6399 11.0001 20.6399C11.1806 20.6399 11.3537 20.5682 11.4813 20.4406L20.4408 11.4812C20.5684 11.3535 20.6401 11.1804 20.6401 10.9999C20.6401 10.8194 20.5684 10.6463 20.4408 10.5187L11.4813 1.55924V1.56061Z"
                    fill="inherit"
                  />
                  <path
                    d="M14.1415 7.57862C14.1335 7.58641 14.126 7.5947 14.119 7.60345L10.2009 12.5984L7.83967 10.2347C7.67928 10.0851 7.46713 10.0037 7.24793 10.0076C7.02873 10.0115 6.81958 10.1003 6.66456 10.2554C6.50954 10.4105 6.42074 10.6198 6.41687 10.8391C6.413 11.0584 6.49437 11.2707 6.64383 11.4312L9.62892 14.4191C9.70934 14.4994 9.8051 14.5627 9.91049 14.6052C10.0159 14.6477 10.1287 14.6685 10.2424 14.6664C10.356 14.6643 10.468 14.6393 10.5717 14.5929C10.6755 14.5466 10.7688 14.4798 10.8462 14.3966L15.3498 8.76385C15.5031 8.60281 15.587 8.38785 15.5832 8.16544C15.5794 7.94304 15.4883 7.73106 15.3296 7.57534C15.1708 7.41961 14.9572 7.33266 14.7349 7.33327C14.5126 7.33389 14.2994 7.42202 14.1415 7.57862Z"
                    fill="inherit"
                  />
                </svg>
              ) : (
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 22 22"
                  fill="inherit"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.55644 0.598125C10.3539 -0.199375 11.6464 -0.199375 12.4439 0.598125L21.4021 9.55763C22.1996 10.3551 22.1996 11.6462 21.4021 12.4424L12.4439 21.4019C11.6464 22.1994 10.3553 22.1994 9.55919 21.4019L0.598313 12.4438C0.40865 12.2545 0.258179 12.0296 0.155512 11.7821C0.0528457 11.5346 0 11.2693 0 11.0014C0 10.7334 0.0528457 10.4681 0.155512 10.2206C0.258179 9.9731 0.40865 9.74828 0.598313 9.559L9.55644 0.598125ZM11.4814 1.56063C11.3538 1.433 11.1807 1.3613 11.0002 1.3613C10.8197 1.3613 10.6466 1.433 10.5189 1.56063L1.55944 10.5188C1.43181 10.6464 1.36011 10.8195 1.36011 11C1.36011 11.1805 1.43181 11.3536 1.55944 11.4813L10.5189 20.4408C10.6466 20.5684 10.8197 20.6401 11.0002 20.6401C11.1807 20.6401 11.3538 20.5684 11.4814 20.4408L20.4409 11.4813C20.5686 11.3536 20.6403 11.1805 20.6403 11C20.6403 10.8195 20.5686 10.6464 20.4409 10.5188L11.4814 1.55925V1.56063Z"
                    fill="inherit"
                  />
                  <path
                    d="M9.62769 15.125C9.62769 14.9444 9.66325 14.7656 9.73235 14.5988C9.80145 14.432 9.90273 14.2804 10.0304 14.1527C10.1581 14.025 10.3097 13.9238 10.4765 13.8547C10.6433 13.7856 10.8221 13.75 11.0027 13.75C11.1833 13.75 11.3621 13.7856 11.5289 13.8547C11.6957 13.9238 11.8473 14.025 11.975 14.1527C12.1026 14.2804 12.2039 14.432 12.273 14.5988C12.3421 14.7656 12.3777 14.9444 12.3777 15.125C12.3777 15.4897 12.2328 15.8394 11.975 16.0973C11.7171 16.3551 11.3674 16.5 11.0027 16.5C10.638 16.5 10.2883 16.3551 10.0304 16.0973C9.77255 15.8394 9.62769 15.4897 9.62769 15.125ZM9.76244 6.86812C9.74413 6.69465 9.76249 6.51927 9.81634 6.35336C9.87018 6.18744 9.95831 6.03471 10.075 5.90505C10.1917 5.7754 10.3343 5.67172 10.4937 5.60076C10.653 5.52979 10.8255 5.49312 10.9999 5.49312C11.1744 5.49312 11.3469 5.52979 11.5062 5.60076C11.6655 5.67172 11.8082 5.7754 11.9249 5.90505C12.0416 6.03471 12.1297 6.18744 12.1835 6.35336C12.2374 6.51927 12.2557 6.69465 12.2374 6.86812L11.7562 11.6902C11.74 11.8797 11.6533 12.0561 11.5133 12.1847C11.3733 12.3133 11.1901 12.3847 10.9999 12.3847C10.8098 12.3847 10.6266 12.3133 10.4866 12.1847C10.3465 12.0561 10.2599 11.8797 10.2437 11.6902L9.76244 6.86812Z"
                    fill="inherit"
                  />
                </svg>
              )
            ) : null}
          </>
        );
      case 'filled':
        return (
          <>
            {shape === 'elipse' ? (
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 22 22"
                fill="inherit"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22 11C22 13.9174 20.8411 16.7153 18.7782 18.7782C16.7153 20.8411 13.9174 22 11 22C8.08262 22 5.28473 20.8411 3.22183 18.7782C1.15893 16.7153 0 13.9174 0 11C0 8.08262 1.15893 5.28473 3.22183 3.22183C5.28473 1.15893 8.08262 0 11 0C13.9174 0 16.7153 1.15893 18.7782 3.22183C20.8411 5.28473 22 8.08262 22 11ZM11 5.5C10.8262 5.5001 10.6544 5.5366 10.4955 5.60715C10.3367 5.6777 10.1944 5.78074 10.0778 5.90963C9.96127 6.03852 9.87298 6.19039 9.81866 6.35548C9.76435 6.52056 9.74522 6.6952 9.7625 6.86812L10.2437 11.6902C10.2599 11.8797 10.3466 12.0562 10.4866 12.1847C10.6267 12.3133 10.8099 12.3847 11 12.3847C11.1901 12.3847 11.3733 12.3133 11.5134 12.1847C11.6534 12.0562 11.7401 11.8797 11.7563 11.6902L12.2375 6.86812C12.2548 6.6952 12.2357 6.52056 12.1813 6.35548C12.127 6.19039 12.0387 6.03852 11.9222 5.90963C11.8056 5.78074 11.6633 5.6777 11.5045 5.60715C11.3456 5.5366 11.1738 5.5001 11 5.5ZM11.0027 13.75C10.6381 13.75 10.2883 13.8949 10.0305 14.1527C9.77262 14.4106 9.62775 14.7603 9.62775 15.125C9.62775 15.4897 9.77262 15.8394 10.0305 16.0973C10.2883 16.3551 10.6381 16.5 11.0027 16.5C11.3674 16.5 11.7172 16.3551 11.975 16.0973C12.2329 15.8394 12.3777 15.4897 12.3777 15.125C12.3777 14.7603 12.2329 14.4106 11.975 14.1527C11.7172 13.8949 11.3674 13.75 11.0027 13.75Z"
                  fill="inherit"
                />
              </svg>
            ) : shape === 'rec' ? (
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 23 22"
                fill="inherit"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.4438 0.598125C11.6463 -0.199375 10.3538 -0.199375 9.55634 0.598125L0.59959 9.55625C-0.19791 10.3538 -0.19791 11.6449 0.59959 12.441L9.55909 21.4005C10.3566 22.198 11.6477 22.198 12.4438 21.4005L21.4033 12.441C22.2008 11.6435 22.2008 10.3524 21.4033 9.55625L12.4438 0.598125ZM11.0001 5.5C11.7357 5.5 12.3118 6.13525 12.2376 6.86813L11.7563 11.6903C11.7402 11.8797 11.6535 12.0562 11.5135 12.1848C11.3734 12.3133 11.1902 12.3847 11.0001 12.3847C10.81 12.3847 10.6268 12.3133 10.4867 12.1848C10.3467 12.0562 10.26 11.8797 10.2438 11.6903L9.76259 6.86813C9.74531 6.6952 9.76444 6.52057 9.81875 6.35548C9.87306 6.19039 9.96136 6.03852 10.0779 5.90963C10.1945 5.78074 10.3368 5.6777 10.4956 5.60715C10.6545 5.5366 10.8263 5.5001 11.0001 5.5ZM11.0028 13.75C11.3675 13.75 11.7172 13.8949 11.9751 14.1527C12.233 14.4106 12.3778 14.7603 12.3778 15.125C12.3778 15.4897 12.233 15.8394 11.9751 16.0973C11.7172 16.3551 11.3675 16.5 11.0028 16.5C10.6382 16.5 10.2884 16.3551 10.0306 16.0973C9.77271 15.8394 9.62784 15.4897 9.62784 15.125C9.62784 14.7603 9.77271 14.4106 10.0306 14.1527C10.2884 13.8949 10.6382 13.75 11.0028 13.75Z"
                  fill="inherit"
                />
              </svg>
            ) : null}
          </>
        );

      default:
        null;
    }
  };

  return <>{getIcon(type)}</>;
};

export default AttentionIcon;
