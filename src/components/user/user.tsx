import React, { useState } from "react";
import UserAvatar from "./user-avatar/user-avatar";
import UserMenu from "./user-menu/user-menu";
import Popover from "../shared/popover/popover";
// import { useAuth } from 'react-oidc-context';

const User = () => {
  const [open, setOpen] = useState<boolean>(false);
  // const { user } = useAuth();

  const handleCloseInfo = () => {
    setOpen(false);
  };

  const handleToggleUserInfo = () => {
    setOpen(!open);
  };

  // if (!user) return null;

  return (
    <Popover onClickOutside={handleCloseInfo}>
      <UserAvatar
        dataTestId="test-account-user-avatar"
        active={open}
        onClick={handleToggleUserInfo}
      >
        {open && <UserMenu onClick={handleCloseInfo} />}
      </UserAvatar>
    </Popover>
  );
};

export default User;
