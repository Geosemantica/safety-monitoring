import styled, { css } from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: var(--z-user-avatar);

  width: 3.375rem;
  aspect-ratio: 1/1;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100%;
  border: var(--border-1) solid var(--elements-system-grey-500);
  background-color: var(--elements-system-white);

  p {
    color: var(--text-primary-black);
  }

  &:hover {
    background-color: var(--bg-primary-hover);

    p {
      color: var(--text-primary-white);
    }
  }

  ${({ active = false }: { active?: boolean }) =>
    active &&
    css`
      background-color: var(--bg-primary-hover);

      p {
        color: var(--text-primary-white);
      }
    `}
`;

export { Container };
