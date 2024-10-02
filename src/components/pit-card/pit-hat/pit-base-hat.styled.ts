import styled from 'styled-components';

export const HatTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-4);
`;

export const HatDataSourceContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-100);

  span {
    /* style={{ position: 'absolute', width: '100%', height: '100%' }} */
    width: 100%;
    height: 100%;
    position: absolute;
    width: var(--size-46);
    height: var(--size-46);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    width: var(--size-46);
    aspect-ratio: 1/1;
  }

  svg {
    width: var(--size-24);
    height: var(--size-24);

    fill: var(--elements-system-grey-800);
  }
`;

export const HatButtonContainer = styled.div`
  height: 5rem;
  width: 3rem;
  border-right: var(--size-1) solid var(--elements-system-grey-50);

  background-color: var(--bg-primary-white);

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.5rem;
    aspect-ratio: 1/1;
  }

  &:hover {
    cursor: pointer;
    background-color: var(--bg-secondary-active);
  }
`;

export const HatContent = styled.div`
  padding-block: var(--gap-8);
  padding-inline: var(--gap-20);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  gap: var(--gap-16);
`;

export const HatContainer = styled.div`
  overflow: hidden;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
