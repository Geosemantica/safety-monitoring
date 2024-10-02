import { ECriterion } from '@/models/criterion.enum';
import { useTranslation } from 'react-i18next';
import FireAlarmIcon from '../criteria-icons/fire-alarm-icon';
import ExplosionZoneIcon from '../criteria-icons/explosion-zone-icon';
import SoilStabilityIcon from '../criteria-icons/soil-stability-icon';
import MiningBoundariesIcon from '../criteria-icons/mining-boundaries-icon';
import CommunicationSystemsIcon from '../criteria-icons/communication-systems-icon';
import SeismicImpactIcon from '../criteria-icons/seismic-impact-icon';

const useCriterion = () => {
  const { SMU, EXPLOSION, MINING, COMM, FIRE, SEISMIC } = ECriterion;
  const { t } = useTranslation('uikitNEW');

  const tag = {
    [FIRE]: {
      icon: <FireAlarmIcon />,
      text: t('criterionTag.fire')
    },
    [EXPLOSION]: {
      icon: <ExplosionZoneIcon />,
      text: t('criterionTag.explosion')
    },
    [SMU]: {
      icon: <SoilStabilityIcon />,
      text: t('criterionTag.smu')
    },
    [MINING]: {
      icon: <MiningBoundariesIcon />,
      text: t('criterionTag.mining')
    },
    [COMM]: {
      icon: <CommunicationSystemsIcon />,
      text: t('criterionTag.comm')
    },
    [SEISMIC]: {
      icon: <SeismicImpactIcon />,
      text: t('criterionTag.seismic')
    }
  };
  const getCriterion = (type: ECriterion) => {
    return tag[type];
  };

  return { getCriterion };
};

export default useCriterion;
