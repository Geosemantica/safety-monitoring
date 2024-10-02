import React, { FC, PropsWithChildren } from 'react';
import { Container } from './user-avatar.styled';
import Typography from '../../shared/typography/typography';
// import { getUserInfo } from '@/utils/get-user-info';

interface IUserAvatarProps extends PropsWithChildren {
  onClick: () => void;
  dataTestId?: string;
  active?: boolean;
}

const UserAvatar: FC<IUserAvatarProps> = (props) => {
  const { children, onClick, dataTestId, active } = props;
  // const { family_name, given_name } = getUserInfo();
  const family_name = 'Фамилия';
  const given_name = 'Имя';
  const initials = family_name && given_name && `${family_name[0]}${given_name[0]}`.toUpperCase();

  return (
    <div style={{ position: 'relative' }}>
      <Container
        active={active}
        data-testid={dataTestId}
        onClick={onClick}>
        <Typography
          level="text-big"
          weight="medium"
          uppercase>
          {initials}
        </Typography>
      </Container>
      {children}
    </div>
  );
};

export default UserAvatar;
