import styled from 'styled-components';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const UikitColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-16);
`;

const UikitRow = styled.div`
  display: flex;
  gap: var(--gap-16);
  flex-wrap: wrap;
`;

const UikitDivider = styled.div`
  width: 100%;
  border-top: var(--gap-1) solid var(--elements-system-black);
`;

const UikitFooter = styled.div`
  height: 20rem;
`;

const UikitTooltipParent = styled.div`
  display: flex;
  flex-direction: column;
  width: 14rem;
  height: 4rem;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export { UikitColumn, UikitRow, UikitDivider, UikitFooter, UikitTooltipParent };
