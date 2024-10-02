import React, { useState } from 'react';
import { UikitColumn, UikitRow } from './uikit.styled';
import { ESignalType } from '@/models/signal-type.enum';
import { EState } from '@/models/state.enum';
import { ECriterion } from '@/models/criterion.enum';
import { EAlert } from '@/models/alert.enum';
import PitCard from '@/components/pit-card/pit-card';

const pits = [
  {
    name: 'Кедровский УР',
    subname: null,
    value: 50,
    expired: false,
    state: EState.STOP,
    signalType: ESignalType.STOP,
    pitId: 'b9920d07-7004-4e22-870b-d5c261f085a7',
    order: 1,
    signals: [],
    bbox: 'POLYGON((86.04093466077225 55.49769799730061,86.04309587521178 55.59591907682866,86.21887464962636 55.595104973812994,86.21743384000001 55.496881857578906,86.04093466077225 55.49769799730061))',
    maxBbox:
      'POLYGON((85.97915321718594 55.442507969924286,85.97915321718594 55.65065338045447,86.28575381379423 55.65065338045447,86.28575381379423 55.442507969924286,85.97915321718594 55.442507969924286))',
    expiredDataCounter: 0,
    criteria: [
      {
        criterion: ECriterion.SMU,
        signals: [
          {
            status: EAlert.ALERT,
            type: ESignalType.STOP,
            count: 1,
            priority: 3
          },
          {
            status: EAlert.ALERT,
            type: ESignalType.STOP,
            count: 3,
            priority: 33
          },
          {
            status: EAlert.ALERT,
            type: ESignalType.STOP,
            count: 2,
            priority: 4
          },
          {
            status: EAlert.ALERT,
            type: ESignalType.STOP,
            count: 2,
            priority: 870
          },
          {
            status: EAlert.ALERT,
            type: ESignalType.STOP,
            count: 1,
            priority: 850
          }
        ]
      },
      {
        criterion: ECriterion.EXPLOSION,
        signals: [
          {
            status: EAlert.ALERT,
            type: ESignalType.STOP,
            count: 1,
            priority: 1
          }
        ]
      },
      {
        criterion: ECriterion.FIRE,
        signals: [
          {
            status: EAlert.DONE,
            type: ESignalType.WARN,
            count: 1,
            priority: 1
          }
        ]
      },
      {
        criterion: ECriterion.MINING,
        signals: [
          {
            status: EAlert.WORK,
            type: ESignalType.SVC,
            count: 1,
            priority: 1
          }
        ]
      },
      {
        criterion: ECriterion.SEISMIC,
        signals: [
          {
            status: EAlert.CLOSED,
            type: ESignalType.WARN,
            count: 1,
            priority: 1
          }
        ]
      },
      {
        criterion: ECriterion.COMM,
        signals: [
          {
            status: EAlert.DONE,
            type: ESignalType.SVC,
            count: 1,
            priority: 1
          }
        ]
      }
    ]
  },
  {
    name: 'Моховский УР',
    subname: 'Моховское и Сартакинское поля',
    value: null,
    expired: null,
    state: EState.NORM,
    signalType: EState.STOP,
    pitId: '3115b346-ac4e-440d-a8f4-dabdbeda420d',
    order: 2,
    signals: [],
    bbox: 'POLYGON((86.20320342393582 54.481130767654996,86.20320342393582 54.77607943093469,86.72092271706325 54.77607943093469,86.72092271706325 54.481130767654996,86.20320342393582 54.481130767654996))',
    maxBbox:
      'POLYGON((86.20320342393582 54.481130767654996,86.20320342393582 54.77607943093469,86.72092271706325 54.77607943093469,86.72092271706325 54.481130767654996,86.20320342393582 54.481130767654996))',
    expiredDataCounter: null,
    criteria: [
      {
        criterion: ECriterion.SMU,
        signals: [
          {
            status: EAlert.ALERT,
            type: ESignalType.STOP,
            count: 1,
            priority: 3
          },
          {
            status: EAlert.DONE,
            type: ESignalType.WARN,
            count: 3,
            priority: 1
          },
          {
            status: EAlert.ALERT,
            type: ESignalType.WARN,
            count: 2,
            priority: 2
          }
        ]
      }
    ]
  },
  {
    name: 'Моховский УР',
    subname: 'Караканское поле',
    value: null,
    expired: null,
    state: EState.WARN,
    signalType: ESignalType.STOP,
    pitId: 'f1ac9490-0d1e-4169-9a75-d7ebaf19893d',
    order: 3,
    signals: [],
    bbox: 'POLYGON((86.64184947964564 54.32959006846832,86.64184947964564 54.46055596937172,86.91302570679001 54.46055596937172,86.91302570679001 54.32959006846832,86.64184947964564 54.32959006846832))',
    maxBbox:
      'POLYGON((86.64184947964564 54.32959006846832,86.64184947964564 54.46055596937172,86.91302570679001 54.46055596937172,86.91302570679001 54.32959006846832,86.64184947964564 54.32959006846832))',
    expiredDataCounter: null,
    criteria: [
      {
        criterion: ECriterion.SMU,
        signals: [
          {
            status: EAlert.ALERT,
            type: ESignalType.WARN,
            count: 1,
            priority: 3
          },
          {
            status: EAlert.ALERT,
            type: ESignalType.SVC,
            count: 1,
            priority: 3
          }
        ]
      }
    ]
  },
  {
    name: 'Бачатский УР',
    subname: null,
    value: 25,
    expired: true,
    state: EState.NORM,
    signalType: ESignalType.SVC,
    pitId: 'a7d1ea29-bc2f-45f6-857b-ec463fa0ff51',
    order: 4,
    signals: [],
    bbox: 'POLYGON((86.03478451660659 54.21803020838421,86.03478451660659 54.36012632481768,86.3121238398224 54.36012632481768,86.3121238398224 54.21803020838421,86.03478451660659 54.21803020838421))',
    maxBbox:
      'POLYGON((86.03478451660659 54.21803020838421,86.03478451660659 54.36012632481768,86.3121238398224 54.36012632481768,86.3121238398224 54.21803020838421,86.03478451660659 54.21803020838421))',
    expiredDataCounter: 1,
    criteria: [
      {
        criterion: ECriterion.COMM,
        signals: [
          {
            status: EAlert.ALERT,
            type: ESignalType.SVC,
            count: 1,
            priority: 3
          }
        ]
      }
    ]
  },
  {
    name: 'Краснобродский УР',
    subname: 'Краснобродское поле',
    value: null,
    expired: null,
    state: EState.NORM,
    signalType: null,
    pitId: 'f4ccf6ab-5825-4ee6-a0d4-559973948ce6',
    order: 5,
    signals: [],
    bbox: 'POLYGON((86.33195493739952 54.067634434070364,86.33195493739952 54.239878559317724,86.63530964475268 54.239878559317724,86.63530964475268 54.067634434070364,86.33195493739952 54.067634434070364))',
    maxBbox:
      'POLYGON((86.33195493739952 54.067634434070364,86.33195493739952 54.239878559317724,86.63530964475268 54.239878559317724,86.63530964475268 54.067634434070364,86.33195493739952 54.067634434070364))',
    expiredDataCounter: null,
    criteria: []
  }
];

