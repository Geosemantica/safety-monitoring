import styled, { css } from 'styled-components';

export const StyledPitCardContainer = styled.div`
  min-width: 30rem;

  display: flex;
  flex-direction: column;
`;

export const StyledPitCardWrapper = styled.div`
  border-radius: var(--radius-8);

  outline: ${({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'var(--size-2) solid var(--elements-system-grey-200)'
      : 'var(--border-1) solid var(--elements-system-grey-100)'};
`;

export const StyledPitHatContainer = styled.div`
  border-radius: var(--radius-8);
  border-bottom: none;
`;

export const StyledCriterionTagContainer = styled.div`
  border-radius: 0 0 var(--radius-8) var(--radius-8);
  border-top: none;
`;

export const StyledCriterionTagList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: var(--size-8);

  padding: var(--gap-16);

  border-radius: 0 0 var(--radius-8) var(--radius-8);
  border-top: var(--border-1) solid var(--elements-system-grey-50);
`;

export const StyledCriterionTagElement = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const StyledAlertsList = styled.ul`
  display: flex;
  gap: var(--size-8);
`;

export const StyledAlertsItem = styled.li``;

export const StyledAlertIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--size-4);

  svg {
    width: var(--size-24);
    aspect-ratio: 1/1;
  }
`;

export const StyledOtherAlertsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--size-16);
  background-color: var(--elements-system-grey-50);
  width: var(--size-38);
  height: var(--size-24);
`;
