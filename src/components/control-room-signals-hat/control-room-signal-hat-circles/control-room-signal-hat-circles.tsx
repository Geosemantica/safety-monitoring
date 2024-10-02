import { FC } from 'react';
import { ControlRoomSignalHatCircle } from './control-room-signal-hat-circles.styled';
import { ESignalType } from '@/models/signal-type.enum';

interface IControlRoomSignalHatCirclesProps {
  signalType: ESignalType | null;
}

const ControlRoomSignalHatCircles: FC<IControlRoomSignalHatCirclesProps> = ({ signalType }) => {
  return (
    <>
      <ControlRoomSignalHatCircle
        signalType={signalType}
        style={{ width: '5rem' }}
      />
      <ControlRoomSignalHatCircle
        signalType={signalType}
        style={{ width: '9.6rem' }}
      />
      <ControlRoomSignalHatCircle
        signalType={signalType}
        style={{ width: '14.1rem' }}
      />
    </>
  );
};

export default ControlRoomSignalHatCircles;
