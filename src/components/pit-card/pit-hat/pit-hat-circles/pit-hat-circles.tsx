import { FC } from 'react';
import { ESignalType } from '@/models/signal-type.enum';
import { StyledPitHatCircle } from './pit-hat-circles.styled';

interface IPitHatCirclesProps {
  signalType: ESignalType | null;
}

const PitHatCircles: FC<IPitHatCirclesProps> = ({ signalType }) => {
  return (
    <>
      <StyledPitHatCircle
        signalType={signalType}
        style={{ width: '5rem' }}
      />
      <StyledPitHatCircle
        signalType={signalType}
        style={{ width: '9.6rem' }}
      />
      <StyledPitHatCircle
        signalType={signalType}
        style={{ width: '14.1rem' }}
      />
    </>
  );
};

export default PitHatCircles;
