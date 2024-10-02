import React, { FC } from 'react';
import { DoneIconContainer, StyledButtonDropdown } from './button-dropdown.styled';
import Typography from '../typography/typography';
import DoneIcon from '../icons/done-icon';

interface IButtonDropdownProps {
  children: string;
  dataTestId?: string;
  onClick: () => void;
  current?: boolean;
}

const ButtonDropdown: FC<IButtonDropdownProps> = ({ children, onClick, dataTestId, current }) => {
  return (
    <StyledButtonDropdown
      data-testid={dataTestId}
      onClick={onClick}>
      <div>
        <Typography level="text-big">{children}</Typography>
        {current && (
          <DoneIconContainer>
            <DoneIcon />
          </DoneIconContainer>
        )}
      </div>
    </StyledButtonDropdown>
  );
};

export default ButtonDropdown;
