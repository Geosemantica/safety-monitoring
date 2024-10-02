import { ESignalType } from '@/models/signal-type.enum';
import styled from 'styled-components';

export const ControlRoomSignalHatCirclesWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ControlRoomSignalHatCircle = styled.div`
  position: absolute;
  z-index: var(--z-signal-low);
  transform: translateX(5px);

  aspect-ratio: 1/1;
  pointer-events: none;

  border-radius: 50%;
  background-color: ${({ signalType }: { signalType?: ESignalType | null }) =>
    signalType === ESignalType.STOP
      ? 'var(--signal-circle-stop)'
      : signalType === ESignalType.WARN
      ? 'var(--signal-circle-attantion)'
      : signalType === ESignalType.SVC
      ? 'var(--signal-circle-service)'
      : ''};
`;
