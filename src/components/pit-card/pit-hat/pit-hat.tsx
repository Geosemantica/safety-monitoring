import React, { FC, PropsWithChildren } from 'react';
import { ESignalType } from '@/models/signal-type.enum';
import { EState } from '@/models/state.enum';
import { HatButtonContainer, HatDataSourceContainer, HatTextContainer } from './pit-base-hat.styled';
import { StyledPitHatContainer, StyledPitHatContent } from './pit-hat.styled';
import PitHatCircles from './pit-hat-circles/pit-hat-circles';
import Typography from '@/components/shared/typography/typography';
import ArrowIcon from '@/components/shared/icons/arrow-icon';

export interface IPitHatProps extends PropsWithChildren {
  name: string; // pitName
  subname: string | null; // heapName
  state: EState; // circle style
  signalType?: ESignalType | null; // ellipse style
  isAlerts?: boolean;
  dataTestId?: string;
  onClick: () => void;
  onBackButtonClick?: () => void;
  isAdminMode?: boolean;
  expired?: boolean;
  isPitsControlRoomSignalsHat?: boolean;
}

const PitHat: FC<IPitHatProps> = (props) => {
  const { name, subname, signalType, isAlerts, dataTestId, onClick, onBackButtonClick, isAdminMode, children, state } =
    props;

  // const { pitId } = useAppParams();
  const pitId = '1';

  return (
    <>
      <StyledPitHatContainer
        state={state}
        data-testid={dataTestId}
        isAlerts={isAlerts || !!onBackButtonClick}
        isAdminMode={isAdminMode}>
        {onBackButtonClick && (
          <>
            <HatButtonContainer
              data-testid={'test-control-room-signals-hat-button-back'}
              onClick={onBackButtonClick}>
              <ArrowIcon direction="left" />
            </HatButtonContainer>
          </>
        )}

        <StyledPitHatContent
          isActivePit={!!pitId}
          onClick={onClick}>
          <>
            {subname ? (
              <HatTextContainer>
                <Typography
                  level={!!onBackButtonClick ? 'h4' : 'text-big'}
                  weight="medium">
                  {name}
                </Typography>
                <Typography
                  level={!!onBackButtonClick ? 'h4' : 'text-big'}
                  ellipsis>
                  {subname}
                </Typography>
              </HatTextContainer>
            ) : (
              <Typography
                level={!!onBackButtonClick ? 'h4' : 'text-big'}
                weight="medium">
                {name}
              </Typography>
            )}
          </>
          {!isAdminMode && signalType && (
            <HatDataSourceContainer>
              <span style={{ right: children ? '0' : '-2.938rem' }}>
                <PitHatCircles signalType={signalType} />
              </span>
              {children}
            </HatDataSourceContainer>
          )}
        </StyledPitHatContent>
      </StyledPitHatContainer>
    </>
  );
};

export default PitHat;
