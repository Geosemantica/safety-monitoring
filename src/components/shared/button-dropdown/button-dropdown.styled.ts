import styled from 'styled-components';

export const StyledButtonDropdown = styled.button`
  border: none;
  outline: none;

  padding-inline: var(--gap-20);
  padding-block: var(--gap-12);

  background-color: var(--elements-system-white);

  &:hover {
    background-color: var(--bg-secondary-hover);
  }

  &:hover {
    background-color: var(--bg-secondary-hover);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const DoneIconContainer = styled.div`
  width: var(--size-16);
  aspect-ratio: 1/1;
`;
