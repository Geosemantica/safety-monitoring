import React, { FC, PropsWithChildren, useEffect, useRef } from 'react';

interface IPopoverProps extends PropsWithChildren {
  onClickOutside: () => void;
}

const Popover: FC<IPopoverProps> = ({ children, onClickOutside }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (e.target instanceof Element && ref.current && !ref.current.contains(e.target)) {
        onClickOutside();
      }
    };
    document.addEventListener('mousedown', handleClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default Popover;
