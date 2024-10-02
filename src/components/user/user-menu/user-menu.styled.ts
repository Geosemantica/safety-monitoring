import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 1.688rem;
  right: 1.688rem;
  z-index: var(--z-user-menu);

  width: 18.75rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  border-radius: var(--radius-8);
  background-color: var(--bg-primary-white);
  box-shadow: var(--shadow-main-medium);
`;

const Container = styled.div`
  padding-inline: var(--gap-20);
  padding-block: var(--gap-20);
  display: flex;
  flex-direction: column;
  gap: var(--gap-12);
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-8);
`;

const Divider = styled.div`
  width: 100%;
  height: var(--size-1);
  background-color: var(--elements-tables-border);
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-8);
  margin-block: var(--gap-8);
`;

export { Wrapper, Container, Buttons, NameContainer, Divider };
