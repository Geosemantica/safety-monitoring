import { FC } from 'react';
import { CriterionTagContainer } from './criterion-tag.styled';
import Typography from '../shared/typography/typography';
import { ECriterion } from '@/models/criterion.enum';
import useCriterion from './utils/use-criterion';
import { getCriterionColor } from './utils/get-criterion-tag-color';

export enum ELocationCriterionTag {
  CONTROL_ROOM_CARD = 'control-room-card',
  SIGNAL_CARD = 'signal-card',
  CHECK_LIST = 'check-list'
}

interface ICriterionTagProps {
  type: ECriterion;
  location: ELocationCriterionTag;
}

const CriterionTag: FC<ICriterionTagProps> = ({ type, location }) => {
  const { getCriterion } = useCriterion();
  return (
    <CriterionTagContainer color={getCriterionColor(location)}>
      {getCriterion(type).icon}
      <Typography
        as="span"
        level={'text-big'}
        weight="regular"
        color={
          location === ELocationCriterionTag.SIGNAL_CARD
            ? 'var(--text-primary-disabled)'
            : 'var(--elements-system-black)'
        }>
        {getCriterion(type).text}
      </Typography>
    </CriterionTagContainer>
  );
};

export default CriterionTag;
