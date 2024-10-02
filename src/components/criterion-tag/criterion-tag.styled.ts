import styled from 'styled-components';

export const CriterionTagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--size-4);

  svg {
    width: var(--size-24);
    height: var(--size-24);
    fill: ${({ color }: { color: string }) => color};
  }
`;
