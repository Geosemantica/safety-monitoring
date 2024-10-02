import styled, { css } from 'styled-components';
import { EState } from '@/models/state.enum';
import { HatContainer, HatContent } from './pit-base-hat.styled';

interface IPitHatContainer {
  isAlerts?: boolean;
  state: EState;
  isAdminMode?: boolean;
}

export const stateToPanelItemBackGroundColor = (state: EState) => {
  switch (state) {
    case EState.STOP:
      return 'var(--stop-linear)';
    case EState.WARN:
      return 'var(--attention-linear)';

    default:
      return 'var(--bg-primary-white)';
  }
};

export const StyledPitHatContainer = styled(HatContainer)`
  border-radius: ${({ isAlerts }: IPitHatContainer) =>
    isAlerts ? 'var(--radius-8) var(--radius-8) 0 0' : 'var(--radius-8)'};

  min-height: 5rem;

  background: ${({ state }: IPitHatContainer) => stateToPanelItemBackGroundColor(state)};
`;

export const StyledPitHatContent = styled(HatContent)`
  ${({ isActivePit }: { isActivePit: boolean }) => (isActivePit ? 'height: 5rem;' : null)}
  z-index: var(--z-middle);
`;
