import { ELocationCriterionTag } from '../criterion-tag';

export const getCriterionColor = (location: ELocationCriterionTag) => {
  switch (location) {
    case ELocationCriterionTag.CONTROL_ROOM_CARD:
      return 'var(--elements-system-grey-600)';
    case ELocationCriterionTag.SIGNAL_CARD:
      return 'var(--elements-system-grey-500)';
    case ELocationCriterionTag.CHECK_LIST:
      return 'var(--elements-system-black)';
    default:
      return 'var(--elements-system-black)';
  }
};
