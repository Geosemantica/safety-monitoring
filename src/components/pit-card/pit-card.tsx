import React, { FC, PropsWithChildren } from 'react';
import { sortSignals } from '../../utils/sort-signals';
import {
  StyledAlertIconContainer,
  StyledAlertsItem,
  StyledAlertsList,
  StyledCriterionTagContainer,
  StyledCriterionTagElement,
  StyledCriterionTagList,
  StyledOtherAlertsContainer,
  StyledPitCardContainer,
  StyledPitCardWrapper,
  StyledPitHatContainer
} from './pit-card.styled';
import AlertIcon, { validStatuses } from '../shared/icons/alert-icon';
import Typography from '../shared/typography/typography';
import CriterionTag, { ELocationCriterionTag } from '../criterion-tag/criterion-tag';
import { EState } from '@/models/state.enum';
import { ESignalType } from '@/models/signal-type.enum';
import { ICriteria, IPitSignal } from '@/models/shared.interface';
import PitHat from './pit-hat/pit-hat';

interface IPitCardProps extends PropsWithChildren {
  name: string; // pitName
  subname: string | null; // heapName
  state: EState; // circle style
  signalType: ESignalType | null; // elipse style
  signals: IPitSignal[];
  dataTestId?: string;
  isActive?: boolean;
  isAdminMode?: boolean;
  expired?: boolean;
  criteria: ICriteria[];
}

const PitCard: FC<IPitCardProps> = (props) => {
  const { children, dataTestId, isActive = false, isAdminMode, expired, criteria } = props;

  const isAlerts = criteria.some((tag) => tag.signals.length > 0);
  const firstAlert = 0;
  const startingFromTheFirstAlert = 1;
  const finishOfTheSecondAlert = 2;
  const maximumNumberOfSignals = 2;

  return (
    <>
      <StyledPitCardContainer>
        <StyledPitCardWrapper
          data-testid={dataTestId ? dataTestId : 'test-left-panel-card'}
          isActive={isActive}>
          <StyledPitHatContainer>
            <PitHat
              dataTestId={`test-left-panel-hat`}
              isAlerts={isAlerts}
              onClick={() => null}
              isAdminMode={isAdminMode}
              expired={expired}
              isPitsControlRoomSignalsHat={true}
              {...props}>
              {children}
            </PitHat>
          </StyledPitHatContainer>

          <>
            {criteria.length > 0 && (
              <StyledCriterionTagContainer>
                <StyledCriterionTagList>
                  {criteria.map((criteria, ix) => {
                    const sortedSignals = sortSignals(criteria.signals);
                    const filteredSignals =
                      isAlerts &&
                      sortedSignals
                        .filter((signal) => validStatuses.includes(signal.status))
                        .map((data, index) => ({ ...data, id: index }));
                    return (
                      <StyledCriterionTagElement key={`${ix}-${criteria.criterion}}`}>
                        <>
                          <CriterionTag
                            data-testid={`test-pit-card-criterion-${criteria.criterion}`}
                            type={criteria.criterion}
                            location={ELocationCriterionTag.CONTROL_ROOM_CARD}
                          />
                        </>
                        {filteredSignals && (
                          <StyledAlertsList>
                            {filteredSignals.slice(firstAlert, finishOfTheSecondAlert).map((signal, ix) => {
                              const { status, type, count } = signal;

                              return (
                                <StyledAlertsItem
                                  key={`alerts-item-${ix}-${status}-${type}-${count}`}
                                  data-testid={`test-pit-card-alert-${status}-${type}-${count}`}>
                                  <StyledAlertIconContainer>
                                    <AlertIcon
                                      alert={status}
                                      signalType={type}
                                    />
                                    <Typography
                                      weight="medium"
                                      level="text-big">
                                      {count}
                                    </Typography>
                                  </StyledAlertIconContainer>
                                </StyledAlertsItem>
                              );
                            })}
                            <>
                              {filteredSignals.length > maximumNumberOfSignals && (
                                <StyledOtherAlertsContainer>
                                  <Typography
                                    weight="medium"
                                    level="text-big">
                                    +{' '}
                                    {
                                      filteredSignals.slice(startingFromTheFirstAlert, filteredSignals.length - 1)
                                        .length
                                    }
                                  </Typography>
                                </StyledOtherAlertsContainer>
                              )}
                            </>
                          </StyledAlertsList>
                        )}
                      </StyledCriterionTagElement>
                    );
                  })}
                </StyledCriterionTagList>
              </StyledCriterionTagContainer>
            )}
          </>
        </StyledPitCardWrapper>
      </StyledPitCardContainer>
    </>
  );
};

export default PitCard;
