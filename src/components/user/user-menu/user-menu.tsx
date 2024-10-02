import React, { FC } from 'react';
import { Buttons, Container, Divider, NameContainer, Wrapper } from './user-menu.styled';
// import { useTranslation } from 'react-i18next';
// import { useAuth } from 'react-oidc-context';
// import { useLogoutMutation } from '@/services/reducers/auth.reducer/auth.api';
import Typography from '@/components/shared/typography/typography';
import ButtonDropdown from '@/components/shared/button-dropdown/button-dropdown';
// import { getUserInfo } from '@/utils/get-user-info';

interface IUserMenuProps {
  onClick: () => void;
}

const UserMenu: FC<IUserMenuProps> = ({ onClick }) => {
  // const { t } = useTranslation('user');

  // const { signoutRedirect } = useAuth();
  // const [logout] = useLogoutMutation();

  // const { family_name, given_name, third_name, job_title, email } = getUserInfo();
  const family_name = 'Фамилия';
  const given_name = 'Имя';
  const third_name = 'Отчество';
  const job_title = 'Администратор';
  const email = 'admin@admin.gs';

  const handleLogOut = () => {
    // signoutRedirect();
    // logout('');
    onClick();
  };

  return (
    <Wrapper>
      <Container>
        <NameContainer>
          <Typography
            level="h4"
            weight="medium"
            color={'var(--text-primary-black)'}
            ellipsis>
            {family_name}
          </Typography>
          <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
            <Typography
              level="h4"
              weight="medium"
              color={'var(--text-primary-black)'}
              ellipsis>
              {given_name}
            </Typography>
            <Typography
              level="h4"
              weight="medium"
              color={'var(--text-primary-black)'}
              ellipsis>
              {third_name}
            </Typography>
          </div>
        </NameContainer>
        <Typography
          level="h4"
          color={'var(--text-primary-secondary)'}
          ellipsis>
          {email}
        </Typography>
        <Typography
          level="text-big"
          weight="medium"
          color={'var(--bg-primary-active)'}
          ellipsis>
          {job_title}
        </Typography>
      </Container>
      <Divider />
      <Buttons>
        <ButtonDropdown
          dataTestId="test-user-changepassword-button"
          onClick={() => null}>
          {/* {t('btn.type.change_password.title')} */}
          Изменить пароль
        </ButtonDropdown>
        <ButtonDropdown
          dataTestId="test-user-logout-button"
          onClick={handleLogOut}>
          {/* {t('btn.type.exit.title')} */}
          Выйти
        </ButtonDropdown>
      </Buttons>
    </Wrapper>
  );
};

export default UserMenu;