const UikitPitCard = () => {
  const [activePit, setActivePit] = useState('');
  return (
    <>
      <UikitRow style={{ padding: '1rem' }}>
        <UikitColumn>
          <div
            onMouseEnter={() => setActivePit(pits[0].pitId)}
            onMouseLeave={() => setActivePit('')}>
            <PitCard
              dataTestId={`pit-card`}
              name={pits[0].name}
              subname={pits[0].subname}
              state={pits[0].state}
              signalType={ESignalType.STOP}
              signals={pits[0].signals}
              isActive={pits[0].pitId === activePit}
              isAdminMode={false}
              expired={false}
              criteria={pits[0].criteria}>
              {''}
            </PitCard>
          </div>
        </UikitColumn>

        <UikitColumn>
          <div
            onMouseEnter={() => setActivePit(pits[1].pitId)}
            onMouseLeave={() => setActivePit('')}>
            <PitCard
              dataTestId={`pit-card`}
              name={pits[1].name}
              subname={pits[1].subname}
              state={pits[1].state}
              signalType={ESignalType.STOP}
              signals={pits[1].signals}
              isActive={pits[1].pitId === activePit}
              isAdminMode={false}
              expired={false}
              criteria={pits[1].criteria}>
              {''}
            </PitCard>
          </div>
          <div
            onMouseEnter={() => setActivePit(pits[2].pitId)}
            onMouseLeave={() => setActivePit('')}>
            <PitCard
              dataTestId={`pit-card`}
              name={pits[2].name}
              subname={pits[2].subname}
              state={EState.NORM}
              signalType={ESignalType.WARN}
              signals={[]}
              isActive={pits[2].pitId === activePit}
              isAdminMode={false}
              expired={true}
              criteria={pits[2].criteria}>
              {''}
            </PitCard>
          </div>

          <div
            onMouseEnter={() => setActivePit(pits[3].pitId)}
            onMouseLeave={() => setActivePit('')}>
            <PitCard
              dataTestId={`pit-card`}
              name={pits[3].name}
              subname={pits[3].subname}
              state={EState.NORM}
              signalType={ESignalType.SVC}
              signals={[]}
              isActive={pits[3].pitId === activePit}
              isAdminMode={false}
              expired={true}
              criteria={pits[3].criteria}>
              {''}
            </PitCard>
          </div>
        </UikitColumn>

        <UikitColumn>
          <div
            onMouseEnter={() => setActivePit(pits[4].pitId)}
            onMouseLeave={() => setActivePit('')}>
            <PitCard
              dataTestId={`pit-card`}
              name={pits[4].name}
              subname={pits[4].subname}
              state={EState.NORM}
              signalType={null}
              signals={[]}
              isActive={pits[4].pitId === activePit}
              isAdminMode={false}
              expired={true}
              criteria={pits[4].criteria}>
              {''}
            </PitCard>
          </div>
        </UikitColumn>
      </UikitRow>
    </>
  );
};

export default UikitPitCard;
